import { TextField } from "../../ic-text-field";
import { newSpecPage } from "@stencil/core/testing";
import { waitForTimeout } from "../../../../testspec.setup";

describe("ic-text-field", () => {
  it("should render", async () => {
    const page = await newSpecPage({
      components: [TextField],
      html: `<ic-text-field label="Test label" rows=1></ic-text-field>`,
    });

    expect(page.root).toMatchSnapshot("renders");
  });

  it("should render with placeholder", async () => {
    const page = await newSpecPage({
      components: [TextField],
      html: `<ic-text-field label="Test label" placeholder="placeholder" rows=0></ic-text-field>`,
    });

    expect(page.root).toMatchSnapshot("renders-with-placeholder");
  });

  it("should render with value", async () => {
    const page = await newSpecPage({
      components: [TextField],
      html: `<ic-text-field label="Test label" value="test value"></ic-text-field>`,
    });

    expect(page.root).toMatchSnapshot("renders-with-value");
  });

  it("should render with helperText, required and small", async () => {
    const page = await newSpecPage({
      components: [TextField],
      html: `<ic-text-field label="Test label" helper-text="helper text value" required=true size="small"></ic-text-field>`,
    });

    expect(page.root).toMatchSnapshot("renders-with-helpertext");
  });

  it("should render with autoprops", async () => {
    const page = await newSpecPage({
      components: [TextField],
      html: `<ic-text-field label="Test label" value="test value" autofocus=true autocapitalize="on" autocomplete="on" autocorrect="on"></ic-text-field>`,
    });

    expect(page.root).toMatchSnapshot("renders-with-autoprops");
  });

  it("should render with hidden label", async () => {
    const page = await newSpecPage({
      components: [TextField],
      html: `<ic-text-field label="Test label" value="test value" hide-label=true></ic-text-field>`,
    });

    expect(page.root).toMatchSnapshot("renders-with-hidden-label");
  });

  it("should render with icon", async () => {
    const page = await newSpecPage({
      components: [TextField],
      html: `<ic-text-field label="Test label">
        <svg
          slot="icon"
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 0 24 24"
          width="24px"
          fill="#000000"
        >
          <path d="M0 0h24v24H0z" fill="none" />
          <path
            d="M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2z"
          />
        </svg>
      </ic-text-field>`,
    });

    expect(page.root).toMatchSnapshot("renders-with-icon");
  });

  it("should render disabled", async () => {
    const page = await newSpecPage({
      components: [TextField],
      html: `<ic-text-field label="Test label" value="test value" disabled=true></ic-text-field>`,
    });

    expect(page.root).toMatchSnapshot("renders-disabled");
  });

  it("should render readonly", async () => {
    const page = await newSpecPage({
      components: [TextField],
      html: `<ic-text-field label="Test label" value="test value" readonly=true></ic-text-field>`,
    });

    expect(page.root).toMatchSnapshot("renders-readonly");
  });

  it("should render with max characters", async () => {
    const page = await newSpecPage({
      components: [TextField],
      html: `<ic-text-field label="Test label" value="Test value" max-characters=25></ic-text-field>`,
    });

    expect(page.root).toMatchSnapshot("renders-with-max-characters");
  });

  it("should render with max characters and hidden character count", async () => {
    const page = await newSpecPage({
      components: [TextField],
      html: `<ic-text-field label="Test label" value="Test value" max-characters=25 hide-char-count></ic-text-field>`,
    });

    expect(page.root).toMatchSnapshot("renders-with-hidden-char-count");
  });

  it("should render with max characters and a value set which exceeds the max number of characters", async () => {
    const page = await newSpecPage({
      components: [TextField],
      html: `<ic-text-field label="Test label" value="A long value which exceeds the max characters" max-characters=25></ic-text-field>`,
    });

    expect(page.root).toMatchSnapshot("renders-with-max-characters-long-value");
  });

  it("should render with max length message", async () => {
    const page = await newSpecPage({
      components: [TextField],
      html: `<ic-text-field label="Test label" value="a long test value to exceed limit" max-length=25 max-length-message="You have exceeded the maximum length"></ic-text-field>`,
    });

    expect(page.root).toMatchSnapshot("renders-with-max-length-message");
  });

  it("should render with name & full width", async () => {
    const page = await newSpecPage({
      components: [TextField],
      html: `<ic-text-field label="Test label" value="test value" name="mycontrolname" full-width=true></ic-text-field>`,
    });

    expect(page.root).toMatchSnapshot("renders-with-name-full-width");
  });

  it("should render with success validation", async () => {
    const page = await newSpecPage({
      components: [TextField],
      html: `<ic-text-field label="Test label" validation-status="success" validation-text="Good choice!" value="test value"></ic-text-field>`,
    });

    expect(page.root).toMatchSnapshot("renders-with-success-validation");
  });

  it("should render with warning validation", async () => {
    const page = await newSpecPage({
      components: [TextField],
      html: `<ic-text-field label="Test label" validation-status="warning" validation-text="warning text" value="test value"></ic-text-field>`,
    });

    expect(page.root).toMatchSnapshot("renders-with-warning-validation");
  });

  it("should render with error validation", async () => {
    const page = await newSpecPage({
      components: [TextField],
      html: `<ic-text-field label="Test label" validation-status="error" validation-text="error text" value="test value"></ic-text-field>`,
    });

    expect(page.root).toMatchSnapshot("renders-with-error-validation");
  });

  it("should render with inline success validation", async () => {
    const page = await newSpecPage({
      components: [TextField],
      html: `<ic-text-field label="Test label" validation-status="success" validation-text="Good choice!" validation-inline="true" value="test value"></ic-text-field>`,
    });

    expect(page.root).toMatchSnapshot("renders-with-inline-success-validation");
  });

  it("should focus", async () => {
    const page = await newSpecPage({
      components: [TextField],
      html: `<ic-text-field label="Test label" rows=1></ic-text-field>`,
    });

    const callbackFn = jest.fn();
    page.doc.addEventListener("icFocus", callbackFn);
    const input = page.root.shadowRoot.querySelector("input");
    await input.focus();
    expect(callbackFn).toHaveBeenCalled();
  });

  it("should blur", async () => {
    const page = await newSpecPage({
      components: [TextField],
      html: `<ic-text-field label="Test label" rows=1></ic-text-field>`,
    });

    const callbackFn = jest.fn();
    page.doc.addEventListener("icBlur", callbackFn);
    const input = page.root.shadowRoot.querySelector("input");
    await input.blur();
    expect(callbackFn).toHaveBeenCalled();
  });

  it("should not show left icon if text field is disabled", async () => {
    const page = await newSpecPage({
      components: [TextField],
      html: `<ic-text-field label="Test label" rows=1 disabled>
      <svg
          slot="icon"
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 0 24 24"
          width="24px"
          fill="#000000"
        >
          <path d="M0 0h24v24H0z" fill="none" />
          <path
            d="M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2z"
          />
        </svg>
      </ic-text-field>`,
    });

    const slot = page.root.shadowRoot.querySelector(`[slot="icon"]`);
    expect(slot).toBeNull();
  });

  it("should test keydown", async () => {
    const page = await newSpecPage({
      components: [TextField],
      html: `<ic-text-field label="Test label"></ic-text-field>`,
    });

    const eventSpy = jest.fn();
    page.win.addEventListener("icKeydown", eventSpy);
    const event = new KeyboardEvent("keydown", { key: "A" });
    await page.rootInstance.handleKeyDown(event);
    await page.waitForChanges();

    expect(eventSpy).toHaveBeenCalled();
  });

  it("should test input", async () => {
    const page = await newSpecPage({
      components: [TextField],
      html: `<ic-text-field label="Test label"></ic-text-field>`,
    });

    const event = jest.fn();
    page.win.addEventListener("icInput", event);

    await page.rootInstance.onInput({ target: { value: "test value" } });
    await page.waitForChanges();
    expect(page.rootInstance.value).toBe("test value");
    expect(event).toHaveBeenCalled();
  });

  it("should test form reset event", async () => {
    const page = await newSpecPage({
      components: [TextField],
      html: `<form>
        <ic-text-field label="Test label"></ic-text-field>
        <button id="resetButton" type="reset">Reset</button>  
      </form>`,
    });

    expect(page.rootInstance.value).toBe("");
    page.rootInstance.value = "New value";
    await page.waitForChanges();

    expect(page.rootInstance.value).toBe("New value");

    await page.rootInstance.handleFormReset();
    await page.waitForChanges();

    expect(page.rootInstance.value).toBe("");

    //test disconnected callback
    //delay to wait for icchange event to prevent console warning
    await waitForTimeout(500);
    page.setContent("");
  });
});

it("should render with min/max and max validation", async () => {
  const page = await newSpecPage({
    components: [TextField],
    html: `<ic-text-field label="Test label" rows=1 min=1 max=4 value="6" inputmode="numeric" type="number"></ic-text-field>`,
  });

  expect(page.root).toMatchSnapshot("renders-with-max");
});

it("should render with min/max and min validation", async () => {
  const page = await newSpecPage({
    components: [TextField],
    html: `<ic-text-field label="Test label" rows=1 min=1 max=4 value="0" inputmode="numeric" type="number"></ic-text-field>`,
  });

  expect(page.root).toMatchSnapshot("renders-with-min");
});

it("should test setting value cannot exceed maxCharacters", async () => {
  const page = await newSpecPage({
    components: [TextField],
    html: `<ic-text-field label="Test label" rows=1 max-characters=5 value="Test value"></ic-text-field>`,
  });

  expect(page.rootInstance.value).toBe("Test ");

  page.rootInstance.watchValueHandler("Another test value");
  expect(page.rootInstance.value).toBe("Anoth");
});

it("should test maxCharacters method", async () => {
  const page = await newSpecPage({
    components: [TextField],
    html: `<ic-text-field label="Test label" rows=1 max-characters=5></ic-text-field>`,
  });

  page.rootInstance.watchValueHandler("test");
  expect(page.rootInstance.maxCharactersReached).toBe(false);
  page.rootInstance.watchValueHandler("testing");
  expect(page.rootInstance.maxCharactersReached).toBe(true);
});

it("should test minCharacters method", async () => {
  const page = await newSpecPage({
    components: [TextField],
    html: `<ic-text-field label="Test label" rows=1 min-characters=5 value="test"></ic-text-field>`,
  });

  const input = page.root.shadowRoot.querySelector("input");
  input.blur();
  expect(page.rootInstance.minCharactersUnattained).toBe(true);

  page.rootInstance.value = "testing";
  await page.waitForChanges();

  input.blur();
  expect(page.rootInstance.minCharactersUnattained).toBe(false);
});

it("should update any attributes that are inherited from the root element", async () => {
  const page = await newSpecPage({
    components: [TextField],
    html: `<ic-text-field label="Test label"></ic-text-field>`,
  });
  expect(
    page.root.shadowRoot.querySelector("input").getAttribute("title")
  ).toBeNull();

  page.root.setAttribute("title", "new-label");
  page.rootInstance.hostMutationCallback([{ attributeName: "title" }]);
  await page.waitForChanges();

  expect(
    page.root.shadowRoot.querySelector("input").getAttribute("title")
  ).toBe("new-label");
});
