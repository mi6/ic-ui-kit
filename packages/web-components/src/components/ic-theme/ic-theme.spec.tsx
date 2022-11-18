import { newSpecPage } from "@stencil/core/testing";
import { Theme } from "./ic-theme";

describe("ic-theme", () => {
  it("renders", async () => {
    const page = await newSpecPage({
      components: [Theme],
      html: `<ic-theme></ic-theme>`,
    });
    expect(page.root).toEqualHtml(`
      <ic-theme>
        <mock:shadow-root></mock:shadow-root>
      </ic-theme>
    `);
  });

  it("sets theme colour with hex", async () => {
    const page = await newSpecPage({
      components: [Theme],
      html: `<ic-theme color="#FFC0CB"></ic-theme>`,
    });
    expect(page.root).toEqualHtml(`
      <ic-theme color="#FFC0CB">
        <mock:shadow-root></mock:shadow-root>
      </ic-theme>
    `);
  });

  it("sets theme colour with 3 character hex", async () => {
    const page = await newSpecPage({
      components: [Theme],
      html: `<ic-theme color="#FFF"></ic-theme>`,
    });
    expect(page.root).toEqualHtml(`
      <ic-theme color="#FFF">
        <mock:shadow-root></mock:shadow-root>
      </ic-theme>
    `);
  });

  it("sets theme colour with rgb", async () => {
    const page = await newSpecPage({
      components: [Theme],
      html: `<ic-theme color="rgb(159, 43, 104)"></ic-theme>`,
    });
    expect(page.root).toEqualHtml(`
      <ic-theme color="rgb(159, 43, 104)">
        <mock:shadow-root></mock:shadow-root>
      </ic-theme>
    `);
  });
});
