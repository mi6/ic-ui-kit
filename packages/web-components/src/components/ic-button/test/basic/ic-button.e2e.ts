import { newE2EPage } from "@stencil/core/testing";

describe("ic-button component", () => {
  it("Should have the correct text", async () => {
    const page = await newE2EPage();
    await page.setContent(`<ic-button>Button</ic-button>`);
    await page.waitForChanges();

    const button = await page.find("ic-button");
    const text = button.innerText;

    expect(text).toBe("Button");
  });

  it("Should have loading bar when loading", async () => {
    const page = await newE2EPage();
    await page.setContent(`<ic-button loading>Button</ic-button>`);
    await page.waitForChanges();

    const loadingBar = await page.find("ic-button >>> ic-loading-indicator");

    expect(loadingBar).not.toBeNull();
  });

  it("Should be clickable with onclick", async () => {
    const page = await newE2EPage();
    await page.setContent(
      `
        <ic-button id='ic-button' onclick='change()'>Button</ic-button>
        <script>
        function change() {
          document.getElementById("ic-button").innerText = 'Test';
        }
        </script>
        `
    );
    const button = await page.find("#ic-button");

    await button.click();

    expect(button.innerText).toBe("Test");
  });

  it("Should not be clickable when disabled", async () => {
    const page = await newE2EPage();
    await page.setContent(
      `
        <ic-button id='ic-button' onclick='change()' disabled>Button</ic-button>
        <script>
        function change() {
          document.getElementById("ic-button").innerText = 'Test';
        }
        </script>
        `
    );
    const button = await page.find("#ic-button");

    await button.click();

    expect(button.innerText).toBe("Button");
  });

  it("Should not be clickable when loading", async () => {
    const page = await newE2EPage();
    await page.setContent(
      `
        <ic-button id='ic-button' onclick='change()' loading>Button</ic-button>
        <script>
        function change() {
          document.getElementById("ic-button").innerText = 'Test';
        }
        </script>
        `
    );
    const button = await page.find("#ic-button");

    await button.click();

    expect(button.innerText).toBe("Button");
  });

  it("should pass onclick method", async () => {
    const page = await newE2EPage();
    await page.setContent(
      `
        <ic-button id='ic-button' onclick='updateText()'>Button</ic-button>
        <p id="text"></p>
        <script>
          function updateText() {
            document.getElementById('text').innerText = "Demo"
          }
        </script>
      `
    );

    const p = await page.find("#text");
    const button = await page.find("#ic-button");

    await button.click();

    expect(p.innerText).toBe("Demo");
  });

  it("should clear text field value when reset button inside form tag", async () => {
    const page = await newE2EPage();
    await page.setContent(
      `
        <form>
          <input type="text" id="name" />
          <ic-button id='ic-button' type="reset">Reset</ic-button>
        </form>
      `
    );

    const textfield = await page.find("#name");
    const button = await page.find("#ic-button");

    await textfield.press("f");
    await textfield.press("o");
    await textfield.press("o");

    expect(await textfield.getProperty("value")).toBe("foo");

    await button.click();

    expect(await textfield.getProperty("value")).toBe("");
  });

  it("should not clear text field value if reset button outside of form tag", async () => {
    const page = await newE2EPage();
    await page.setContent(
      `
      <div>
        <form>
          <input type="text" id="name" />
        </form>
        <ic-button id='ic-button' type="reset">Reset</ic-button>
      </div>
      `
    );

    const textfield = await page.find("#name");
    const button = await page.find("#ic-button");

    await textfield.press("f");
    await textfield.press("o");
    await textfield.press("o");

    await button.click();

    expect(await textfield.getProperty("value")).toBe("foo");
  });

  it("should submit form on submit button click if submit button inside form tag", async () => {
    const page = await newE2EPage();
    await page.setContent(
      `
        <form>
          <input type="text" id="name" />
          <ic-button id='ic-button' type="submit">Submit</ic-button>
        </form>
        <p id="text"></p>
        <script>
          document.addEventListener('submit', (ev) => {
            ev.preventDefault();
            document.getElementById('text').innerText = 'submitted';
          })
        </script>
      `
    );

    const button = await page.find("#ic-button");
    const p = await page.find("#text");

    await button.click();

    expect(p.innerText).toBe("submitted");
  });

  it("should not submit form on submit button click outside of form tag", async () => {
    const page = await newE2EPage();
    await page.setContent(
      `
        <form>
          <input type="text" id="name" />
        </form>
        <ic-button id='ic-button' type="submit">Submit</ic-button>
        <p id="text">idle</p>
        <script>
          document.addEventListener('submit', (ev) => {
            ev.preventDefault();
            document.getElementById('text').innerText = 'submitted';
          })
        </script>
      `
    );

    const button = await page.find("#ic-button");
    const p = await page.find("#text");

    await button.click();

    expect(p.innerText).toBe("idle");
  });

  it("should emit icFocus on focus event", async () => {
    const page = await newE2EPage();
    await page.setContent(`<ic-button>Button</ic-button>`);

    const button = await page.find("ic-button");
    const spy = await page.spyOnEvent("icFocus");

    await button.callMethod("setFocus");
    await page.waitForChanges();

    expect(spy).toHaveReceivedEvent();
  });

  it("should emit icBlur on blur event", async () => {
    const page = await newE2EPage();
    await page.setContent(
      `<ic-button>Button</ic-button>
      <button id="secondary-button">Secondary</button>`
    );

    const button = await page.find("ic-button");
    const secButton = await page.find("#secondary-button");
    const spy = await page.spyOnEvent("icBlur");

    await button.callMethod("setFocus");
    await secButton.click();
    await page.waitForChanges();

    expect(spy).toHaveReceivedEvent();
  });

  it("should test aria-describedby being updated", async () => {
    const page = await newE2EPage();
    await page.setContent(
      `
      <script>
        function btnClick(){
          var descEl = document.querySelector("#button-description");
          descEl.innerText = "See, I told you it was amazing!";
        }
      </script>
      <div>
        <span id="button-description">This button does something amazing</span>
        <br />
        <ic-button variant="primary" onclick="btnClick()" aria-describedby="button-description"
          >Button</ic-button
        >
      </div>
      `
    );

    const button = await page.find("ic-button");
    let hiddenDescribedBy = await page.find(
      "ic-button >>> #button-description"
    );
    expect(hiddenDescribedBy.innerText).toBe(
      "This button does something amazing"
    );

    await button.click();
    await page.waitForChanges();

    hiddenDescribedBy = await page.find("ic-button >>> #button-description");
    expect(hiddenDescribedBy.innerText).toBe("See, I told you it was amazing!");
  });
});
