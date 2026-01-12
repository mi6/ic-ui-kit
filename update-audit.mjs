import assert from "node:assert";
import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const auditFilename = "audit-ci.json";

function getPrettyDate(date) {
    return date.toLocaleString("en-gb", { day: "2-digit", month: "long", year: "numeric", });
}

async function getAuditContents() {
    const __dirname = path.dirname(fileURLToPath(import.meta.url));
    const auditPath = path.resolve(__dirname, auditFilename);
    const data = await fs.readFile(auditPath, "utf-8");
    return JSON.parse(data);
}

async function writeAuditFileToDisk(jsonData) {
    await fs.writeFile(auditFilename, JSON.stringify(jsonData, 0, 2), "utf-8");
    console.info("Audit file updated!");
}

function setAllExpToNextMonth(auditJSON) {
    for (let audit of auditJSON.allowlist) {
        const advisoryId = Object.keys(audit)[0];
        const auditObject = audit[advisoryId];
        const expiryAsDate = new Date(auditObject.expiry);
        // ensure parsed date is equal format as in json
        assert.deepEqual(auditObject.expiry, getPrettyDate(expiryAsDate), "Dates are identical");
        // set date to next month
        expiryAsDate.setMonth(expiryAsDate.getMonth() + 1);
        const nextMonth = getPrettyDate(expiryAsDate);
        // set expiry to next month
        auditObject.expiry = nextMonth;
    }
    return auditJSON;
}

async function main() {
    try {
        const oldAudit = await getAuditContents();
        const newAudit = setAllExpToNextMonth(structuredClone(oldAudit));
        assert.notDeepStrictEqual(oldAudit, newAudit, "Audit json differs");
        await writeAuditFileToDisk(newAudit);
    } catch (error) {
        console.error("Error updating audit:", error);
        process.exit(1);
    }
}

main();