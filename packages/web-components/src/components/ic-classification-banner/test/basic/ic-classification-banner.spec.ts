import { newSpecPage } from "@stencil/core/testing";
import { ClassificationBanner } from "../../ic-classification-banner";

describe("ic-classification-banner component", () => {
  it("should render with default classification text when no classification set", async () => {
    const page = await newSpecPage({
      components: [ClassificationBanner],
      html: `<ic-classification-banner></ic-classification-banner>`,
    });

    expect(page.root).toMatchSnapshot();
  });

  it("should render with official classification text", async () => {
    const page = await newSpecPage({
      components: [ClassificationBanner],
      html: `<ic-classification-banner classification="official"></ic-classification-banner>`,
    });

    expect(page.root).toMatchSnapshot();
  });

  it("should render with official sensitive classification text", async () => {
    const page = await newSpecPage({
      components: [ClassificationBanner],
      html: `<ic-classification-banner classification="official-sensitive"></ic-classification-banner>`,
    });

    expect(page.root).toMatchSnapshot();
  });

  it("should render with secret classification text", async () => {
    const page = await newSpecPage({
      components: [ClassificationBanner],
      html: `<ic-classification-banner classification="secret"></ic-classification-banner>`,
    });

    expect(page.root).toMatchSnapshot();
  });

  it("should render with top secret classification text", async () => {
    const page = await newSpecPage({
      components: [ClassificationBanner],
      html: `<ic-classification-banner classification="top-secret"></ic-classification-banner>`,
    });

    expect(page.root).toMatchSnapshot();
  });

  it("should render with up to before classification", async () => {
    const page = await newSpecPage({
      components: [ClassificationBanner],
      html: `<ic-classification-banner classification="official" up-to=true></ic-classification-banner>`,
    });

    expect(page.root).toMatchSnapshot();
  });

  it("should render with a different country when supplied", async () => {
    const page = await newSpecPage({
      components: [ClassificationBanner],
      html: `<ic-classification-banner classification="official" country="us"></ic-classification-banner>`,
    });

    expect(page.root).toMatchSnapshot();
  });

  it('should render with no country when supplied ""', async () => {
    const page = await newSpecPage({
      components: [ClassificationBanner],
      html: `<ic-classification-banner classification="official" country=""></ic-classification-banner>`,
    });

    expect(page.root).toMatchSnapshot();
  });

  it("should render default banner if no props are passed", async () => {
    const page = await newSpecPage({
      components: [ClassificationBanner],
      html: `<ic-classification-banner></ic-classification-banner>`,
    });

    expect(page.root).toMatchSnapshot();
  });

  it("should render default banner if props with empty strings are passed", async () => {
    const page = await newSpecPage({
      components: [ClassificationBanner],
      html: `<ic-classification-banner classification="" country="" additionalSelectors=""></ic-classification-banner>`,
    });

    expect(page.root).toMatchSnapshot();
  });

  it("should render default banner if props with undefined are passed", async () => {
    const page = await newSpecPage({
      components: [ClassificationBanner],
      html: `<ic-classification-banner classification=${undefined} country=${undefined} additionalSelectors=${undefined}></ic-classification-banner>`,
    });

    expect(page.root).toMatchSnapshot();
  });

  it("should render with additional selectors after classification when supplied", async () => {
    const page = await newSpecPage({
      components: [ClassificationBanner],
      html: `<ic-classification-banner classification="official" additional-selectors="ukic"></ic-classification-banner>`,
    });

    expect(page.root).toMatchSnapshot();
  });
});
