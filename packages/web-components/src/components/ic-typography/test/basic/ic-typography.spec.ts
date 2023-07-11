import { newSpecPage } from "@stencil/core/testing";
import { Typography } from "../../ic-typography";

describe("ic-typography component", () => {
  it("should render with default body styles", async () => {
    const page = await newSpecPage({
      components: [Typography],
      html: `<ic-typography>IC Typography Test</ic-typography>`,
    });

    expect(page.root).toMatchSnapshot();
  });

  it("should render h1 with h1 variant", async () => {
    const page = await newSpecPage({
      components: [Typography],
      html: `<ic-typography variant="h1">IC Typography Test</ic-typography>`,
    });

    expect(page.root).toMatchSnapshot();
  });

  it("should render h2 with h2 variant", async () => {
    const page = await newSpecPage({
      components: [Typography],
      html: `<ic-typography variant="h2">IC Typography Test</ic-typography>`,
    });

    expect(page.root).toMatchSnapshot();
  });

  it("should render h3 with h3 variant", async () => {
    const page = await newSpecPage({
      components: [Typography],
      html: `<ic-typography variant="h3">IC Typography Test</ic-typography>`,
    });

    expect(page.root).toMatchSnapshot();
  });

  it("should render h4 with h4 variant", async () => {
    const page = await newSpecPage({
      components: [Typography],
      html: `<ic-typography variant="h4">IC Typography Test</ic-typography>`,
    });

    expect(page.root).toMatchSnapshot();
  });

  it("should render h5 with subtitle-large variant", async () => {
    const page = await newSpecPage({
      components: [Typography],
      html: `<ic-typography variant="subtitle-large">IC Typography Test</ic-typography>`,
    });

    expect(page.root).toMatchSnapshot();
  });

  it("should render h6 with subtitle-small variant", async () => {
    const page = await newSpecPage({
      components: [Typography],
      html: `<ic-typography variant="subtitle-small">IC Typography Test</ic-typography>`,
    });

    expect(page.root).toMatchSnapshot();
  });

  it("should render with body variant", async () => {
    const page = await newSpecPage({
      components: [Typography],
      html: `<ic-typography variant="body">IC Typography Test</ic-typography>`,
    });

    expect(page.root).toMatchSnapshot();
  });

  it("should render caption variant", async () => {
    const page = await newSpecPage({
      components: [Typography],
      html: `<ic-typography variant="caption">IC Typography Test</ic-typography>`,
    });

    expect(page.root).toMatchSnapshot();
  });

  it("should render caption uppercase variant", async () => {
    const page = await newSpecPage({
      components: [Typography],
      html: `<ic-typography variant="caption-uppercase">IC Typography Test</ic-typography>`,
    });

    expect(page.root).toMatchSnapshot();
  });

  it("should render label with label variant", async () => {
    const page = await newSpecPage({
      components: [Typography],
      html: `<ic-typography variant="label">IC Typography Test</ic-typography>`,
    });

    expect(page.root).toMatchSnapshot();
  });

  it("should render label uppercase with label-uppercase variant", async () => {
    const page = await newSpecPage({
      components: [Typography],
      html: `<ic-typography variant="label-uppercase">IC Typography Test</ic-typography>`,
    });

    expect(page.root).toMatchSnapshot();
  });

  it("should render code large with code-large variant", async () => {
    const page = await newSpecPage({
      components: [Typography],
      html: `<ic-typography variant="code-large">IC Typography Test</ic-typography>`,
    });

    expect(page.root).toMatchSnapshot();
  });

  it("should render code small with code-small variant", async () => {
    const page = await newSpecPage({
      components: [Typography],
      html: `<ic-typography variant="code-small">IC Typography Test</ic-typography>`,
    });

    expect(page.root).toMatchSnapshot();
  });

  it("should render code extra small with code-extra-small variant", async () => {
    const page = await newSpecPage({
      components: [Typography],
      html: `<ic-typography variant="code-extra-small">IC Typography Test</ic-typography>`,
    });

    expect(page.root).toMatchSnapshot();
  });

  it("should render badge with badge variant", async () => {
    const page = await newSpecPage({
      components: [Typography],
      html: `<ic-typography variant="badge">IC Typography Test</ic-typography>`,
    });

    expect(page.root).toMatchSnapshot();
  });

  it("should render badge small with badge-small variant", async () => {
    const page = await newSpecPage({
      components: [Typography],
      html: `<ic-typography variant="badge-small">IC Typography Test</ic-typography>`,
    });

    expect(page.root).toMatchSnapshot();
  });

  it("should allow semantic component to be passed in and variant styling applied", async () => {
    const page = await newSpecPage({
      components: [Typography],
      html: `<ic-typography variant="h1"><h3>IC Typography Test</h3></ic-typography>`,
    });

    expect(page.root).toMatchSnapshot();
  });

  it("should apply vertical margins class if vertical margins prop true", async () => {
    const page = await newSpecPage({
      components: [Typography],
      html: `<ic-typography apply-vertical-margins>IC Typography Test</ic-typography>`,
    });

    expect(page.root).toMatchSnapshot();
  });

  it("should apply className provided to root element to typography element", async () => {
    const page = await newSpecPage({
      components: [Typography],
      html: `<ic-typography class="test-class">IC Typography Test</ic-typography>`,
    });

    expect(page.root).toMatchSnapshot();
  });

  it("should render the typography with truncation", async () => {
    const page = await newSpecPage({
      components: [Typography],
      html: `<ic-typography max-lines="3">
        Body of text that is truncated to three lines. Click the 'See more' link to
        expand the text, then click 'See less' to truncate the text once more!
        Dripper caramelization java saucer grounds galão, mocha, and robusta
        kopi-luwak, percolator, instant, qui saucer latte in brewed café au
        lait. Con panna, cup, cream, body americano affogato cup espresso, rich
        milk seasonal saucer grinder spoon that cultivar strong redeye
        frappuccino barista extraction redeye mazagran.
      </ic-typography>`,
    });

    expect(page.root).toMatchSnapshot();

    page.rootInstance.truncated = true;

    await page.waitForChanges();

    expect(page.root).toMatchSnapshot();
  });

  it("should test toggle of see more/less", async () => {
    const page = await newSpecPage({
      components: [Typography],
      html: `<ic-typography max-lines="3">
        Body of text that is truncated to three lines. Click the 'See more' link to
        expand the text, then click 'See less' to truncate the text once more!
        Dripper caramelization java saucer grounds galão, mocha, and robusta
        kopi-luwak, percolator, instant, qui saucer latte in brewed café au
        lait. Con panna, cup, cream, body americano affogato cup espresso, rich
        milk seasonal saucer grinder spoon that cultivar strong redeye
        frappuccino barista extraction redeye mazagran.
      </ic-typography>`,
    });

    page.rootInstance.checkMaxLines(96);
    await page.waitForChanges();

    expect(page.rootInstance.truncated).toBe(true);
    expect(page.rootInstance.expanded).toBe(false);

    const button = page.root.shadowRoot.querySelector("button");

    button.click();
    await page.waitForChanges();
    expect(page.rootInstance.expanded).toBe(true);

    button.click();
    await page.waitForChanges();
    expect(page.rootInstance.expanded).toBe(false);
  });

  it("should test truncation applied when number of lines exceeds max", async () => {
    const page = await newSpecPage({
      components: [Typography],
      html: `<ic-typography max-lines="3">
        Body of text that is truncated to three lines. Click the 'See more' link to
        expand the text, then click 'See less' to truncate the text once more!
        Dripper caramelization java saucer grounds galão, mocha, and robusta
        kopi-luwak, percolator, instant, qui saucer latte in brewed café au
        lait. Con panna, cup, cream, body americano affogato cup espresso, rich
        milk seasonal saucer grinder spoon that cultivar strong redeye
        frappuccino barista extraction redeye mazagran.
      </ic-typography>`,
    });

    page.rootInstance.checkMaxLines(96);
    await page.waitForChanges();

    expect(page.rootInstance.truncated).toBe(true);
  });

  it("should test checkMarkerPosition", async () => {
    const page = await newSpecPage({
      components: [Typography],
      html: `<ic-typography max-lines="3">
        Body of text that is truncated to three lines. Click the 'See more' link to
        expand the text, then click 'See less' to truncate the text once more!
        Dripper caramelization java saucer grounds galão, mocha, and robusta
        kopi-luwak, percolator, instant, qui saucer latte in brewed café au
        lait. Con panna, cup, cream, body americano affogato cup espresso, rich
        milk seasonal saucer grinder spoon that cultivar strong redeye
        frappuccino barista extraction redeye mazagran.
      </ic-typography>`,
    });

    page.rootInstance.truncatedHeight = 300;
    page.rootInstance.checkMarkerPosition(100, 200);

    expect(page.rootInstance.truncated).toBe(false);
    expect(page.rootInstance.expanded).toBe(false);

    page.rootInstance.checkMarkerPosition(100, 500);
    expect(page.rootInstance.truncated).toBe(true);
  });

  it("should test truncation button focus", async () => {
    const page = await newSpecPage({
      components: [Typography],
      html: `<ic-typography max-lines="3">
        Body of text that is truncated to three lines. Click the 'See more' link to
        expand the text, then click 'See less' to truncate the text once more!
        Dripper caramelization java saucer grounds galão, mocha, and robusta
        kopi-luwak, percolator, instant, qui saucer latte in brewed café au
        lait. Con panna, cup, cream, body americano affogato cup espresso, rich
        milk seasonal saucer grinder spoon that cultivar strong redeye
        frappuccino barista extraction redeye mazagran.
      </ic-typography>`,
    });

    page.rootInstance.truncated = true;
    await page.waitForChanges();

    const button = page.root.shadowRoot.querySelector("button");
    button.focus();
    await page.waitForChanges();
    expect(button).toHaveClass("focus");

    button.blur();
    await page.waitForChanges();
    expect(button).not.toHaveClass("focus");
  });

  it("should test truncation button mousedown handler", async () => {
    const page = await newSpecPage({
      components: [Typography],
      html: `<ic-typography max-lines="3">
        Body of text that is truncated to three lines. Click the 'See more' link to
        expand the text, then click 'See less' to truncate the text once more!
        Dripper caramelization java saucer grounds galão, mocha, and robusta
        kopi-luwak, percolator, instant, qui saucer latte in brewed café au
        lait. Con panna, cup, cream, body americano affogato cup espresso, rich
        milk seasonal saucer grinder spoon that cultivar strong redeye
        frappuccino barista extraction redeye mazagran.
      </ic-typography>`,
    });

    page.rootInstance.truncated = true;
    await page.waitForChanges();

    const button = page.root.shadowRoot.querySelector("button");

    const event = new Event("mousedown", {
      bubbles: true,
      cancelable: true,
    });

    button.dispatchEvent(event);
    await page.waitForChanges();
    expect(page.rootInstance.focusBtnFromKeyboard).toBe(false);

    button.focus();
    await page.waitForChanges();
    expect(button).not.toHaveClass("focus");
  });

  it("should test resizeObserver", async () => {
    const page = await newSpecPage({
      components: [Typography],
      html: `<ic-typography max-lines="3">
        Body of text that is truncated to three lines. Click the 'See more' link to
        expand the text, then click 'See less' to truncate the text once more!
        Dripper caramelization java saucer grounds galão, mocha, and robusta
        kopi-luwak, percolator, instant, qui saucer latte in brewed café au
        lait. Con panna, cup, cream, body americano affogato cup espresso, rich
        milk seasonal saucer grinder spoon that cultivar strong redeye
        frappuccino barista extraction redeye mazagran.
      </ic-typography>`,
    });

    page.rootInstance.el.clientHeight = 96;
    page.rootInstance.el.clientWidth = 200;
    page.rootInstance.resizeObserverCallback();
    expect(page.rootInstance.lastWidth).toBe(undefined);
    expect(page.rootInstance.truncated).toBe(true);

    //lastMarkerTop will get overwritten with 0
    page.rootInstance.lastMarkerTop = 120;
    page.rootInstance.resizeObserverCallback();
    expect(page.rootInstance.lastWidth).toBe(200);
    expect(page.rootInstance.lastMarkerTop).toBe(0);

    //test lastMarkerTop not overwritten with 0 as widths should match
    page.rootInstance.lastMarkerTop = 120;
    page.rootInstance.resizeObserverCallback();
    expect(page.rootInstance.lastMarkerTop).toBe(120);

    //test lastWidth not overwritten as merkerTop should match lastMarkerTop
    page.rootInstance.el.clientWidth = 300;
    page.rootInstance.lastMarkerTop = 0;
    page.rootInstance.resizeObserverCallback();
    expect(page.rootInstance.lastWidth).toBe(200);

    //test disconnected callback
    page.setContent("");
  });
});
