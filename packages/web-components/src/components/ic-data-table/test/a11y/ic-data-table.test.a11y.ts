import { fixture } from "@open-wc/testing-helpers";
import { axe } from "jest-axe";
import { checkShadowElementRendersCorrectly } from "../../../../utils/testa11y.helpers";

describe("ic-data-table", () => {
  it("passes accessibility", async () => {
    const el = await fixture(
      `<ic-data-table></ic-data-table>
      <script>
        var dataTable = document.querySelector('ic-data-table');
        dataTable.columns = [
            {key: "name", title: "Name", dataType: "string"},
            {key: "age", title: "Age", dataType: "number"},
            {key: "department", title: "Department", dataType: "string"},
            {key: "employeeNumber", title: "Employee number", dataType: "number"}
        ];
        dataTable.data = [
            {name: "John Smith", age: 36, department: "Accounts", employeeNumber: 1},
            {name: "Sally Jones", age: 32, department: "Engineering", employeeNumber: 2},
            {name: "Tim Rayes", age: 41, department: "Sales", employeeNumber: 3},
            {name: "Luke Fisher", age: "23", department: "Engineering", employeeNumber: 4},
            {name: "Jane Lock", age: 34, department: "Engineering", employeeNumber: 5},
            {name: "Margaret Hale", age: 45, department: "HR", employeeNumber: 6}
        ];
      </script>`
    );
    checkShadowElementRendersCorrectly(el);
    expect(await axe(el)).toHaveNoViolations();
  });
});
