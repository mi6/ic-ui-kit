import { newSpecPage } from "@stencil/core/testing";
import { ClassificationBanner } from "../../ic-classification-banner";

describe("ic-classification-banner component", () => {
  it("should render with default message when no classification set", async () => {
    const page = await newSpecPage({
      components: [ClassificationBanner],
      html: `<ic-classification-banner></ic-classification-banner>`,
    });

    expect(page.root).toEqualHtml(`
        <ic-classification-banner>
          <mock:shadow-root>
            <banner aria-label="Protective marking" class="classification-banner default">
                <ic-typography variant="caption-uppercase">protective marking not set</ic-typography>
            </banner>
          </mock:shadow-root>
        </ic-classification-banner>
`);
  });

  it("should render with official message", async () => {
    const page = await newSpecPage({
      components: [ClassificationBanner],
      html: `<ic-classification-banner classification="official"></ic-classification-banner>`,
    });

    expect(page.root).toEqualHtml(`
        <ic-classification-banner classification="official">
          <mock:shadow-root>
            <banner aria-label="Protective marking" class="classification-banner official">
                <span class="offscreen">The protective marking of this page is: </span>
                <ic-typography variant="caption-uppercase">uk official</ic-typography>
            </banner>
          </mock:shadow-root>
        </ic-classification-banner>`);
  });

  it("should render with official sensitive message", async () => {
    const page = await newSpecPage({
      components: [ClassificationBanner],
      html: `<ic-classification-banner classification="official-sensitive"></ic-classification-banner>`,
    });

    expect(page.root).toEqualHtml(`
        <ic-classification-banner classification="official-sensitive">
          <mock:shadow-root>
            <banner aria-label="Protective marking" class="classification-banner official-sensitive">
                <span class="offscreen">The protective marking of this page is: </span>
                <ic-typography variant="caption-uppercase">uk official sensitive</ic-typography>
            </banner>
          </mock:shadow-root>
        </ic-classification-banner>`);
  });

  it("should render with secret message", async () => {
    const page = await newSpecPage({
      components: [ClassificationBanner],
      html: `<ic-classification-banner classification="secret"></ic-classification-banner>`,
    });

    expect(page.root).toEqualHtml(`
        <ic-classification-banner classification="secret">
          <mock:shadow-root>
            <banner aria-label="Protective marking" class="classification-banner secret">
                <span class="offscreen">The protective marking of this page is: </span>
                <ic-typography variant="caption-uppercase">uk secret</ic-typography>
            </banner>
          </mock:shadow-root>
        </ic-classification-banner>`);
  });

  it("should render with top secret message", async () => {
    const page = await newSpecPage({
      components: [ClassificationBanner],
      html: `<ic-classification-banner classification="top-secret"></ic-classification-banner>`,
    });

    expect(page.root).toEqualHtml(`
        <ic-classification-banner classification="top-secret">
          <mock:shadow-root>
            <banner aria-label="Protective marking" class="classification-banner top-secret">
                <span class="offscreen">The protective marking of this page is: </span>
                <ic-typography variant="caption-uppercase">uk top secret</ic-typography>
            </banner>
          </mock:shadow-root>
        </ic-classification-banner>`);
  });

  it("should render with up to before classification", async () => {
    const page = await newSpecPage({
      components: [ClassificationBanner],
      html: `<ic-classification-banner classification="official" up-to=true></ic-classification-banner>`,
    });

    expect(page.root).toEqualHtml(`
        <ic-classification-banner classification="official" up-to=true>
          <mock:shadow-root>
            <banner aria-label="Protective marking" class="classification-banner official">
                <span class="offscreen">The protective marking of this page is: </span>
                <ic-typography variant="caption-uppercase">up to uk official</ic-typography>
            </banner>
          </mock:shadow-root>
        </ic-classification-banner>`);
  });

  it("should render with a different country when supplied", async () => {
    const page = await newSpecPage({
      components: [ClassificationBanner],
      html: `<ic-classification-banner classification="official" country="us"></ic-classification-banner>`,
    });

    expect(page.root).toEqualHtml(`
        <ic-classification-banner classification="official" country="us">
          <mock:shadow-root>
            <banner aria-label="Protective marking" class="classification-banner official">
                <span class="offscreen">The protective marking of this page is: </span>
                <ic-typography variant="caption-uppercase">us official</ic-typography>
            </banner>
          </mock:shadow-root>
        </ic-classification-banner>`);
  });

  it('should render with no country when supplied ""', async () => {
    const page = await newSpecPage({
      components: [ClassificationBanner],
      html: `<ic-classification-banner classification="official" country=""></ic-classification-banner>`,
    });

    expect(page.root).toEqualHtml(`
        <ic-classification-banner classification="official" country="">
        <mock:shadow-root>
            <banner aria-label="Protective marking" class="classification-banner official">
                <span class="offscreen">The protective marking of this page is: </span>
                <ic-typography variant="caption-uppercase">official</ic-typography>
            </banner>
          </mock:shadow-root>
        </ic-classification-banner>`);
  });

  it("should render with additional selectors after classification when supplied", async () => {
    const page = await newSpecPage({
      components: [ClassificationBanner],
      html: `<ic-classification-banner classification="official" additional-selectors="ukic"></ic-classification-banner>`,
    });

    expect(page.root).toEqualHtml(`
        <ic-classification-banner classification="official" additional-selectors="ukic">
        <mock:shadow-root>
            <banner aria-label="Protective marking" class="classification-banner official">
                <span class="offscreen">The protective marking of this page is: </span>
                <ic-typography variant="caption-uppercase">uk official ukic</ic-typography>
            </banner>
            </mock:shadow-root>
        </ic-classification-banner>`);
  });
});
