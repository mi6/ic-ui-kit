import { fixture } from "@open-wc/testing-helpers";
import { axe } from "jest-axe";
import { checkShadowElementRendersCorrectly } from "../../../../utils/testa11y.helpers";

describe("dialog component", () => {
  it("passes accessibility", async () => {
    const el = await fixture(`
    <ic-dialog
        label="Success"
        heading="Action was a success!" 
        size="small" 
        status="success"
        alert-heading="Success!"
        alert-message="Action was a success"
        buttons="two"
    >
        Lorem ipsum dolor sit amet, 
        consectetur adipiscing elit, 
        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    </ic-dialog>
    <script>
      dialog = document.querySelector('ic-dialog');
      dialog.buttonProps = [{label: "Click me!", onclick: "alert('clicked')"},{label: "Close", onclick: "this.hideDialog()"},{}];
    </script>`);
    checkShadowElementRendersCorrectly(el);
    expect(await axe(el)).toHaveNoViolations();
  });
});
