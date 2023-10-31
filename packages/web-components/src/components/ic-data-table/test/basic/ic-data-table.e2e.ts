import { newE2EPage } from "@stencil/core/testing";

beforeAll(() => {
  jest.spyOn(console, "warn").mockImplementation(jest.fn());
});

const columnsWithNoTextWrap = `[
  { key: "name", title: "Name", dataType: "string" },
  { key: "age", title: "Age", dataType: "number" },
  { key: "department", title: "Department", dataType: "string" },
  { key: "employeeNumber", title: "Employee number", dataType: "number" },
  { key: "jobTitle", title: "Job Title", dataType: "string"},
]`;

const columnsWithTextWrap = `[
  { key: "name", title: "Name", dataType: "string" },
  { key: "age", title: "Age", dataType: "number" },
  { key: "department", title: "Department", dataType: "string" },
  { key: "employeeNumber", title: "Employee number", dataType: "number" },
  { key: "jobTitle", title: "Job Title", dataType: "string", textWrap: true },
]`;

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

const dataWithLongTextAndTextWrap = `[
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
    textWrap: true,
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
  rowHeight?: number,
  cols = columnsWithNoTextWrap,
  data = dataWithLongText
) => `
  <ic-data-table caption="test-table"${attributes}></ic-data-table>
  <script>
    const dataTable = document.querySelector("ic-data-table");
    dataTable.columns = ${cols};
    dataTable.data = ${data};${
  rowHeight ? `\ndataTable.globalRowHeight = ${rowHeight};` : ""
}
  </script>
`;

describe("ic-data-table", () => {
  describe("truncation & textWrap", () => {
    it("should truncate, add a line clamp and wrap with a tooltip the cell typography if it is too long to fit into the cell container", async () => {
      const page = await newE2EPage();
      await page.setContent(getDataTableContent());
      await page.waitForChanges();

      const { tagName, divStyles, longCellTypographyLineClamp } =
        await page.evaluate(() => {
          const longCellTypography = document
            .querySelector("ic-data-table")
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
        getDataTableContent(' truncation-pattern="showHide"')
      );
      await page.waitForChanges();

      const { maxLinesProp, hasButton } = await page.evaluate(() => {
        const typographyEl = document
          .querySelector("ic-data-table")
          .shadowRoot.querySelector("#jobTitle-1") as HTMLIcTypographyElement;
        return {
          maxLinesProp: typographyEl.maxLines,
          hasButton: !!typographyEl.shadowRoot.querySelector("button"),
        };
      });

      expect(maxLinesProp).toBe(1);
      expect(hasButton).toBeTruthy();
    });

    it("should remove the fixed height of a column's cells when 'text-wrap' is set on the column", async () => {
      const page = await newE2EPage();
      await page.setContent(getDataTableContent("", null, columnsWithTextWrap));
      await page.waitForChanges();

      (
        await page.evaluate(() =>
          [0, 1, 2, 3, 4, 5].map(
            (i) =>
              document
                .querySelector("ic-data-table")
                .shadowRoot.querySelector(`#jobTitle-${i}`).parentElement.style[
                "height"
              ]
          )
        )
      ).forEach((height) => expect(height).toBe(""));
    });

    it("should remove the fixed height of a row's cells when 'text-wrap' is set on the row", async () => {
      const page = await newE2EPage();
      await page.setViewport({ width: 1626, height: 517 });
      await page.setContent(
        getDataTableContent(
          "",
          null,
          columnsWithNoTextWrap,
          dataWithLongTextAndTextWrap
        )
      );
      await page.waitForChanges();

      const getRowHeight = async (rowIndex: number) =>
        await page.evaluate(
          (rowIndex) =>
            ["name", "age", "department", "employeeNumber", "jobTitle"].map(
              (key) =>
                document
                  .querySelector("ic-data-table")
                  .shadowRoot.querySelector(`#${key}-${rowIndex}`).parentElement
                  .style["height"]
            ),
          rowIndex
        );

      (await getRowHeight(2)).forEach((height) => expect(height).toBe("")); //Row with textWrap
      (await getRowHeight(4)).forEach((height) => expect(height).toBe("24px"));
    });

    it("should truncate previously visible cell content when the row height changes to a smaller value", async () => {
      const page = await newE2EPage();
      await page.setViewport({ width: 1626, height: 517 });
      await page.setContent(
        getDataTableContent("", 200, columnsWithNoTextWrap, dataWithLongText)
      );

      const getParentTagName = async () =>
        await page.evaluate(
          () =>
            document
              .querySelector("ic-data-table")
              .shadowRoot.querySelector("#jobTitle-1").parentElement.tagName
        );

      expect(await getParentTagName()).toBe("DIV");

      (await page.find("ic-data-table")).setProperty("globalRowHeight", 40);
      await page.waitForChanges();
      expect(await getParentTagName()).toBe("IC-TOOLTIP");

      (await page.find("ic-data-table")).setProperty("globalRowHeight", 200);
      await page.waitForChanges();
      expect(await getParentTagName()).toBe("DIV");
    });

    it("should truncate previously visible cell content using `See more/See less` when the row height changes to a smaller value", async () => {
      const page = await newE2EPage();
      await page.setViewport({ width: 1626, height: 517 });
      await page.setContent(
        getDataTableContent(
          ' truncation-pattern="showHide"',
          200,
          columnsWithNoTextWrap,
          dataWithLongText
        )
      );

      const getSeeMoreButton = async () =>
        await page.evaluate(
          () =>
            !!document
              .querySelector("ic-data-table")
              .shadowRoot.querySelector("#jobTitle-1")
              .shadowRoot.querySelector("button")
        );

      expect(await getSeeMoreButton()).toBeFalsy();

      (await page.find("ic-data-table")).setProperty("globalRowHeight", 40);
      await page.waitForChanges();
      expect(await getSeeMoreButton()).toBeTruthy();

      (await page.find("ic-data-table")).setProperty("globalRowHeight", 80);
      await page.waitForChanges();
      expect(await getSeeMoreButton()).toBeFalsy();
    });
  });
});
