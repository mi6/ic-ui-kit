import { newSpecPage } from "@stencil/core/testing";
import { Hero } from "./ic-hero";

describe("ic-hero component", () => {
  it("should render", async () => {
    const page = await newSpecPage({
      components: [Hero],
      html: `<ic-hero heading="Test title" subheading="Test text"></ic-hero>`,
    });

    expect(page.root).toMatchSnapshot("renders");
  });

  it("should render with a secondary heading", async () => {
    const page = await newSpecPage({
      components: [Hero],
      html: `<ic-hero heading="Test title" subheading="Test text" secondary-heading="Test title" secondary-subheading="Test text"></ic-hero>`,
    });

    expect(page.root).toMatchSnapshot("renders-with-secondary-heading");
  });

  it("should render with interaction content", async () => {
    const page = await newSpecPage({
      components: [Hero],
      html: `<ic-hero heading="Test title" subheading="Test text"><ic-button slot="interaction">Button</ic-button></ic-hero>`,
    });

    expect(page.root).toMatchSnapshot("renders-with-interaction-content");
  });

  it("should render with secondary content", async () => {
    const page = await newSpecPage({
      components: [Hero],
      html: `<ic-hero heading="Test title" subheading="Test text"><ic-card slot="secondary" heading="Test card"></ic-card></ic-hero>`,
    });

    expect(page.root).toMatchSnapshot("renders-with-secondary-content");
  });

  it("should render with a background image when given", async () => {
    const page = await newSpecPage({
      components: [Hero],
      html: `<ic-hero heading="Test title" subheading="Test text" background-image="test.png"><ic-card slot="secondary" heading="Test card"></ic-card></ic-hero>`,
    });

    expect(page.root).toMatchSnapshot("renders-with-background-image");
  });

  it("should use parallax on scroll when a background image is given", async () => {
    const page = await newSpecPage({
      components: [Hero],
      html: `<ic-hero heading="Test title" subheading="Test text" background-image="test.png"><ic-card slot="secondary" heading="Test card"></ic-card></ic-hero>`,
    });

    page.doc.scrollingElement.scrollTop = 50;
    page.doc.dispatchEvent(new CustomEvent("scroll"));

    await page.waitForChanges();

    expect(page.root).toMatchSnapshot("renders-with-parallax-on-scroll");
  });

  it("should use not parallax on scroll when a background image is given, but parallax disabled", async () => {
    const page = await newSpecPage({
      components: [Hero],
      html: `<ic-hero heading="Test title" disable-background-parallax subheading="Test text" background-image="test.png"><ic-card slot="secondary" heading="Test card"></ic-card></ic-hero>`,
    });

    page.doc.scrollingElement.scrollTop = 50;
    page.doc.dispatchEvent(new CustomEvent("scroll"));

    await page.waitForChanges();

    expect(page.root).toMatchSnapshot(
      "renders-with-parallax-on-scroll-disabled"
    );
  });

  it("should render small", async () => {
    const page = await newSpecPage({
      components: [Hero],
      html: `<ic-hero small heading="Test title" subheading="Test text"></ic-hero>`,
    });

    expect(page.root).toMatchSnapshot("renders-small-variant");
  });

  it("correctly sets foregroundColor on theme change", async () => {
    const page = await newSpecPage({
      components: [Hero],
      html: `<ic-hero heading="Test title" subheading="Test text"></ic-hero>`,
    });

    await page.rootInstance.themeChangeHandler({ detail: { mode: "dark" } });
    await page.waitForChanges();

    expect(page.rootInstance.foregroundColor).toBe("dark");
  });
});
