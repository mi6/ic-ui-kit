"use strict";(self.webpackChunk_ukic_canary_web_components=self.webpackChunk_ukic_canary_web_components||[]).push([[3231],{"./src/components/ic-tree-view/ic-tree-view.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Basic:()=>Basic,DisabledTreeItems:()=>DisabledTreeItems,Expanded:()=>Expanded,Large:()=>Large,Light:()=>Light,Link:()=>Link,MaxContent:()=>MaxContent,Nested:()=>Nested,RouterItem:()=>RouterItem,SelectedTreeItem:()=>SelectedTreeItem,SlottedContent:()=>SlottedContent,Small:()=>Small,TruncationBehaviour:()=>TruncationBehaviour,WithIcons:()=>WithIcons,__namedExportsOrder:()=>__namedExportsOrder,default:()=>ic_tree_view_stories});var lit_html=__webpack_require__("./node_modules/lit-html/lit-html.js");const ic_tree_view_stories={title:"Web Components/Tree view",component:"ic-tree-view",parameters:{componentAPI:{data:'# ic-tree-view\n\n\n\n\x3c!-- Auto Generated Below --\x3e\n\n\n## Properties\n\n| Property            | Attribute             | Description                                                                       | Type                              | Default     |\n| ------------------- | --------------------- | --------------------------------------------------------------------------------- | --------------------------------- | ----------- |\n| `appearance`        | `appearance`          | The appearance of the tree view, e.g. dark, or light.                             | `"dark" \\| "light"`               | `"dark"`    |\n| `heading`           | `heading`             | The heading of the tree view.                                                     | `string`                          | `""`        |\n| `size`              | `size`                | The size of the tree view.                                                        | `"default" \\| "large" \\| "small"` | `"default"` |\n| `truncateHeading`   | `truncate-heading`    | If `true`, the tree view heading will be truncated instead of text wrapping.      | `boolean`                         | `false`     |\n| `truncateTreeItems` | `truncate-tree-items` | If `true`, tree items will be truncated, unless they are individually overridden. | `boolean`                         | `false`     |\n\n\n## Slots\n\n| Slot        | Description                                   |\n| ----------- | --------------------------------------------- |\n| `"heading"` | Content is set as the tree view heading.      |\n| `"icon"`    | Content is placed to the left of the heading. |\n\n\n## CSS Custom Properties\n\n| Name                | Description            |\n| ------------------- | ---------------------- |\n| `--tree-view-width` | Width of the tree view |\n\n\n## Dependencies\n\n### Depends on\n\n- ic-tooltip\n- ic-typography\n\n### Graph\n```mermaid\ngraph TD;\n  ic-tree-view --\x3e ic-tooltip\n  ic-tree-view --\x3e ic-typography\n  ic-tooltip --\x3e ic-typography\n  style ic-tree-view fill:#f9f,stroke:#333,stroke-width:4px\n```\n\n----------------------------------------------\n\n\n# ic-tree-item\n\n\n\n\x3c!-- Auto Generated Below --\x3e\n\n\n## Properties\n\n| Property           | Attribute            | Description                                                                                                                    | Type                                                                                                                                                                                     | Default     |\n| ------------------ | -------------------- | ------------------------------------------------------------------------------------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------- |\n| `disabled`         | `disabled`           | If `true`, the tree item appears in the disabled state.                                                                        | `boolean`                                                                                                                                                                                | `false`     |\n| `expanded`         | `expanded`           | If `true`, the tree item appears in the expanded state.                                                                        | `boolean`                                                                                                                                                                                | `false`     |\n| `href`             | `href`               | The URL that the tree item link points to. If set, the tree item will render as an "a" tag, otherwise it will render as a div. | `string`                                                                                                                                                                                 | `undefined` |\n| `hreflang`         | `hreflang`           | The human language of the linked URL.                                                                                          | `string`                                                                                                                                                                                 | `""`        |\n| `label`            | `label`              | The label of the tree item.                                                                                                    | `string`                                                                                                                                                                                 | `""`        |\n| `referrerpolicy`   | `referrerpolicy`     | How much of the referrer to send when following the link.                                                                      | `"" \\| "no-referrer" \\| "no-referrer-when-downgrade" \\| "origin" \\| "origin-when-cross-origin" \\| "same-origin" \\| "strict-origin" \\| "strict-origin-when-cross-origin" \\| "unsafe-url"` | `undefined` |\n| `rel`              | `rel`                | The relationship of the linked URL as space-separated link types.                                                              | `string`                                                                                                                                                                                 | `undefined` |\n| `selected`         | `selected`           | If `true`, the tree item appears in the selected state.                                                                        | `boolean`                                                                                                                                                                                | `false`     |\n| `target`           | `target`             | The place to display the linked URL, as the name for a browsing context (a tab, window, or iframe).                            | `string`                                                                                                                                                                                 | `undefined` |\n| `truncateTreeItem` | `truncate-tree-item` | If `true`, the tree item label will be truncated instead of text wrapping.                                                     | `boolean`                                                                                                                                                                                | `undefined` |\n\n\n## Events\n\n| Event                | Description                         | Type                           |\n| -------------------- | ----------------------------------- | ------------------------------ |\n| `icTreeItemSelected` | Emitted when tree item is selected. | `CustomEvent<{ id: string; }>` |\n\n\n## Methods\n\n### `setFocus() => Promise<void>`\n\nSets focus on the native `input`.\n\n#### Returns\n\nType: `Promise<void>`\n\n\n\n\n## Slots\n\n| Slot            | Description                                         |\n| --------------- | --------------------------------------------------- |\n| `"icon"`        | Content is placed to the left of the label.         |\n| `"label"`       | Content is set as the tree item label.              |\n| `"router-item"` | Handle routing by nesting your routes in this slot. |\n\n\n## Dependencies\n\n### Depends on\n\n- ic-tooltip\n- ic-typography\n\n### Graph\n```mermaid\ngraph TD;\n  ic-tree-item --\x3e ic-tooltip\n  ic-tree-item --\x3e ic-typography\n  ic-tooltip --\x3e ic-typography\n  style ic-tree-item fill:#f9f,stroke:#333,stroke-width:4px\n```\n\n----------------------------------------------\n\n\n'}}},Basic={render:()=>lit_html.qy`
    <div style="width:250px">
      <ic-tree-view heading="Menu">
        <ic-tree-item label="Coffee"></ic-tree-item>
        <ic-tree-item label="Tea"></ic-tree-item>
        <ic-tree-item label="Hot chocolate"></ic-tree-item>
      </ic-tree-view>
    </div>
  `,name:"Basic"},Nested={render:()=>lit_html.qy`
    <div style="width:250px">
      <ic-tree-view heading="Menu">
        <ic-tree-item label="Coffee">
          <ic-tree-item label="Americano">
            <ic-tree-item label="With milk"></ic-tree-item>
          </ic-tree-item>
          <ic-tree-item label="Latte"></ic-tree-item>
          <ic-tree-item label="Espresso"></ic-tree-item>
        </ic-tree-item>
        <ic-tree-item label="Tea">
          <ic-tree-item label="Earl Grey"></ic-tree-item>
          <ic-tree-item label="Chai"></ic-tree-item>
        </ic-tree-item>
        <ic-tree-item label="Hot chocolate"></ic-tree-item>
      </ic-tree-view>
    </div>
  `,name:"Nested"},WithIcons={render:()=>lit_html.qy`
    <div style="width:250px">
      <ic-tree-view heading="Menu">
        <svg slot="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <path
            d="M10,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V8C22,6.89 21.1,6 20,6H12L10,4Z"
          />
        </svg>
        <ic-tree-item label="Coffee">
          <svg
            slot="icon"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path
              d="M13,9V3.5L18.5,9M6,2C4.89,2 4,2.89 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2H6Z"
            />
          </svg>
          <ic-tree-item label="Americano"></ic-tree-item>
          <ic-tree-item label="Latte">
            <svg
              slot="icon"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path
                d="M13,9V3.5L18.5,9M6,2C4.89,2 4,2.89 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2H6Z"
              />
            </svg>
          </ic-tree-item>
          <ic-tree-item label="Espresso"></ic-tree-item>
        </ic-tree-item>
        <ic-tree-item label="Tea">
          <ic-tree-item label="Earl Grey"></ic-tree-item>
          <ic-tree-item label="Chai"></ic-tree-item>
        </ic-tree-item>
        <ic-tree-item label="Hot chocolate"></ic-tree-item>
      </ic-tree-view>
    </div>
  `,name:"With icons"},Small={render:()=>lit_html.qy`
    <div style="width:250px">
      <ic-tree-view heading="Menu" size="small">
        <svg slot="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <path
            d="M10,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V8C22,6.89 21.1,6 20,6H12L10,4Z"
          />
        </svg>
        <ic-tree-item label="Coffee">
          <svg
            slot="icon"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path
              d="M13,9V3.5L18.5,9M6,2C4.89,2 4,2.89 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2H6Z"
            />
          </svg>
          <ic-tree-item label="Americano"></ic-tree-item>
          <ic-tree-item label="Latte">
            <svg
              slot="icon"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path
                d="M13,9V3.5L18.5,9M6,2C4.89,2 4,2.89 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2H6Z"
              />
            </svg>
          </ic-tree-item>
          <ic-tree-item label="Espresso"></ic-tree-item>
        </ic-tree-item>
        <ic-tree-item label="Tea">
          <ic-tree-item label="Earl Grey"></ic-tree-item>
          <ic-tree-item label="Chai"></ic-tree-item>
        </ic-tree-item>
        <ic-tree-item label="Hot chocolate"></ic-tree-item>
      </ic-tree-view>
    </div>
  `,name:"Small"},Large={render:()=>lit_html.qy`
    <div style="width:250px">
      <ic-tree-view heading="Menu" size="large">
        <svg slot="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <path
            d="M10,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V8C22,6.89 21.1,6 20,6H12L10,4Z"
          />
        </svg>
        <ic-tree-item label="Coffee">
          <svg
            slot="icon"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path
              d="M13,9V3.5L18.5,9M6,2C4.89,2 4,2.89 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2H6Z"
            />
          </svg>
          <ic-tree-item label="Americano"></ic-tree-item>
          <ic-tree-item label="Latte">
            <svg
              slot="icon"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path
                d="M13,9V3.5L18.5,9M6,2C4.89,2 4,2.89 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2H6Z"
              />
            </svg>
          </ic-tree-item>
          <ic-tree-item label="Espresso"></ic-tree-item>
        </ic-tree-item>
        <ic-tree-item label="Tea">
          <ic-tree-item label="Earl Grey"></ic-tree-item>
          <ic-tree-item label="Chai"></ic-tree-item>
        </ic-tree-item>
        <ic-tree-item label="Hot chocolate"></ic-tree-item>
      </ic-tree-view>
    </div>
  `,name:"Large"},Light={render:()=>lit_html.qy`
    <div style="width:250px;">
      <ic-tree-view heading="Menu" appearance="light">
        <svg slot="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <path
            d="M10,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V8C22,6.89 21.1,6 20,6H12L10,4Z"
          />
        </svg>
        <ic-tree-item label="Coffee">
          <svg
            slot="icon"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path
              d="M13,9V3.5L18.5,9M6,2C4.89,2 4,2.89 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2H6Z"
            />
          </svg>
          <ic-tree-item label="Americano"></ic-tree-item>
          <ic-tree-item label="Latte">
            <svg
              slot="icon"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path
                d="M13,9V3.5L18.5,9M6,2C4.89,2 4,2.89 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2H6Z"
              />
            </svg>
          </ic-tree-item>
          <ic-tree-item label="Espresso"></ic-tree-item>
        </ic-tree-item>
        <ic-tree-item label="Tea">
          <ic-tree-item label="Earl Grey"></ic-tree-item>
          <ic-tree-item label="Chai"></ic-tree-item>
        </ic-tree-item>
        <ic-tree-item label="Hot chocolate"></ic-tree-item>
      </ic-tree-view>
    </div>
  `,name:"Light",parameters:{backgrounds:{default:"dark"}}},DisabledTreeItems={render:()=>lit_html.qy`
    <div style="width:250px">
      <ic-tree-view heading="Menu">
        <svg slot="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <path
            d="M10,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V8C22,6.89 21.1,6 20,6H12L10,4Z"
          />
        </svg>
        <ic-tree-item label="Coffee">
          <svg
            slot="icon"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path
              d="M13,9V3.5L18.5,9M6,2C4.89,2 4,2.89 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2H6Z"
            />
          </svg>
          <ic-tree-item label="Americano"></ic-tree-item>
          <ic-tree-item label="Latte" disabled="true">
            <svg
              slot="icon"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path
                d="M13,9V3.5L18.5,9M6,2C4.89,2 4,2.89 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2H6Z"
              />
            </svg>
          </ic-tree-item>
          <ic-tree-item label="Espresso"></ic-tree-item>
        </ic-tree-item>
        <ic-tree-item label="Tea">
          <ic-tree-item label="Earl Grey"></ic-tree-item>
          <ic-tree-item label="Chai" disabled="true"></ic-tree-item>
        </ic-tree-item>
        <ic-tree-item label="Hot chocolate" disabled="true"></ic-tree-item>
      </ic-tree-view>
    </div>
  `,name:"Disabled tree items"},RouterItem={render:()=>lit_html.qy`
    <div style="width:250px">
      <ic-tree-view heading="Menu">
        <ic-tree-item>
          <a slot="router-item" href="/">Slotted coffee</a>
        </ic-tree-item>
        <ic-tree-item label="Tea"></ic-tree-item>
        <ic-tree-item label="Hot chocolate"></ic-tree-item>
      </ic-tree-view>
    </div>
  `,name:"Router item"},SlottedContent={render:()=>lit_html.qy`
      <div style="width:250px">
        <ic-tree-view>
          <ic-typography variant="subtitle-large" slot="heading">Menu</ic-typography>
          <ic-tree-item>
            <ic-typography slot="label">Coffee<ic-typography>
          </ic-tree-item>
          <ic-tree-item label="Tea"></ic-tree-item>
          <ic-tree-item label="Hot chocolate"></ic-tree-item>
        </ic-tree-view>
      </div>
    `,name:"Slotted content"},MaxContent={render:()=>lit_html.qy`
    <div style="width:250px">
      <ic-tree-view heading="Menu with nested options">
        <svg slot="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <path
            d="M10,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V8C22,6.89 21.1,6 20,6H12L10,4Z"
          />
        </svg>
        <ic-tree-item label="Coffee">
          <svg
            slot="icon"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path
              d="M13,9V3.5L18.5,9M6,2C4.89,2 4,2.89 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2H6Z"
            />
          </svg>
          <ic-tree-item label="Americano"></ic-tree-item>
          <ic-tree-item label="Latte with extra milk and sugar"></ic-tree-item>
          <ic-tree-item label="Espresso"></ic-tree-item>
        </ic-tree-item>
        <ic-tree-item label="Tea">
          <ic-tree-item label="Earl Grey"></ic-tree-item>
          <ic-tree-item label="Chai"></ic-tree-item>
        </ic-tree-item>
        <ic-tree-item label="Hot chocolate with marshmallows"></ic-tree-item>
      </ic-tree-view>
    </div>
  `,name:"Max content"},TruncationBehaviour={render:()=>lit_html.qy`
    <div style="width:250px">
      <ic-tree-view
        heading="Menu with nested options"
        truncate-tree-items="true"
        truncate-heading="true"
      >
        <svg slot="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <path
            d="M10,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V8C22,6.89 21.1,6 20,6H12L10,4Z"
          />
        </svg>
        <ic-tree-item label="Coffee">
          <svg
            slot="icon"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path
              d="M13,9V3.5L18.5,9M6,2C4.89,2 4,2.89 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2H6Z"
            />
          </svg>
          <ic-tree-item label="Americano"></ic-tree-item>
          <ic-tree-item label="Latte with extra milk and sugar"></ic-tree-item>
          <ic-tree-item label="Espresso"></ic-tree-item>
        </ic-tree-item>
        <ic-tree-item label="Tea">
          <ic-tree-item label="Earl Grey"></ic-tree-item>
          <ic-tree-item
            label="Earl Grey with truncation false"
            truncate-tree-item="false"
          ></ic-tree-item>
          <ic-tree-item label="Chai"></ic-tree-item>
        </ic-tree-item>
        <ic-tree-item label="Hot chocolate with marshmallows"></ic-tree-item>
      </ic-tree-view>
    </div>
  `,name:"Truncation behaviour"},SelectedTreeItem={render:()=>lit_html.qy`
    <div style="width:250px">
      <ic-tree-view heading="Menu">
        <ic-tree-item label="Coffee"></ic-tree-item>
        <ic-tree-item label="Tea"></ic-tree-item>
        <ic-tree-item label="Hot chocolate" selected="true"></ic-tree-item>
      </ic-tree-view>
    </div>
  `,name:"Selected tree item"},Link={render:()=>lit_html.qy`
    <div style="width:250px">
      <ic-tree-view heading="Menu">
        <ic-tree-item label="Coffee" href="#"></ic-tree-item>
        <ic-tree-item label="Tea" selected="true" href="#"></ic-tree-item>
        <ic-tree-item
          label="Hot chocolate"
          disabled="true"
          href="#"
        ></ic-tree-item>
      </ic-tree-view>
    </div>
  `,name:"Link"},Expanded={render:()=>lit_html.qy`
    <div style="width:250px">
      <ic-tree-view heading="Menu">
        <ic-tree-item label="Coffee" expanded="true">
          <ic-tree-item label="Americano" expanded="true">
            <ic-tree-item label="With milk"></ic-tree-item>
          </ic-tree-item>
          <ic-tree-item label="Latte"></ic-tree-item>
          <ic-tree-item label="Espresso"></ic-tree-item>
        </ic-tree-item>
        <ic-tree-item label="Tea">
          <ic-tree-item label="Earl Grey"></ic-tree-item>
          <ic-tree-item label="Chai"></ic-tree-item>
        </ic-tree-item>
        <ic-tree-item label="Hot chocolate"></ic-tree-item>
      </ic-tree-view>
    </div>
  `,name:"Expanded"},__namedExportsOrder=["Basic","Nested","WithIcons","Small","Large","Light","DisabledTreeItems","RouterItem","SlottedContent","MaxContent","TruncationBehaviour","SelectedTreeItem","Link","Expanded"];Basic.parameters={...Basic.parameters,docs:{...Basic.parameters?.docs,source:{originalSource:'{\n  render: () => html`\n    <div style="width:250px">\n      <ic-tree-view heading="Menu">\n        <ic-tree-item label="Coffee"></ic-tree-item>\n        <ic-tree-item label="Tea"></ic-tree-item>\n        <ic-tree-item label="Hot chocolate"></ic-tree-item>\n      </ic-tree-view>\n    </div>\n  `,\n  name: "Basic"\n}',...Basic.parameters?.docs?.source},description:{story:"Use the tree view component to display hierarchical data in a tree structure. The tree view component is useful for displaying nested data, such as a file system or a category hierarchy.\n\nClick the 'Component API' tab to view all the available attributes, events and slots for tree view.\n\nTo use the tree view component, import `@ukic/canary-web-components` into your application.",...Basic.parameters?.docs?.description}}},Nested.parameters={...Nested.parameters,docs:{...Nested.parameters?.docs,source:{originalSource:'{\n  render: () => html`\n    <div style="width:250px">\n      <ic-tree-view heading="Menu">\n        <ic-tree-item label="Coffee">\n          <ic-tree-item label="Americano">\n            <ic-tree-item label="With milk"></ic-tree-item>\n          </ic-tree-item>\n          <ic-tree-item label="Latte"></ic-tree-item>\n          <ic-tree-item label="Espresso"></ic-tree-item>\n        </ic-tree-item>\n        <ic-tree-item label="Tea">\n          <ic-tree-item label="Earl Grey"></ic-tree-item>\n          <ic-tree-item label="Chai"></ic-tree-item>\n        </ic-tree-item>\n        <ic-tree-item label="Hot chocolate"></ic-tree-item>\n      </ic-tree-view>\n    </div>\n  `,\n  name: "Nested"\n}',...Nested.parameters?.docs?.source}}},WithIcons.parameters={...WithIcons.parameters,docs:{...WithIcons.parameters?.docs,source:{originalSource:'{\n  render: () => html`\n    <div style="width:250px">\n      <ic-tree-view heading="Menu">\n        <svg slot="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">\n          <path\n            d="M10,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V8C22,6.89 21.1,6 20,6H12L10,4Z"\n          />\n        </svg>\n        <ic-tree-item label="Coffee">\n          <svg\n            slot="icon"\n            xmlns="http://www.w3.org/2000/svg"\n            viewBox="0 0 24 24"\n          >\n            <path\n              d="M13,9V3.5L18.5,9M6,2C4.89,2 4,2.89 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2H6Z"\n            />\n          </svg>\n          <ic-tree-item label="Americano"></ic-tree-item>\n          <ic-tree-item label="Latte">\n            <svg\n              slot="icon"\n              xmlns="http://www.w3.org/2000/svg"\n              viewBox="0 0 24 24"\n            >\n              <path\n                d="M13,9V3.5L18.5,9M6,2C4.89,2 4,2.89 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2H6Z"\n              />\n            </svg>\n          </ic-tree-item>\n          <ic-tree-item label="Espresso"></ic-tree-item>\n        </ic-tree-item>\n        <ic-tree-item label="Tea">\n          <ic-tree-item label="Earl Grey"></ic-tree-item>\n          <ic-tree-item label="Chai"></ic-tree-item>\n        </ic-tree-item>\n        <ic-tree-item label="Hot chocolate"></ic-tree-item>\n      </ic-tree-view>\n    </div>\n  `,\n  name: "With icons"\n}',...WithIcons.parameters?.docs?.source}}},Small.parameters={...Small.parameters,docs:{...Small.parameters?.docs,source:{originalSource:'{\n  render: () => html`\n    <div style="width:250px">\n      <ic-tree-view heading="Menu" size="small">\n        <svg slot="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">\n          <path\n            d="M10,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V8C22,6.89 21.1,6 20,6H12L10,4Z"\n          />\n        </svg>\n        <ic-tree-item label="Coffee">\n          <svg\n            slot="icon"\n            xmlns="http://www.w3.org/2000/svg"\n            viewBox="0 0 24 24"\n          >\n            <path\n              d="M13,9V3.5L18.5,9M6,2C4.89,2 4,2.89 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2H6Z"\n            />\n          </svg>\n          <ic-tree-item label="Americano"></ic-tree-item>\n          <ic-tree-item label="Latte">\n            <svg\n              slot="icon"\n              xmlns="http://www.w3.org/2000/svg"\n              viewBox="0 0 24 24"\n            >\n              <path\n                d="M13,9V3.5L18.5,9M6,2C4.89,2 4,2.89 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2H6Z"\n              />\n            </svg>\n          </ic-tree-item>\n          <ic-tree-item label="Espresso"></ic-tree-item>\n        </ic-tree-item>\n        <ic-tree-item label="Tea">\n          <ic-tree-item label="Earl Grey"></ic-tree-item>\n          <ic-tree-item label="Chai"></ic-tree-item>\n        </ic-tree-item>\n        <ic-tree-item label="Hot chocolate"></ic-tree-item>\n      </ic-tree-view>\n    </div>\n  `,\n  name: "Small"\n}',...Small.parameters?.docs?.source},description:{story:"Small and large styling will be passed down from tree view to tree items and nested tree items.",...Small.parameters?.docs?.description}}},Large.parameters={...Large.parameters,docs:{...Large.parameters?.docs,source:{originalSource:'{\n  render: () => html`\n    <div style="width:250px">\n      <ic-tree-view heading="Menu" size="large">\n        <svg slot="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">\n          <path\n            d="M10,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V8C22,6.89 21.1,6 20,6H12L10,4Z"\n          />\n        </svg>\n        <ic-tree-item label="Coffee">\n          <svg\n            slot="icon"\n            xmlns="http://www.w3.org/2000/svg"\n            viewBox="0 0 24 24"\n          >\n            <path\n              d="M13,9V3.5L18.5,9M6,2C4.89,2 4,2.89 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2H6Z"\n            />\n          </svg>\n          <ic-tree-item label="Americano"></ic-tree-item>\n          <ic-tree-item label="Latte">\n            <svg\n              slot="icon"\n              xmlns="http://www.w3.org/2000/svg"\n              viewBox="0 0 24 24"\n            >\n              <path\n                d="M13,9V3.5L18.5,9M6,2C4.89,2 4,2.89 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2H6Z"\n              />\n            </svg>\n          </ic-tree-item>\n          <ic-tree-item label="Espresso"></ic-tree-item>\n        </ic-tree-item>\n        <ic-tree-item label="Tea">\n          <ic-tree-item label="Earl Grey"></ic-tree-item>\n          <ic-tree-item label="Chai"></ic-tree-item>\n        </ic-tree-item>\n        <ic-tree-item label="Hot chocolate"></ic-tree-item>\n      </ic-tree-view>\n    </div>\n  `,\n  name: "Large"\n}',...Large.parameters?.docs?.source}}},Light.parameters={...Light.parameters,docs:{...Light.parameters?.docs,source:{originalSource:'{\n  render: () => html`\n    <div style="width:250px;">\n      <ic-tree-view heading="Menu" appearance="light">\n        <svg slot="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">\n          <path\n            d="M10,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V8C22,6.89 21.1,6 20,6H12L10,4Z"\n          />\n        </svg>\n        <ic-tree-item label="Coffee">\n          <svg\n            slot="icon"\n            xmlns="http://www.w3.org/2000/svg"\n            viewBox="0 0 24 24"\n          >\n            <path\n              d="M13,9V3.5L18.5,9M6,2C4.89,2 4,2.89 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2H6Z"\n            />\n          </svg>\n          <ic-tree-item label="Americano"></ic-tree-item>\n          <ic-tree-item label="Latte">\n            <svg\n              slot="icon"\n              xmlns="http://www.w3.org/2000/svg"\n              viewBox="0 0 24 24"\n            >\n              <path\n                d="M13,9V3.5L18.5,9M6,2C4.89,2 4,2.89 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2H6Z"\n              />\n            </svg>\n          </ic-tree-item>\n          <ic-tree-item label="Espresso"></ic-tree-item>\n        </ic-tree-item>\n        <ic-tree-item label="Tea">\n          <ic-tree-item label="Earl Grey"></ic-tree-item>\n          <ic-tree-item label="Chai"></ic-tree-item>\n        </ic-tree-item>\n        <ic-tree-item label="Hot chocolate"></ic-tree-item>\n      </ic-tree-view>\n    </div>\n  `,\n  name: "Light",\n  parameters: {\n    backgrounds: {\n      default: "dark"\n    }\n  }\n}',...Light.parameters?.docs?.source},description:{story:"Set `appearance` to `light` when the tree-view is displayed on dark background, to provide sufficient colour contrast.",...Light.parameters?.docs?.description}}},DisabledTreeItems.parameters={...DisabledTreeItems.parameters,docs:{...DisabledTreeItems.parameters?.docs,source:{originalSource:'{\n  render: () => html`\n    <div style="width:250px">\n      <ic-tree-view heading="Menu">\n        <svg slot="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">\n          <path\n            d="M10,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V8C22,6.89 21.1,6 20,6H12L10,4Z"\n          />\n        </svg>\n        <ic-tree-item label="Coffee">\n          <svg\n            slot="icon"\n            xmlns="http://www.w3.org/2000/svg"\n            viewBox="0 0 24 24"\n          >\n            <path\n              d="M13,9V3.5L18.5,9M6,2C4.89,2 4,2.89 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2H6Z"\n            />\n          </svg>\n          <ic-tree-item label="Americano"></ic-tree-item>\n          <ic-tree-item label="Latte" disabled="true">\n            <svg\n              slot="icon"\n              xmlns="http://www.w3.org/2000/svg"\n              viewBox="0 0 24 24"\n            >\n              <path\n                d="M13,9V3.5L18.5,9M6,2C4.89,2 4,2.89 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2H6Z"\n              />\n            </svg>\n          </ic-tree-item>\n          <ic-tree-item label="Espresso"></ic-tree-item>\n        </ic-tree-item>\n        <ic-tree-item label="Tea">\n          <ic-tree-item label="Earl Grey"></ic-tree-item>\n          <ic-tree-item label="Chai" disabled="true"></ic-tree-item>\n        </ic-tree-item>\n        <ic-tree-item label="Hot chocolate" disabled="true"></ic-tree-item>\n      </ic-tree-view>\n    </div>\n  `,\n  name: "Disabled tree items"\n}',...DisabledTreeItems.parameters?.docs?.source},description:{story:"Individual tree-items can be disabled using the `disabled` prop.",...DisabledTreeItems.parameters?.docs?.description}}},RouterItem.parameters={...RouterItem.parameters,docs:{...RouterItem.parameters?.docs,source:{originalSource:'{\n  render: () => html`\n    <div style="width:250px">\n      <ic-tree-view heading="Menu">\n        <ic-tree-item>\n          <a slot="router-item" href="/">Slotted coffee</a>\n        </ic-tree-item>\n        <ic-tree-item label="Tea"></ic-tree-item>\n        <ic-tree-item label="Hot chocolate"></ic-tree-item>\n      </ic-tree-view>\n    </div>\n  `,\n  name: "Router item"\n}',...RouterItem.parameters?.docs?.source},description:{story:"Custom links and router-items can be passed in using the `router-item` slot.",...RouterItem.parameters?.docs?.description}}},SlottedContent.parameters={...SlottedContent.parameters,docs:{...SlottedContent.parameters?.docs,source:{originalSource:'{\n  render: () => html`\n      <div style="width:250px">\n        <ic-tree-view>\n          <ic-typography variant="subtitle-large" slot="heading">Menu</ic-typography>\n          <ic-tree-item>\n            <ic-typography slot="label">Coffee<ic-typography>\n          </ic-tree-item>\n          <ic-tree-item label="Tea"></ic-tree-item>\n          <ic-tree-item label="Hot chocolate"></ic-tree-item>\n        </ic-tree-view>\n      </div>\n    `,\n  name: "Slotted content"\n}',...SlottedContent.parameters?.docs?.source},description:{story:"Custom content can be passed to both the tree view (using the `heading` slot) and the tree-item (using the `label` slot).",...SlottedContent.parameters?.docs?.description}}},MaxContent.parameters={...MaxContent.parameters,docs:{...MaxContent.parameters?.docs,source:{originalSource:'{\n  render: () => html`\n    <div style="width:250px">\n      <ic-tree-view heading="Menu with nested options">\n        <svg slot="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">\n          <path\n            d="M10,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V8C22,6.89 21.1,6 20,6H12L10,4Z"\n          />\n        </svg>\n        <ic-tree-item label="Coffee">\n          <svg\n            slot="icon"\n            xmlns="http://www.w3.org/2000/svg"\n            viewBox="0 0 24 24"\n          >\n            <path\n              d="M13,9V3.5L18.5,9M6,2C4.89,2 4,2.89 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2H6Z"\n            />\n          </svg>\n          <ic-tree-item label="Americano"></ic-tree-item>\n          <ic-tree-item label="Latte with extra milk and sugar"></ic-tree-item>\n          <ic-tree-item label="Espresso"></ic-tree-item>\n        </ic-tree-item>\n        <ic-tree-item label="Tea">\n          <ic-tree-item label="Earl Grey"></ic-tree-item>\n          <ic-tree-item label="Chai"></ic-tree-item>\n        </ic-tree-item>\n        <ic-tree-item label="Hot chocolate with marshmallows"></ic-tree-item>\n      </ic-tree-view>\n    </div>\n  `,\n  name: "Max content"\n}',...MaxContent.parameters?.docs?.source},description:{story:"When the heading/label exceeds the width of the container, the text will wrap unless `truncate-tree-item` is set to `true`.",...MaxContent.parameters?.docs?.description}}},TruncationBehaviour.parameters={...TruncationBehaviour.parameters,docs:{...TruncationBehaviour.parameters?.docs,source:{originalSource:'{\n  render: () => html`\n    <div style="width:250px">\n      <ic-tree-view\n        heading="Menu with nested options"\n        truncate-tree-items="true"\n        truncate-heading="true"\n      >\n        <svg slot="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">\n          <path\n            d="M10,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V8C22,6.89 21.1,6 20,6H12L10,4Z"\n          />\n        </svg>\n        <ic-tree-item label="Coffee">\n          <svg\n            slot="icon"\n            xmlns="http://www.w3.org/2000/svg"\n            viewBox="0 0 24 24"\n          >\n            <path\n              d="M13,9V3.5L18.5,9M6,2C4.89,2 4,2.89 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2H6Z"\n            />\n          </svg>\n          <ic-tree-item label="Americano"></ic-tree-item>\n          <ic-tree-item label="Latte with extra milk and sugar"></ic-tree-item>\n          <ic-tree-item label="Espresso"></ic-tree-item>\n        </ic-tree-item>\n        <ic-tree-item label="Tea">\n          <ic-tree-item label="Earl Grey"></ic-tree-item>\n          <ic-tree-item\n            label="Earl Grey with truncation false"\n            truncate-tree-item="false"\n          ></ic-tree-item>\n          <ic-tree-item label="Chai"></ic-tree-item>\n        </ic-tree-item>\n        <ic-tree-item label="Hot chocolate with marshmallows"></ic-tree-item>\n      </ic-tree-view>\n    </div>\n  `,\n  name: "Truncation behaviour"\n}',...TruncationBehaviour.parameters?.docs?.source},description:{story:"When `truncate-tree-items` or `truncate-heading` are set to `true`, and the heading/label exceeds the width of the container, they will be truncated with an ellipsis.",...TruncationBehaviour.parameters?.docs?.description}}},SelectedTreeItem.parameters={...SelectedTreeItem.parameters,docs:{...SelectedTreeItem.parameters?.docs,source:{originalSource:'{\n  render: () => html`\n    <div style="width:250px">\n      <ic-tree-view heading="Menu">\n        <ic-tree-item label="Coffee"></ic-tree-item>\n        <ic-tree-item label="Tea"></ic-tree-item>\n        <ic-tree-item label="Hot chocolate" selected="true"></ic-tree-item>\n      </ic-tree-view>\n    </div>\n  `,\n  name: "Selected tree item"\n}',...SelectedTreeItem.parameters?.docs?.source},description:{story:"Utilising the `selected` attribute on `ic-tree-item` will turn it into a controlled component, displaying the selected state when set to `true`.",...SelectedTreeItem.parameters?.docs?.description}}},Link.parameters={...Link.parameters,docs:{...Link.parameters?.docs,source:{originalSource:'{\n  render: () => html`\n    <div style="width:250px">\n      <ic-tree-view heading="Menu">\n        <ic-tree-item label="Coffee" href="#"></ic-tree-item>\n        <ic-tree-item label="Tea" selected="true" href="#"></ic-tree-item>\n        <ic-tree-item\n          label="Hot chocolate"\n          disabled="true"\n          href="#"\n        ></ic-tree-item>\n      </ic-tree-view>\n    </div>\n  `,\n  name: "Link"\n}',...Link.parameters?.docs?.source},description:{story:"When setting the `href` attribute, the tree-item will function as a link.",...Link.parameters?.docs?.description}}},Expanded.parameters={...Expanded.parameters,docs:{...Expanded.parameters?.docs,source:{originalSource:'{\n  render: () => html`\n    <div style="width:250px">\n      <ic-tree-view heading="Menu">\n        <ic-tree-item label="Coffee" expanded="true">\n          <ic-tree-item label="Americano" expanded="true">\n            <ic-tree-item label="With milk"></ic-tree-item>\n          </ic-tree-item>\n          <ic-tree-item label="Latte"></ic-tree-item>\n          <ic-tree-item label="Espresso"></ic-tree-item>\n        </ic-tree-item>\n        <ic-tree-item label="Tea">\n          <ic-tree-item label="Earl Grey"></ic-tree-item>\n          <ic-tree-item label="Chai"></ic-tree-item>\n        </ic-tree-item>\n        <ic-tree-item label="Hot chocolate"></ic-tree-item>\n      </ic-tree-view>\n    </div>\n  `,\n  name: "Expanded"\n}',...Expanded.parameters?.docs?.source},description:{story:"An example with the `expanded` prop set to `true` on a parent tree item.",...Expanded.parameters?.docs?.description}}}}}]);
//# sourceMappingURL=components-ic-tree-view-ic-tree-view-stories.49374b89.iframe.bundle.js.map