import fs from "node:fs/promises";
import path from "node:path";
import { spawnSync } from "node:child_process";
import { fileURLToPath } from "node:url";


const MAX_BUFFER_SIZE = 50 * 1024 * 1024;
const isWindows = process.platform === "win32" ? true : false;

const auditFilename = "audit-ci.json";
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const repoRoot = path.resolve(__dirname, "..");
const auditPath = path.resolve(repoRoot, auditFilename);

async function readAudit() {
    const data = await fs.readFile(auditPath, "utf-8");
    return JSON.parse(data);
}

async function writeAllowlist(jsonData, allowlist) {
    const next = { ...jsonData, allowlist };
    await fs.writeFile(auditPath, JSON.stringify(next, 0, 2), "utf-8");
}

// Runs `npm run audit`. Returns true when the audit passes (exit code 0),
// meaning the advisory that was just removed is no longer reported by npm.
function runAudit() {
    const command = isWindows ? "npm.cmd" : "npm";
    const result = spawnSync(command, ["run", "audit"], {
        cwd: repoRoot,
        encoding: "utf-8",
        stdio: ["ignore", "pipe", "pipe"],
        shell: isWindows,
        maxBuffer: MAX_BUFFER_SIZE
    });
    if (result.error) {
        throw result.error;
    }
    if (typeof result.status !== "number") {
        throw new Error(`\`npm run audit\` did not exit cleanly (signal: ${result.signal ?? "unknown"})`);
    }
    return result.status === 0;
}

async function main() {
    const jsonData = await readAudit();
    const original = jsonData.allowlist;

    if (!Array.isArray(original)) {
        console.error("Expected `allowlist` to be an array in audit-ci.json");
        process.exit(1);
    }

    // Snapshot of every entry to test, tagged with its GHSA id. Entries are
    // referenced by object identity so duplicate GHSA ids are handled safely.
    const entries = original.map((entry) => ({
        id: Object.keys(entry)[0],
        entry,
    }));

    // `working` is the current known-good allowlist. Advisories confirmed as
    // fixed are dropped from it; advisories still present are retained.
    let working = [...original];
    const removed = [];
    const kept = [];

    for (let i = 0; i < entries.length; i++) {
        const { id, entry } = entries[i];
        console.info(`\n[${i + 1}/${entries.length}] Testing ${id} ...`);

        // Remove just this advisory and see if the audit still passes.
        const candidate = working.filter((e) => e !== entry);
        await writeAllowlist(jsonData, candidate);

        try {
            if (runAudit()) {
                // Audit passed without the suppression -> advisory is gone. Keep it removed.
                working = candidate;
                removed.push(id);
                console.info(`  ✔ ${id} is fixed — removed from ${auditFilename}`);
            } else {
                // Audit failed -> advisory still present. Restore the entry.
                await writeAllowlist(jsonData, working);
                kept.push(id);
                console.info(`  ✖ ${id} still active — kept in ${auditFilename}`);
            }
        } catch (error) {
            await writeAllowlist(jsonData, working);
            throw error;
        }
    }

    // Ensure the file reflects the final known-good allowlist.
    await writeAllowlist(jsonData, working);

    console.info("\n===== Audit prune summary =====");
    console.info(`Tested: ${entries.length}`);
    console.info(`Removed (fixed): ${removed.length}${removed.length ? " -> " + removed.join(", ") : ""}`);
    console.info(`Kept (still active): ${kept.length}${kept.length ? " -> " + kept.join(", ") : ""}`);
}

main().catch((error) => {
    console.error("Error pruning audit allowlist:", error);
    process.exit(1);
});