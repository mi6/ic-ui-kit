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
                            <ic-button appearance="dark" class="dismiss-icon svg-container" title="dismiss" variant="icon">
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
});
