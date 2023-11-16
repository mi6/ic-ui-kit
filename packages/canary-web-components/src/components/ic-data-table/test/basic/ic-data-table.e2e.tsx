import { newE2EPage } from "@stencil/core/testing";

beforeAll(() => {
  jest.spyOn(console, "warn").mockImplementation(jest.fn());
});

const dataTable = "ic-data-table";

const columnsWithNoTextWrap = `[
  { key: "name", title: "Name", dataType: "string" },
  { key: "age", title: "Age", dataType: "number" },
  { key: "department", title: "Department", dataType: "string" },
  { key: "employeeNumber", title: "Employee number", dataType: "number" },
  { key: "jobTitle", title: "Job Title", dataType: "string"},
]`;

// const columnsWithTextWrap = `[
//   { key: "name", title: "Name", dataType: "string" },
//   { key: "age", title: "Age", dataType: "number" },
//   { key: "department", title: "Department", dataType: "string" },
//   { key: "employeeNumber", title: "Employee number", dataType: "number" },
//   { key: "jobTitle", title: "Job Title", dataType: "string", textWrap: true },
// ]`;

const dataWithLongText = `[
  {
    name: "John Smith",
    age: 36,
    department: "Accounts & Finance",
    employeeNumber: 1,
    jobTitle: "Senior Financial Operations and Reporting Analyst",
  },
  {
    name: "Sally Jones",
    age: 32,
    department: "Engineering",
    employeeNumber: 2,
    jobTitle:
      "Senior Software Engineer, Site Reliability Engineering (Microsoft Azure)",
  },
  {
    name: "Tim Rayes",
    age: 41,
    department: "Sales and Marketing",
    employeeNumber: 3,
    jobTitle:
      "Regional Sales and Marketing Strategy Director (Europe, the Middle East, and Africa)",
  },
  {
    name: "Luke Fisher",
    age: "23",
    department: "Engineering (Mobile App Development)",
    employeeNumber: 4,
    jobTitle: "Junior Tester",
  },
  {
    name: "Jane Lock",
    age: 34,
    department: "Engineering",
    employeeNumber: 5,
    jobTitle: "Junior Product Manager",
  },
  {
    name: "Margaret Hale",
    age: 45,
    department: "HR",
    employeeNumber: 6,
    jobTitle: "Junior Human Resource Information Specialist",
  },
]`;

const getDataTableContent = (
  attributes?: string,
  cols = columnsWithNoTextWrap
) => `
  <ic-data-table caption="test-table" ${attributes}></ic-data-table>
  <script>
    const dataTable = document.querySelector("ic-data-table");
    dataTable.columns = ${cols};
    dataTable.data = ${dataWithLongText};
  </script>
`;

describe(dataTable, () => {
  describe("truncation & textWrap", () => {
    it("should truncate, add a line clamp and wrap with a tooltip the cell typography if it is too long to fit into the cell container", async () => {
      const page = await newE2EPage();
      await page.setContent(getDataTableContent());
      await page.waitForChanges();

      const { tagName, divStyles, longCellTypographyLineClamp } =
        await page.evaluate(() => {
          const longCellTypography = document
            .querySelector(dataTable)
            .shadowRoot.querySelector("#jobTitle-2");
          const parentEl = longCellTypography.parentElement;
          const { height, overflowY } = window.getComputedStyle(
            parentEl.parentElement
          );

          return {
            tagName: parentEl.tagName,
            divStyles: {
              height,
              overflowY,
            },
            longCellTypographyLineClamp:
              window.getComputedStyle(longCellTypography).webkitLineClamp,
          };
        });

      expect(longCellTypographyLineClamp).toBe("1");
      expect(tagName).toBe("IC-TOOLTIP");
      expect(divStyles).toMatchObject({
        height: "24px",
        overflowY: "hidden",
      });
    });

    it("should truncate using ic-typography's see more/see less button when truncationPattern is set to `showHide`", async () => {
      const page = await newE2EPage();
      await page.setContent(
        getDataTableContent('truncation-pattern="showHide"')
      );
      await page.waitForChanges();

      const { maxLinesProp, hasButton } = await page.evaluate(() => {
        const typographyEl = document
          .querySelector(dataTable)
          .shadowRoot.querySelector("#jobTitle-2") as HTMLIcTypographyElement;
        return {
          maxLinesProp: typographyEl.maxLines,
          hasButton: !!typographyEl.shadowRoot.querySelector("button"),
        };
      });

      expect(maxLinesProp).toBe(1);
      expect(hasButton).toBeTruthy();
    });
    // it("should automatically resize to fit all lines of text in a column's cells when 'texconst page = await newE2EPage();
    // const page = await newE2EPage();
    // await page.setContent(getDataTableContent());
    // await page.waitForChanges();/     // div > div > table > tbody > tr:nth-child(2) > td:nth-child(4) > div
    //   //     // const page = await newSpecPage({
    //   //     //   components: [DataTable],
    //   //     //   template: () => (
    //   //     //     <ic-data-table
    //   //     //       caption="test table"
    //   //     //       columns={columnsWithTextWrap}
    //   //     //       data={dataWithLongText}
    //   //     //     ></ic-data-table>
    //   //     //   ),
    //   //     // });
    //   //     // console.log(page)
    //   //     // expect(page.root).toMatchSnapshot();
    //   //     // the column width should not be altered
    // });
  });
});

//   it("should automatically resize to fit all lines of text in a column's cells when 'text-wrap' is set on the column", async () => {
//     // div > div > table > tbody > tr:nth-child(2) > td:nth-child(4) > div

//     // const page = await newSpecPage({
//     //   components: [DataTable],
//     //   template: () => (
//     //     <ic-data-table
//     //       caption="test table"
//     //       columns={columnsWithTextWrap}
//     //       data={dataWithLongText}
//     //     ></ic-data-table>
//     //   ),
//     // });

//     // console.log(page)
//     // expect(page.root).toMatchSnapshot();
//     // the column width should not be altered
//   });

//   it("should automatically resize all the cells in a row to fit all lines of text if 'text-wrap' has been set on the tallest cell in that row", async () => {
//     // const page = await newSpecPage({
//     //   components: [DataTable],
//     //   template: () => (
//     //     <ic-data-table
//     //       caption="test table"
//     //       columns={columnsWithTextWrap}
//     //       data={dataWithLongText}
//     //     ></ic-data-table>
//     //   ),
//     // });

//     // the column width should not be altered
//     // other cells should add whitespace to fill,
//     // And the other cells should adhere to their alignment properties.
//   });

//   it("should have no effect on the cells in a row if 'text-wrap' has been set on a cell in that row that is not the tallest", async () => {
//     // other cells should add whitespace to fill,
//     // And the other cells should adhere to their alignment properties.
//   });

//   /*TODO: Text wrap

// Given that a table cell is currently set to wrap
// When something else then occurs to adjust the row height,
// Then the wrapping property should be removed
// and the cell should follow normal truncation pattern.

// Truncation

// Given that a cell has a set height and width,
// When its contents is larger than can be displayed in the cell,
// Then it wrap onto multiple lines if space is available,
// And the remaining text should be truncated with an ellipsis.

// Given that a cell is truncated
// When its size changes, either by column width changing, or row height changing
// Then the text should resize to fill the available space.

// Given that a truncated text cell exists
// When hovering over its contents,
// Then a tooltip should display containing the full cell contents, but be limited to 6 lines of text before it also truncates.
// (for really long content, we will need a method to be able to display the full text, either in future by providing ability to change column width and row height, or by setting text wrap)
// (should the lines of text visible in a tooltip be customisable?)
// (How wide should the tooltip be? Do tooltips have a max-width?)

// Optional see more/less button
// Given that a text cell exists, and the text is truncated
// When setting its properties
// Thenan option exists to set the typography element's see more/less functionality,
// And if set then a see more button should appear on a new line under the truncated text,
// And the row height should expand to fit the content if necessary.

// Given that a text cell is truncated, and the typography component see more function is set,
// When the see more button is clicked
// Then the full text should be displayed,
// And the row height should be adjusted to fit,
// And the 'see more' button should switch to a 'see less' button, still situated on a new line below the untruncated text.

// Given that a truncated text cell is expanded
// When clicking the 'see less' button,
// Then the cell should revert to the collapsed state
// and the previous row-height should be set
// and the 'see less' button should revert to 'see more'.

// */

//ARRANGE:
//     - do I compare vs data table without truncation? textWrap only set on a cell - change this above

//     ACT:
//     -
//     -

//     ASSERT:
//     - the height of the cell has increased ?? maybe not
//     - the text has not been truncated - i.e. no overflow hidden on the text
//     - check that the column width is the same
//     */
//     // console.log
//     // expect(page.root).toMatchSnapshot();
//     // the column width should not be altered
//   });
