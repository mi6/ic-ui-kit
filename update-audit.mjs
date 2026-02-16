import assert from "node:assert";
import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { parseArgs } from 'node:util';

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

function findSpecificAudit(specificAudits, advisoryId) {
    for (let audit of JSON.parse(specificAudits)) {
        const specificAdvisoryId = Object.keys(audit)[0];
        if (specificAdvisoryId == advisoryId) return true;
    }
    return false;
}

function updateSingleAdvisory(audit, advisoryId) {
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

function setAllExpToNextMonth(auditJSON, specificAuditsToUpdate) {

    for (let audit of auditJSON.allowlist) {
        const advisoryId = Object.keys(audit)[0];
        // Checks if there is a set of new items run and that the audit is in record 
        if(specificAuditsToUpdate.length) {
            const auditMatchFromSingleRange = findSpecificAudit(specificAuditsToUpdate, advisoryId);
            if(auditMatchFromSingleRange) {
                updateSingleAdvisory(audit, advisoryId);
            }
        } else {
            // If no audits has been passed to the script, update all audits
            updateSingleAdvisory(audit, advisoryId);
        }
    }
    return auditJSON;
}

async function main(stdinAudits = []) {
    try {
        const oldAudit = await getAuditContents();
        const newAudit = setAllExpToNextMonth(structuredClone(oldAudit), stdinAudits);
        await writeAuditFileToDisk(newAudit);
    } catch (error) {
        console.error("Error updating audit:", error);
        process.exit(1);
    }
}

const { values: { json } } = parseArgs({
    args: process.argv.slice(2),
    options: {
        json: {
            type: 'boolean',
            short: 'j',
            default: false
        },
    },
    strict: true,
});

// script has been invoked like npm run --silent audit:update -- --json,
if (json) {
    // Stream json generated externally (npm run audit-expiry)
    process.stdin.on('data', async (data) => {
        try {
            const oldAudits = JSON.parse(JSON.stringify(data.toString()));
            await main(oldAudits);
            process.exit(0);
        } catch (error) {
            console.error('Failed to parse JSON input in update-audit:', error);
        }
    });
} else {
    await main([]);
}