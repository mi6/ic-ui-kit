import { newSpecPage } from "@stencil/core/testing";
import { ToggleButton } from "../../ic-toggle-button";

describe("ic-toggle-button component", () => {
  it("should render", async () => {
    const page = await newSpecPage({
      components: [ToggleButton],
      html: `<ic-toggle-button label="Toggle"></ic-toggle-button>`,
    });

    expect(page.root).toMatchSnapshot();
  });

  it("should render icon variant", async () => {
    const page = await newSpecPage({
      components: [ToggleButton],
      html: `<ic-toggle-button variant="icon" accessible-label="Refresh the page">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 0 24 24"
            width="24px"
            fill="#000000"
          >
            <path d="M0 0h24v24H0V0z" fill="none" />
            <path
              d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"
            />
          </svg>
        </ic-toggle-button>`,
    });

    expect(page.root).toMatchSnapshot();
  });

  it("should render slotted icon", async () => {
    const page = await newSpecPage({
      components: [ToggleButton],
      html: `<ic-toggle-button label="Toggle">
          <svg
            slot="icon"
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 0 24 24"
            width="24px"
            fill="#000000"
          >
            <path d="M0 0h24v24H0V0z" fill="none" />
            <path
              d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"
            />
          </svg>
        </ic-toggle-button>`,
    });

    expect(page.root).toMatchSnapshot();
  });

  it("should render slotted icon with icon placement", async () => {
    const page = await newSpecPage({
      components: [ToggleButton],
      html: `<ic-toggle-button label="Toggle" icon-placement="right">
          <svg
            slot="icon"
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 0 24 24"
            width="24px"
            fill="#000000"
          >
            <path d="M0 0h24v24H0V0z" fill="none" />
            <path
              d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"
            />
          </svg>
        </ic-toggle-button>`,
    });

    expect(page.root).toMatchSnapshot();
  });

  it("should render slotted badge", async () => {
    const page = await newSpecPage({
      components: [ToggleButton],
      html: `<ic-toggle-button label="Toggle">
          <ic-badge label="1" slot="badge" variant="success"></ic-badge>
        </ic-toggle-button>`,
    });

    expect(page.root).toMatchSnapshot();
  });

  it("should update checked value on click", async () => {
    const page = await newSpecPage({
      components: [ToggleButton],
      html: `<ic-toggle-button label="Toggle" id='test-button' onclick='alert('test')'></ic-toggle-button>`,
    });

    expect(page.rootInstance.checked).toBeFalsy();

    const element = document.getElementById("test-button");

    element.click();

    await page.waitForChanges();

    expect(page.rootInstance.checked).toBeTruthy();
  });

  it("should emit icToggleChecked on click", async () => {
    const page = await newSpecPage({
      components: [ToggleButton],
      html: `<ic-toggle-button label="Toggle" id='test-button' onclick='alert('test')'></ic-toggle-button>`,
    });

    const eventSpy = jest.fn();

    page.win.addEventListener("icToggleChecked", eventSpy);

    page.rootInstance.handleClick();

    await page.waitForChanges();

    expect(eventSpy).toHaveBeenCalled();
  });

  it("should stop immediate propagation of a click event when disabled", async () => {
    const page = await newSpecPage({
      components: [ToggleButton],
      html: `<ic-toggle-button label="Toggle" id='test-button' disabled=true onclick='alert('test')'></ic-toggle-button>`,
    });

    jest.spyOn(window, "alert").mockImplementation();

    const element = document.getElementById("test-button");

    element.click();

    await page.waitForChanges();

    expect(window.alert).not.toHaveBeenCalled;
  });
});
