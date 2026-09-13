import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const auditPath = path.resolve(__dirname, "..", "audit-ci.json");

function isDateFurtherThanAMonth(dateString) {
  const currentDate = new Date();
  const expiryDate = new Date(dateString);
  const oneMonthFromNow = new Date();
  oneMonthFromNow.setMonth(currentDate.getMonth() + 1);

  return expiryDate > oneMonthFromNow;
}

async function main() {
  try {
    const data = await fs.readFile(auditPath, "utf8");
    const jsonData = JSON.parse(data);
    const { allowlist } = jsonData;
    for (const item of allowlist) {
      const advisoryId = Object.keys(item)[0];
      const itemObj = item[advisoryId];
      if (itemObj.active && isDateFurtherThanAMonth(itemObj.expiry)) {
        console.error(
          `Expiry date for ${advisoryId} is further away than a month.`
        );
        process.exit(1);
      }
    }
  } catch (parseError) {
    console.error("Error parsing JSON in audit-ci.json:", parseError);
  }
}

await main();
