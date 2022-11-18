import { newSpecPage } from "@stencil/core/testing";
import { DataEntity } from "./ic-data-entity";

describe("ic-data-entity", () => {
  it("should render with data-row children", async () => {
    const page = await newSpecPage({
      components: [DataEntity],
      html: `
      <ic-data-entity heading="Heading">
        <ic-data-row label="Label" value="value"></ic-data-row>
        <ic-data-row label="Label" value="value"></ic-data-row>
        <ic-data-row label="Label" value="value"></ic-data-row>
        <ic-data-row label="Label" value="value"></ic-data-row>
        <ic-data-row label="Label" value="value"></ic-data-row>
        <ic-data-row label="Label" value="value"></ic-data-row>
        <ic-data-row label="Label" value="value"></ic-data-row>
        <ic-data-row label="Label" value="value"></ic-data-row>
      </ic-data-entity>`,
    });

    expect(page.root).toEqualHtml(`
    <ic-data-entity heading="Heading">
      <mock:shadow-root>
        <div class="heading" id="data-entity-heading">
          <slot name="heading">  
            <ic-typography variant="h3">
              Heading
            </ic-typography>
          </slot>
        </div>
        <div class="divider"></div>
        <ul aria-labelledby="data-entity-heading" class="rows">
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
    </ic-data-entity>
    `);
  });

  it("should render with small prop", async () => {
    const page = await newSpecPage({
      components: [DataEntity],
      html: `
      <ic-data-entity heading="Heading" small>
        <ic-data-row label="Label" value="value"></ic-data-row>
        <ic-data-row label="Label" value="value"></ic-data-row>
        <ic-data-row label="Label" value="value"></ic-data-row>
      </ic-data-entity>`,
    });

    expect(page.root).toEqualHtml(`
    <ic-data-entity heading="Heading" class="small" small>
      <mock:shadow-root>
        <div class="heading" id="data-entity-heading">
          <slot name="heading">  
            <ic-typography variant="h3">
              Heading
            </ic-typography>
          </slot>
        </div>
        <div class="divider"></div>
        <ul aria-labelledby="data-entity-heading" class="rows">
          <slot></slot>
        </ul>
      </mock:shadow-root>
     <ic-data-row small="true" label="Label" value="value"></ic-data-row>
     <ic-data-row small="true" label="Label" value="value"></ic-data-row>
     <ic-data-row small="true" label="Label" value="value"></ic-data-row>
    </ic-data-entity>
    `);
  });

  it("should render with a slotted heading", async () => {
    const page = await newSpecPage({
      components: [DataEntity],
      html: `
      <ic-data-entity>
        <ic-typography variant="h3" slot="heading">Heading</ic-typography>
        <ic-data-row label="Label" value="value"></ic-data-row>
        <ic-data-row label="Label" value="value"></ic-data-row>
        <ic-data-row label="Label" value="value"></ic-data-row>
        <ic-data-row label="Label" value="value"></ic-data-row>
        <ic-data-row label="Label" value="value"></ic-data-row>
        <ic-data-row label="Label" value="value"></ic-data-row>
        <ic-data-row label="Label" value="value"></ic-data-row>
        <ic-data-row label="Label" value="value"></ic-data-row>
      </ic-data-entity>`,
    });

    expect(page.root).toEqualHtml(`
    <ic-data-entity>
      <mock:shadow-root>
        <div class="heading" id="data-entity-heading">
          <slot name="heading">  
            <ic-typography variant="h3"></ic-typography>
          </slot>
        </div>
        <div class="divider"></div>
        <ul aria-labelledby="data-entity-heading" class="rows">
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
    </ic-data-entity>
    `);
  });

  it("should render data-row children with slotted content", async () => {
    const page = await newSpecPage({
      components: [DataEntity],
      html: `
      <ic-data-entity heading="Heading">
        <ic-data-row label="Label" value="value"><ic-link href="/" slot="end-component"></ic-link></ic-data-row>
        <ic-data-row label="Label" value="value"><ic-link href="/" slot="end-component"></ic-link></ic-data-row>
        <ic-data-row label="Label" value="value"><ic-link href="/" slot="end-component"></ic-link></ic-data-row>
        <ic-data-row label="Label" value="value"><ic-link href="/" slot="end-component"></ic-link></ic-data-row>
        <ic-data-row label="Label" value="value"><ic-link href="/" slot="end-component"></ic-link></ic-data-row>
        <ic-data-row label="Label" value="value"><ic-link href="/" slot="end-component"></ic-link></ic-data-row>
        <ic-data-row label="Label" value="value"><ic-link href="/" slot="end-component"></ic-link></ic-data-row>
        <ic-data-row label="Label" value="value"><ic-link href="/" slot="end-component"></ic-link></ic-data-row>
      </ic-data-entity>`,
    });

    expect(page.root).toEqualHtml(`
    <ic-data-entity heading="Heading">
      <mock:shadow-root>
        <div class="heading" id="data-entity-heading">
          <slot name="heading">  
            <ic-typography variant="h3">
              Heading
            </ic-typography>
          </slot>
        </div>
        <div class="divider"></div>
        <ul aria-labelledby="data-entity-heading" class="rows">
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
    </ic-data-entity>
    `);
  });
});
