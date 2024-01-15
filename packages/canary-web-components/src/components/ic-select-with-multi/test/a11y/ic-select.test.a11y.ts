import { fixture } from "@open-wc/testing-helpers";
import { axe } from "jest-axe";
import { checkShadowElementRendersCorrectly } from "../../../../utils/testa11y.helpers";

describe("ic-select", () => {
  it("passes accessibility (single)", async () => {
    const el = await fixture(`<ic-select
        label="Select component"
        helper-text="Helper text"
        required
        validation-status="error"
        validation-text="Validation text"
      ></ic-select>
      <script>
        var select = document.querySelector("ic-select");
        var option = "Value 1";
        select.options = [
          {
            label: "Label 1",
            value: "Value 1",
            description: "Description 1",
          },
          {
            label: "Label 2",
            value: "Value 2",
            description: "Description 2",
          },
          {
            label: "Label 3",
            children: [
              {
                label: "Label 4",
                value: "Value 4",
                description: "Description 4",
              },
              {
                label: "Label 5",
                value: "Value 5",
                description: "Description 5",
              },
            ],
          },
        ];
        select.addEventListener("icChange", function (event) {
          option = event.detail.value;
          select.value = option;
        });
      </script>`);
    checkShadowElementRendersCorrectly(el);
    expect(await axe(el)).toHaveNoViolations();
  });

  it("passes accessibility (multi)", async () => {
    const el = await fixture(`<ic-select
        label="Select component"
        helper-text="Helper text"
        required
        multiple
        validation-status="error"
        validation-text="Validation text"
      ></ic-select>
      <script>
        var select = document.querySelector("ic-select");
        var option = "Value 1";
        select.options = [
          {
            label: "Label 1",
            value: "Value 1",
            description: "Description 1",
          },
          {
            label: "Label 2",
            value: "Value 2",
            description: "Description 2",
          },
          {
            label: "Label 3",
            children: [
              {
                label: "Label 4",
                value: "Value 4",
                description: "Description 4",
              },
              {
                label: "Label 5",
                value: "Value 5",
                description: "Description 5",
              },
            ],
          },
        ];
        select.addEventListener("icChange", function (event) {
          option = event.detail.value;
          select.value = option;
        });
      </script>`);
    checkShadowElementRendersCorrectly(el);
    expect(await axe(el)).toHaveNoViolations();
  });

  it("passes accessibility (searchable)", async () => {
    const el = await fixture(`<ic-select
        label="Select component"
        helper-text="Helper text"
        required
        searchable
        validation-status="error"
        validation-text="Validation text"
      ></ic-select>
      <script>
        var select = document.querySelector("ic-select");
        var option = "Value 1";
        select.options = [
          {
            label: "Label 1",
            value: "Value 1",
            description: "Description 1",
          },
          {
            label: "Label 2",
            value: "Value 2",
            description: "Description 2",
          },
          {
            label: "Label 3",
            children: [
              {
                label: "Label 4",
                value: "Value 4",
                description: "Description 4",
              },
              {
                label: "Label 5",
                value: "Value 5",
                description: "Description 5",
              },
            ],
          },
        ];
        select.addEventListener("icChange", function (event) {
          option = event.detail.value;
          select.value = option;
        });
      </script>`);
    checkShadowElementRendersCorrectly(el);
    expect(await axe(el)).toHaveNoViolations();
  });
});
