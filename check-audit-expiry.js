const fs = require('fs');

function isDateFurtherThanAMonth(dateString) {
  const currentDate = new Date();
  const expiryDate = new Date(dateString);
  const oneMonthFromNow = new Date();
  oneMonthFromNow.setMonth(currentDate.getMonth() + 1);

  return expiryDate > oneMonthFromNow;
}

fs.readFile('audit-ci.json', 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading audit-ci.json:', err);
    return;
  }

  try {
    const jsonData = JSON.parse(data);
    const allowlist = jsonData.allowlist;

    for (const key in allowlist) {
      const item = allowlist[key];
      const advisoryId = Object.keys(item)[0];
      const itemObj = item[advisoryId];
      if (itemObj.active && isDateFurtherThanAMonth(itemObj.expiry)) {
        console.error(`Expiry date for ${advisoryId} is further away than a month.`);
        process.exit(1);
      }
    }
  } catch (parseError) {
    console.error('Error parsing JSON in audit-ci.json:', parseError);
  }
});