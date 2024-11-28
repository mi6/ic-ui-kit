import { newSpecPage } from "@stencil/core/testing";
import { Alert } from "../../ic-alert";

describe("ic-alert component", () => {
  it("should render with a heading when supplied", async () => {
    const page = await newSpecPage({
      components: [Alert],
      html: `<ic-alert heading="Test heading"></ic-alert>`,
    });

    expect(page.root).toEqualHtml(`
        <ic-alert class="dark" heading="Test heading" role="alert">
            <mock:shadow-root>
                <div class="container container-neutral">
                    <div class="alert-icon-container">
                        <div class="divider divider-neutral"></div>
                        <span class="alert-icon icon-neutral svg-container">
                            svg
                        </span>
                    </div>
                    <div class="alert-content">
                        <div class="alert-message">
                            <ic-typography class="alert-title" variant="subtitle-large">
                                <p>
                                    Test heading
                                </p>
                            </ic-typography>
                            <slot name="message">
                                <ic-typography variant="body"></ic-typography>
                            </slot>
                        </div>
                    </div>
                    <div class="dismiss-icon-container">
                    </div>
                </div>
            </mock:shadow-root>
        </ic-alert>`);
  });

  it("should render with a message when supplied", async () => {
    const page = await newSpecPage({
      components: [Alert],
      html: `<ic-alert message="Test message"></ic-alert>`,
    });

    expect(page.root).toEqualHtml(`
        <ic-alert class="dark" message="Test message" role="alert">
            <mock:shadow-root>
                <div class="container container-neutral">
                    <div class="alert-icon-container">
                    <div class="divider divider-neutral"></div>
                        <span class="alert-icon icon-neutral svg-container">
                            svg
                        </span>
                    </div>
                    <div class="alert-content">
                        <div class="alert-message">
                            <slot name="message">
                                <ic-typography variant="body">
                                    Test message
                                </ic-typography>
                            </slot>
                        </div>
                    </div>
                    <div class="dismiss-icon-container">
                    </div>
                </div>
            </mock:shadow-root>
        </ic-alert>`);
  });

  it("should render an action in the correct position when supplied", async () => {
    const page = await newSpecPage({
      components: [Alert],
      html: `<ic-alert message="This has an action"><button slot="action"></button></ic-alert>`,
    });

    expect(page.root).toEqualHtml(`
        <ic-alert class="dark" message="This has an action" role="alert">
            <mock:shadow-root>
                <div class="container container-neutral">
                    <div class="alert-icon-container">
                        <div class="divider divider-neutral"></div>
                        <span class="alert-icon icon-neutral svg-container">
                            svg
                        </span>
                    </div>
                    <div class="alert-content">
                        <div class="alert-message">
                            <slot name="message">
                                <ic-typography variant="body">
                                    This has an action
                                </ic-typography>
                            </slot>
                        </div>
                        <div class="alert-action-container">
                            <slot name="action"></slot>
                        </div>
                    </div>
                    <div class="dismiss-icon-container">
                    </div>
                </div>
            </mock:shadow-root>
            <button slot="action"></button>
        </ic-alert>`);
  });

  it("should render with a dismiss icon when the prop is applied", async () => {
    const page = await newSpecPage({
      components: [Alert],
      html: `<ic-alert message="This is dismissible" dismissible=true></ic-alert>`,
    });

    expect(page.root).toEqualHtml(`
            <ic-alert class="dark" message="This is dismissible" dismissible=true role="alert">
                <mock:shadow-root>
                    <div class="container container-neutral">
                        <div class="alert-icon-container">
                            <div class="divider divider-neutral"></div>
                            <span class="alert-icon icon-neutral svg-container">
                                svg
                            </span>
                        </div>
                        <div class="alert-content">
                            <div class="alert-message">
                                <slot name="message">
                                    <ic-typography variant="body">
                                        This is dismissible
                                    </ic-typography>
                                </slot>
                            </div>
                        </div>
                        <div class="dismiss-icon-container">
                            <ic-button class="dismiss-icon svg-container" theme="dark" title="dismiss" variant="icon">
                                svg
                            </ic-button>
                        </div>
                    </div>
                </mock:shadow-root>
            </ic-alert>`);
  });

  it("should render an element in the message slot", async () => {
    const page = await newSpecPage({
      components: [Alert],
      html: `<ic-alert heading="Using custom message"><ic-typography variant="h1" slot="message">Custom h1 message</ic-typography></ic-alert>`,
    });

    expect(page.root).toEqualHtml(`
        <ic-alert class="dark" heading="Using custom message" role="alert">
            <mock:shadow-root>
                <div class="container container-neutral">
                    <div class="alert-icon-container">
                        <div class="divider divider-neutral"></div>
                            <span class="alert-icon icon-neutral svg-container">
                                svg
                            </span>
                        </div>
                    <div class="alert-content">
                        <div class="alert-message">
                            <ic-typography class="alert-title" variant="subtitle-large">
                                <p>
                                    Using custom message
                                </p>
                            </ic-typography>
                            <slot name="message">
                                <ic-typography variant="body"></ic-typography>
                            </slot>
                        </div>
                    </div>
                    <div class="dismiss-icon-container"></div>
                </div>
            </mock:shadow-root>
            <ic-typography variant="h1" slot="message">Custom h1 message</ic-typography>
        </ic-alert>`);
  });

  it("should render an icon in the neutral-icon slot", async () => {
    const page = await newSpecPage({
      components: [Alert],
      html: `
        <ic-alert heading="Using custom icon" message="This has a slotted icon">
          <svg slot="neutral-icon" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000">
          <path d="M0 0h24v24H0V0z" fill="none" />
          <path d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"/>
          </svg>
        </ic-alert>
        `,
    });

    expect(page.root).toEqualHtml(`
        <ic-alert class="dark" heading="Using custom icon" message="This has a slotted icon" role="alert">
            <mock:shadow-root>
                <div class="container container-neutral">
                    <div class="alert-icon-container">
                        <div class="divider divider-neutral"></div>
                        <div class="alert-icon icon-neutral svg-container">
                        <slot name="neutral-icon"></slot>
                    </div>
                </div>
                <div class="alert-content">
                    <div class="alert-message">
                    <ic-typography class="alert-title" variant="subtitle-large">
                    <p>
                        Using custom icon
                    </p>
                    </ic-typography>
                <slot name="message">
                <ic-typography variant="body">
                  This has a slotted icon
                </ic-typography>
              </slot>
            </div>
          </div>
          <div class="dismiss-icon-container"></div>
        </div>
      </mock:shadow-root>
      <svg fill="#000000" height="24px" slot="neutral-icon" viewBox="0 0 24 24" width="24px" xmlns="http://www.w3.org/2000/svg">
        <path d="M0 0h24v24H0V0z" fill="none"></path>
        <path d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"></path>
      </svg>
    </ic-alert>`);
  });

  it("should render with no icon when the show-default-icon prop is set to false", async () => {
    const page = await newSpecPage({
      components: [Alert],
      html: `<ic-alert heading="No icon" message="This alert has no icon" show-defaul-icon=false></ic-alert>`,
    });

    expect(page.root).toEqualHtml(`
        <ic-alert class="dark" heading="No icon" message="This alert has no icon" role="alert" show-defaul-icon="false">
        <mock:shadow-root>
            <div class="container container-neutral">
            <div class="alert-icon-container">
                <div class="divider divider-neutral"></div>
                <span class="alert-icon icon-neutral svg-container">
                svg
                </span>
            </div>
            <div class="alert-content">
                <div class="alert-message">
                <ic-typography class="alert-title" variant="subtitle-large">
                    <p>
                    No icon
                    </p>
                </ic-typography>
                <slot name="message">
                    <ic-typography variant="body">
                    This alert has no icon
                    </ic-typography>
                </slot>
                </div>
            </div>
            <div class="dismiss-icon-container"></div>
            </div>
        </mock:shadow-root>
        </ic-alert>`);
  });

  it("should render default icon of success variant when the show-default-icon prop is set to false", async () => {
    const page = await newSpecPage({
      components: [Alert],
      html: `<ic-alert heading="Success" message="This alert has the default success icon" variant="success" show-default-icon="false"></ic-alert>`,
    });

    expect(page.root).toEqualHtml(`
        <ic-alert class="dark" heading="Success" message="This alert has the default success icon" role="alert" show-default-icon="false" variant="success">
        <mock:shadow-root>
            <div class="container container-success">
            <div class="alert-icon-container">
                <div class="divider divider-success"></div>
                <span class="alert-icon icon-success svg-container">
                svg
                </span>
            </div>
            <div class="alert-content">
                <div class="alert-message">
                <ic-typography class="alert-title" variant="subtitle-large">
                    <p>
                    Success
                    </p>
                </ic-typography>
                <slot name="message">
                    <ic-typography variant="body">
                    This alert has the default success icon
                    </ic-typography>
                </slot>
                </div>
            </div>
            <div class="dismiss-icon-container"></div>
            </div>
        </mock:shadow-root>
        </ic-alert>
        `);
  });

  it("should close on dismiss icon click", async () => {
    const page = await newSpecPage({
      components: [Alert],
      html: `<ic-alert message="This is dismissible" dismissible=true></ic-alert>`,
    });

    let alert = await page.root.shadowRoot.querySelector(
      "div.container-neutral"
    );
    const dismissButton = await page.root.shadowRoot.querySelector("ic-button");

    expect(alert).not.toBeNull();
    expect(dismissButton).not.toBeNull();

    await dismissButton.click();

    await page.waitForChanges();
    alert = await page.root.shadowRoot.querySelector("div.container-neutral");

    expect(alert).toBeNull();
  });

  it("should test rendering an action after initial render", async () => {
    const page = await newSpecPage({
      components: [Alert],
      html: `<ic-alert heading="Test heading"></ic-alert>`,
    });

    const action = document.createElement("button");
    action.setAttribute("slot", "action");

    page.rootInstance.hostMutationCallback([
      {
        type: "childList",
        addedNodes: [action],
        removedNodes: [],
      },
    ]);
  });
});
