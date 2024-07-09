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

    expect(page.root).toEqualHtml(`
    <ic-data-list heading="Heading">
      <mock:shadow-root>
        <div class="heading" id="data-list-heading">
          <slot name="heading">  
            <ic-typography variant="h3">
              Heading
            </ic-typography>
          </slot>
        </div>
        <div class="divider"></div>
        <ul aria-labelledby="data-list-heading" class="rows">
          <slot></slot>
        </ul>
      </mock:shadow-root>
     <ic-data-row label="Label" value="value"></ic-data-row>
     <ic-data-row label="Label" value="value"></ic-data-row>
     <ic-data-row label="Label" value="value"></ic-data-row>
     <ic-data-row label="Label" value="value"></ic-data-row>
     <ic-data-row label="Label" value="value"></ic-data-row>
     <ic-data-row label="Label" value="value"></ic-data-row>
     <ic-data-row label="Label" value="value"></ic-data-row>
     <ic-data-row label="Label" value="value"></ic-data-row>
    </ic-data-list>
    `);
  });

  it("should render with small prop", async () => {
    const page = await newSpecPage({
      components: [DataList],
      html: `
      <ic-data-list heading="Heading" small>
        <ic-data-row label="Label" value="value"></ic-data-row>
        <ic-data-row label="Label" value="value"></ic-data-row>
        <ic-data-row label="Label" value="value"></ic-data-row>
      </ic-data-list>`,
    });

    expect(page.root).toEqualHtml(`
    <ic-data-list heading="Heading" class="ic-data-list-small" small>
      <mock:shadow-root>
        <div class="heading" id="data-list-heading">
          <slot name="heading">  
            <ic-typography variant="h3">
              Heading
            </ic-typography>
          </slot>
        </div>
        <div class="divider"></div>
        <ul aria-labelledby="data-list-heading" class="rows">
          <slot></slot>
        </ul>
      </mock:shadow-root>
     <ic-data-row size="small" label="Label" value="value"></ic-data-row>
     <ic-data-row size="small" label="Label" value="value"></ic-data-row>
     <ic-data-row size="small" label="Label" value="value"></ic-data-row>
    </ic-data-list>
    `);
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

    expect(page.root).toEqualHtml(`
    <ic-data-list>
      <mock:shadow-root>
        <div class="heading" id="data-list-heading">
          <slot name="heading">  
            <ic-typography variant="h3"></ic-typography>
          </slot>
        </div>
        <div class="divider"></div>
        <ul aria-labelledby="data-list-heading" class="rows">
          <slot></slot>
        </ul>
      </mock:shadow-root>
     <ic-typography slot="heading" variant="h3">
      Heading
     </ic-typography>
     <ic-data-row label="Label" value="value"></ic-data-row>
     <ic-data-row label="Label" value="value"></ic-data-row>
     <ic-data-row label="Label" value="value"></ic-data-row>
     <ic-data-row label="Label" value="value"></ic-data-row>
     <ic-data-row label="Label" value="value"></ic-data-row>
     <ic-data-row label="Label" value="value"></ic-data-row>
     <ic-data-row label="Label" value="value"></ic-data-row>
     <ic-data-row label="Label" value="value"></ic-data-row>
    </ic-data-list>
    `);
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

    expect(page.root).toEqualHtml(`
    <ic-data-list heading="Heading">
      <mock:shadow-root>
        <div class="heading" id="data-list-heading">
          <slot name="heading">  
            <ic-typography variant="h3">
              Heading
            </ic-typography>
          </slot>
        </div>
        <div class="divider"></div>
        <ul aria-labelledby="data-list-heading" class="rows">
          <slot></slot>
        </ul>
      </mock:shadow-root>
     <ic-data-row label="Label" value="value"><ic-link href="/" slot="end-component"></ic-link></ic-data-row>
     <ic-data-row label="Label" value="value"><ic-link href="/" slot="end-component"></ic-link></ic-data-row>
     <ic-data-row label="Label" value="value"><ic-link href="/" slot="end-component"></ic-link></ic-data-row>
     <ic-data-row label="Label" value="value"><ic-link href="/" slot="end-component"></ic-link></ic-data-row>
     <ic-data-row label="Label" value="value"><ic-link href="/" slot="end-component"></ic-link></ic-data-row>
     <ic-data-row label="Label" value="value"><ic-link href="/" slot="end-component"></ic-link></ic-data-row>
     <ic-data-row label="Label" value="value"><ic-link href="/" slot="end-component"></ic-link></ic-data-row>
     <ic-data-row label="Label" value="value"><ic-link href="/" slot="end-component"></ic-link></ic-data-row>
    </ic-data-list>
    `);
  });
});
