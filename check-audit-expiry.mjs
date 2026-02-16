import fs from "node:fs/promises";
import { parseArgs } from 'node:util';


function isDateFurtherThanAMonth(dateString) {
  const currentDate = new Date();
  const expiryDate = new Date(dateString);
  const oneMonthFromNow = new Date();
  oneMonthFromNow.setMonth(currentDate.getMonth() + 1);

  return expiryDate > oneMonthFromNow;
}

async function main() {
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
  const failedAudits = [];
  try {
    const data = await fs.readFile("audit-ci.json", "utf8");
    const jsonData = JSON.parse(data);
    const { allowlist } = jsonData;
    for (const item of allowlist) {
      const advisoryId = Object.keys(item)[0];
      const itemObj = item[advisoryId];

      // TODO ic-ui-kit team add || advisoryId === 'GHSA-7fh5-64p2-3v2j' to test a single vulnerability when running npm run audit:poll
      if (itemObj.active && isDateFurtherThanAMonth(itemObj.expiry)) {
        if (json === false) {
          console.error(
            `Expiry date for ${advisoryId} is further away than a month.`
          );
          process.exit(1);
        }
        failedAudits.push(item);
      }

    }
    if (json) {
      // Write the failed audits to stdout in json format
      const jsonOutput = JSON.stringify(failedAudits, null, 2);
      process.stdout.write(jsonOutput);
    }
  } catch (parseError) {
    console.error("Error parsing JSON in audit-ci.json:", parseError);
  }
}

await main();
