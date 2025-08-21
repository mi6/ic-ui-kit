import { TextField } from "../../ic-text-field";
import { newSpecPage } from "@stencil/core/testing";

describe("ic-text-field", () => {
  it("should render a textarea", async () => {
    const page = await newSpecPage({
      components: [TextField],
      html: `<ic-text-field rows="6" label="Test label"></ic-text-field>`,
    });

    expect(page.root).toMatchSnapshot();
  });

  it("should render textarea with placeholder", async () => {
    const page = await newSpecPage({
      components: [TextField],
      html: `<ic-text-field rows="6" label="Test label" placeholder="placeholder"></ic-text-field>`,
    });

    expect(page.root).toMatchSnapshot();
  });

  it("should render textarea with value", async () => {
    const page = await newSpecPage({
      components: [TextField],
      html: `<ic-text-field rows="6" label="Test label" value="test value"></ic-text-field>`,
    });

    expect(page.root).toMatchSnapshot();
  });

  it("should render textarea with helperText, required and small", async () => {
    const page = await newSpecPage({
      components: [TextField],
      html: `<ic-text-field rows="6" label="Test label" size="small" helper-text="helper text value" required=true></ic-text-field>`,
    });

    expect(page.root).toMatchSnapshot();
  });

  it("should render textarea with autoprops", async () => {
    const page = await newSpecPage({
      components: [TextField],
      html: `<ic-text-field rows="6" label="Test label" value="test value" autofocus=true autocapitalize="on" autocomplete="on" autocorrect="on"></ic-text-field>`,
    });

    expect(page.root).toMatchSnapshot();
  });

  it("should render textarea with hidden label", async () => {
    const page = await newSpecPage({
      components: [TextField],
      html: `<ic-text-field rows="6" label="Test label" value="test value" hide-label=true></ic-text-field>`,
    });

    expect(page.root).toMatchSnapshot();
  });

  it("should render textarea with icon", async () => {
    const page = await newSpecPage({
      components: [TextField],
      html: `<ic-text-field rows="6" label="Test label">
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

    expect(page.root).toMatchSnapshot();
  });

  it("should render textarea disabled", async () => {
    const page = await newSpecPage({
      components: [TextField],
      html: `<ic-text-field rows="6" label="Test label" value="test value" disabled=true></ic-text-field>`,
    });

    expect(page.root).toMatchSnapshot();
  });

  it("should render textarea readonly", async () => {
    const page = await newSpecPage({
      components: [TextField],
      html: `<ic-text-field rows="6" label="Test label" value="test value" readonly=true></ic-text-field>`,
    });

    expect(page.root).toMatchSnapshot();
  });

  it("should render textarea with max characters", async () => {
    const page = await newSpecPage({
      components: [TextField],
      html: `<ic-text-field rows=6 label="Test label" value="Test value" max-characters=25></ic-text-field>`,
    });

    expect(page.root).toMatchSnapshot();
  });

  it("should render with max characters and hidden character count", async () => {
    const page = await newSpecPage({
      components: [TextField],
      html: `<ic-text-field rows=6 label="Test label" value="Test value" max-characters=25 hide-char-count></ic-text-field>`,
    });

    expect(page.root).toMatchSnapshot();
  });

  it("should render textarea with name & full width", async () => {
    const page = await newSpecPage({
      components: [TextField],
      html: `<ic-text-field rows=2 label="Test label" value="test value" name="mycontrolname" full-width=true></ic-text-field>`,
    });

    expect(page.root).toMatchSnapshot();
  });

  it("should render textarea with success validation", async () => {
    const page = await newSpecPage({
      components: [TextField],
      html: `<ic-text-field rows=6 label="Test label" validation-status="success" validation-text="Good choice!" value="test value"></ic-text-field>`,
    });

    expect(page.root).toMatchSnapshot();
  });

  it("should render textarea with warning validation", async () => {
    const page = await newSpecPage({
      components: [TextField],
      html: `<ic-text-field rows=6 label="Test label" validation-status="warning" validation-text="warning text" value="test value"></ic-text-field>`,
    });

    expect(page.root).toMatchSnapshot();
  });

  it("should render textarea with error validation", async () => {
    const page = await newSpecPage({
      components: [TextField],
      html: `<ic-text-field rows=6 label="Test label" validation-status="error" validation-text="error text" value="test value"></ic-text-field>`,
    });

    expect(page.root).toMatchSnapshot();
  });

  it("should render textarea with resize", async () => {
    const page = await newSpecPage({
      components: [TextField],
      html: `<ic-text-field rows=6 label="Test label" resize=true value="test value"></ic-text-field>`,
    });

    expect(page.root).toMatchSnapshot();
  });

  it("should emit icScroll when a textarea is scrolled", async () => {
    const page = await newSpecPage({
      components: [TextField],
      html: `<ic-text-field rows=2 label="Test label" resize=true value="test value"></ic-text-field>`,
    });

    const eventSpy = jest.fn();
    page.root?.addEventListener("icScroll", eventSpy);

    expect(eventSpy).not.toHaveBeenCalled();

    page.rootInstance.onTextAreaScroll();
    page.waitForChanges();

    expect(eventSpy).toHaveBeenCalledTimes(1);
  });
});
