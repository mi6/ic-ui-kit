import { newSpecPage } from "@stencil/core/testing";
import { DataList } from "../../ic-data-list";

describe("ic-data-list", () => {
  it("should render with data-row children", async () => {
    const page = await newSpecPage({
      components: [DataList],
      html: `
      <ic-data-list heading="Heading">
        <ic-data-row label="Label" value="value"></ic-data-row>
        <ic-data-row label="Label" value="value"></ic-data-row>
        <ic-data-row label="Label" value="value"></ic-data-row>
        <ic-data-row label="Label" value="value"></ic-data-row>
        <ic-data-row label="Label" value="value"></ic-data-row>
        <ic-data-row label="Label" value="value"></ic-data-row>
        <ic-data-row label="Label" value="value"></ic-data-row>
        <ic-data-row label="Label" value="value"></ic-data-row>
      </ic-data-list>`,
    });

    expect(page.root).toMatchSnapshot();
  });

  it("should render with size small", async () => {
    const page = await newSpecPage({
      components: [DataList],
      html: `
      <ic-data-list heading="Heading" size="small">
        <ic-data-row label="Label" value="value"></ic-data-row>
        <ic-data-row label="Label" value="value"></ic-data-row>
        <ic-data-row label="Label" value="value"></ic-data-row>
      </ic-data-list>`,
    });

    expect(page.root).toMatchSnapshot();
  });

  it("should render with a slotted heading", async () => {
    const page = await newSpecPage({
      components: [DataList],
      html: `
      <ic-data-list>
        <ic-typography variant="h3" slot="heading">Heading</ic-typography>
        <ic-data-row label="Label" value="value"></ic-data-row>
        <ic-data-row label="Label" value="value"></ic-data-row>
        <ic-data-row label="Label" value="value"></ic-data-row>
        <ic-data-row label="Label" value="value"></ic-data-row>
        <ic-data-row label="Label" value="value"></ic-data-row>
        <ic-data-row label="Label" value="value"></ic-data-row>
        <ic-data-row label="Label" value="value"></ic-data-row>
        <ic-data-row label="Label" value="value"></ic-data-row>
      </ic-data-list>`,
    });

    expect(page.root).toMatchSnapshot();
  });

  it("should render data-row children with slotted content", async () => {
    const page = await newSpecPage({
      components: [DataList],
      html: `
      <ic-data-list heading="Heading">
        <ic-data-row label="Label" value="value"><ic-link href="/" slot="end-component"></ic-link></ic-data-row>
        <ic-data-row label="Label" value="value"><ic-link href="/" slot="end-component"></ic-link></ic-data-row>
        <ic-data-row label="Label" value="value"><ic-link href="/" slot="end-component"></ic-link></ic-data-row>
        <ic-data-row label="Label" value="value"><ic-link href="/" slot="end-component"></ic-link></ic-data-row>
        <ic-data-row label="Label" value="value"><ic-link href="/" slot="end-component"></ic-link></ic-data-row>
        <ic-data-row label="Label" value="value"><ic-link href="/" slot="end-component"></ic-link></ic-data-row>
        <ic-data-row label="Label" value="value"><ic-link href="/" slot="end-component"></ic-link></ic-data-row>
        <ic-data-row label="Label" value="value"><ic-link href="/" slot="end-component"></ic-link></ic-data-row>
      </ic-data-list>`,
    });

    expect(page.root).toMatchSnapshot();
  });
});
