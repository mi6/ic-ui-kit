/*! For license information please see components-ic-typography-ic-typography-stories.c43f30d5.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunk_ukic_web_components=self.webpackChunk_ukic_web_components||[]).push([[6303,582,6199,6763],{"./src/components/ic-typography/ic-typography.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{AllPropTextStyles:()=>AllPropTextStyles,Bold:()=>Bold,ComponentOverride:()=>ComponentOverride,Default:()=>Default,Italic:()=>Italic,MinAndMaxContent:()=>MinAndMaxContent,Playground:()=>Playground,Strikethrough:()=>Strikethrough,Truncation:()=>Truncation,Underline:()=>Underline,Variants:()=>Variants,VerticalMargins:()=>VerticalMargins,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var lit_html__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/lit-html/lit-html.js");const __WEBPACK_DEFAULT_EXPORT__={title:"Web Components/Typography",component:"ic-typography"},Default={render:()=>lit_html__WEBPACK_IMPORTED_MODULE_0__.qy`<ic-typography>I am typography</ic-typography>`,name:"Default"},Variants={render:()=>lit_html__WEBPACK_IMPORTED_MODULE_0__.qy`
    <ic-typography variant="h1">Extra large title</ic-typography>
    <ic-typography variant="h2">Large title</ic-typography>
    <ic-typography variant="h3">Medium title</ic-typography>
    <ic-typography variant="h4">Small title</ic-typography>
    <ic-typography variant="subtitle-large">Subtitle 1</ic-typography>
    <ic-typography variant="subtitle-small">Subtitle 2</ic-typography>
    <ic-typography variant="body">Body text</ic-typography>
    <ic-typography variant="label">Label</ic-typography>
    <ic-typography variant="caption">Caption text</ic-typography>
    <ic-typography variant="caption-uppercase">Caption uppercase</ic-typography>
    <ic-typography variant="label-uppercase">Label uppercase</ic-typography>
    <ic-typography variant="code-large">Code large</ic-typography>
    <ic-typography variant="code-small">Code small</ic-typography>
    <ic-typography variant="code-extra-small">Code extra small</ic-typography>
    <ic-typography variant="badge">Badge</ic-typography>
    <ic-typography variant="badge-small">Badge small</ic-typography>
  `,name:"Variants"},ComponentOverride={render:()=>lit_html__WEBPACK_IMPORTED_MODULE_0__.qy`
    <ic-typography variant="h1"><h3>H3 rendered as H1</h3></ic-typography>
  `,name:"Component override"},VerticalMargins={render:()=>lit_html__WEBPACK_IMPORTED_MODULE_0__.qy`
    <ic-typography apply-vertical-margins variant="h1"
      >Extra large title</ic-typography
    >
    <ic-typography apply-vertical-margins variant="h2"
      >Large title</ic-typography
    >
    <ic-typography apply-vertical-margins variant="h3"
      >Medium title</ic-typography
    >
    <ic-typography apply-vertical-margins variant="h4"
      >Small title</ic-typography
    >
    <ic-typography apply-vertical-margins variant="subtitle-large"
      >Subtitle 1</ic-typography
    >
    <ic-typography apply-vertical-margins variant="subtitle-small"
      >Subtitle 2</ic-typography
    >
    <ic-typography apply-vertical-margins variant="body"
      >Body text</ic-typography
    >
    <ic-typography apply-vertical-margins variant="caption"
      >Caption text</ic-typography
    >
    <ic-typography apply-vertical-margins variant="caption-uppercase"
      >Caption uppercase</ic-typography
    >
    <ic-typography apply-vertical-margins variant="code-large"
      >Code large</ic-typography
    >
    <ic-typography apply-vertical-margins variant="code-small"
      >Code small</ic-typography
    >
    <ic-typography apply-vertical-margins variant="code-extra-small"
      >Code extra small</ic-typography
    >
  `,name:"Vertical margins"},Truncation={render:()=>lit_html__WEBPACK_IMPORTED_MODULE_0__.qy`
    <ic-typography max-lines="3" variant="body">
      Body of text that is truncated to three lines. Click the 'See more' link
      to expand the text, then click 'See less' to truncate the text once more!
      <br />
      Dripper caramelization java saucer grounds galão, mocha, and robusta
      kopi-luwak, percolator, instant, qui saucer latte in brewed café au lait.
      Con panna, cup, cream, body americano affogato cup espresso, rich milk
      seasonal saucer grinder spoon that cultivar strong redeye frappuccino
      barista extraction redeye mazagran. Grounds, french press dripper organic
      and foam id saucer, crema, black rich dark, grounds breve coffee steamed
      caramelization percolator.
    </ic-typography>
  `,name:"Truncation"},Bold={render:()=>lit_html__WEBPACK_IMPORTED_MODULE_0__.qy`
    <ic-typography variant="h1" bold="true">Extra large title</ic-typography>
    <ic-typography variant="h2" bold="true">Large title</ic-typography>
    <ic-typography variant="h3" bold="true">Medium title</ic-typography>
    <ic-typography variant="h4" bold="true">Small title</ic-typography>
    <ic-typography variant="subtitle-large" bold="true"
      >Subtitle 1</ic-typography
    >
    <ic-typography variant="subtitle-small" bold="true"
      >Subtitle 2</ic-typography
    >
    <ic-typography variant="body" bold="true">Body text</ic-typography>
    <ic-typography variant="label" bold="true">Label</ic-typography>
    <ic-typography variant="caption" bold="true">Caption text</ic-typography>
    <ic-typography variant="caption-uppercase" bold="true"
      >Caption uppercase</ic-typography
    >
    <ic-typography variant="label-uppercase" bold="true"
      >Label uppercase</ic-typography
    >
    <ic-typography variant="code-large" bold="true">Code large</ic-typography>
    <ic-typography variant="code-small" bold="true">Code small</ic-typography>
    <ic-typography variant="code-extra-small" bold="true"
      >Code extra small</ic-typography
    >
  `,name:"Bold"},Italic={render:()=>lit_html__WEBPACK_IMPORTED_MODULE_0__.qy`
    <ic-typography variant="h1" italic="true">Extra large title</ic-typography>
    <ic-typography variant="h2" italic="true">Large title</ic-typography>
    <ic-typography variant="h3" italic="true">Medium title</ic-typography>
    <ic-typography variant="h4" italic="true">Small title</ic-typography>
    <ic-typography variant="subtitle-large" italic="true"
      >Subtitle 1</ic-typography
    >
    <ic-typography variant="subtitle-small" italic="true"
      >Subtitle 2</ic-typography
    >
    <ic-typography variant="body" italic="true">Body text</ic-typography>
    <ic-typography variant="label" italic="true">Label</ic-typography>
    <ic-typography variant="caption" italic="true">Caption text</ic-typography>
    <ic-typography variant="caption-uppercase" italic="true"
      >Caption uppercase</ic-typography
    >
    <ic-typography variant="label-uppercase" italic="true"
      >Label uppercase</ic-typography
    >
    <ic-typography variant="code-large" italic="true">Code large</ic-typography>
    <ic-typography variant="code-small" italic="true">Code small</ic-typography>
    <ic-typography variant="code-extra-small" italic="true"
      >Code extra small</ic-typography
    >
  `,name:"Italic"},Strikethrough={render:()=>lit_html__WEBPACK_IMPORTED_MODULE_0__.qy`
    <ic-typography variant="h1" strikethrough="true"
      >Extra large title</ic-typography
    >
    <ic-typography variant="h2" strikethrough="true">Large title</ic-typography>
    <ic-typography variant="h3" strikethrough="true"
      >Medium title</ic-typography
    >
    <ic-typography variant="h4" strikethrough="true">Small title</ic-typography>
    <ic-typography variant="subtitle-large" strikethrough="true"
      >Subtitle 1</ic-typography
    >
    <ic-typography variant="subtitle-small" strikethrough="true"
      >Subtitle 2</ic-typography
    >
    <ic-typography variant="body" strikethrough="true">Body text</ic-typography>
    <ic-typography variant="label" strikethrough="true">Label</ic-typography>
    <ic-typography variant="caption" strikethrough="true"
      >Caption text</ic-typography
    >
    <ic-typography variant="caption-uppercase" strikethrough="true"
      >Caption uppercase</ic-typography
    >
    <ic-typography variant="label-uppercase" strikethrough="true"
      >Label uppercase</ic-typography
    >
    <ic-typography variant="code-large" strikethrough="true"
      >Code large</ic-typography
    >
    <ic-typography variant="code-small" strikethrough="true"
      >Code small</ic-typography
    >
    <ic-typography variant="code-extra-small" strikethrough="true"
      >Code extra small</ic-typography
    >
  `,name:"Strikethrough"},Underline={render:()=>lit_html__WEBPACK_IMPORTED_MODULE_0__.qy`
    <ic-typography variant="h1" underline="true"
      >Extra large title</ic-typography
    >
    <ic-typography variant="h2" underline="true">Large title</ic-typography>
    <ic-typography variant="h3" underline="true">Medium title</ic-typography>
    <ic-typography variant="h4" underline="true">Small title</ic-typography>
    <ic-typography variant="subtitle-large" underline="true"
      >Subtitle 1</ic-typography
    >
    <ic-typography variant="subtitle-small" underline="true"
      >Subtitle 2</ic-typography
    >
    <ic-typography variant="body" underline="true">Body text</ic-typography>
    <ic-typography variant="label" underline="true">Label</ic-typography>
    <ic-typography variant="caption" underline="true"
      >Caption text</ic-typography
    >
    <ic-typography variant="caption-uppercase" underline="true"
      >Caption uppercase</ic-typography
    >
    <ic-typography variant="label-uppercase" underline="true"
      >Label uppercase</ic-typography
    >
    <ic-typography variant="code-large" underline="true"
      >Code large</ic-typography
    >
    <ic-typography variant="code-small" underline="true"
      >Code small</ic-typography
    >
    <ic-typography variant="code-extra-small" underline="true"
      >Code extra small</ic-typography
    >
  `,name:"Underline"},AllPropTextStyles={render:()=>lit_html__WEBPACK_IMPORTED_MODULE_0__.qy`
    <ic-typography
      variant="h1"
      strikethrough="true"
      italic="true"
      bold="true"
      underline="true"
      >Extra large title</ic-typography
    >
    <ic-typography
      variant="h2"
      strikethrough="true"
      italic="true"
      bold="true"
      underline="true"
      >Large title</ic-typography
    >
    <ic-typography
      variant="h3"
      strikethrough="true"
      italic="true"
      bold="true"
      underline="true"
      >Medium title</ic-typography
    >
    <ic-typography
      variant="h4"
      strikethrough="true"
      italic="true"
      bold="true"
      underline="true"
      >Small title</ic-typography
    >
    <ic-typography
      variant="subtitle-large"
      strikethrough="true"
      italic="true"
      bold="true"
      underline="true"
      >Subtitle 1</ic-typography
    >
    <ic-typography
      variant="subtitle-small"
      strikethrough="true"
      italic="true"
      bold="true"
      underline="true"
      >Subtitle 2</ic-typography
    >
    <ic-typography
      variant="body"
      strikethrough="true"
      italic="true"
      bold="true"
      underline="true"
      >Body text</ic-typography
    >
    <ic-typography
      variant="label"
      strikethrough="true"
      italic="true"
      bold="true"
      underline="true"
      >Label</ic-typography
    >
    <ic-typography
      variant="caption"
      strikethrough="true"
      italic="true"
      bold="true"
      underline="true"
      >Caption text</ic-typography
    >
    <ic-typography
      variant="caption-uppercase"
      strikethrough="true"
      italic="true"
      bold="true"
      underline="true"
      >Caption uppercase</ic-typography
    >
    <ic-typography
      variant="label-uppercase"
      strikethrough="true"
      italic="true"
      bold="true"
      underline="true"
      >Label uppercase</ic-typography
    >
    <ic-typography
      variant="code-large"
      strikethrough="true"
      italic="true"
      bold="true"
      underline="true"
      >Code large</ic-typography
    >
    <ic-typography
      variant="code-small"
      strikethrough="true"
      italic="true"
      bold="true"
      underline="true"
      >Code small</ic-typography
    >
    <ic-typography
      variant="code-extra-small"
      strikethrough="true"
      italic="true"
      bold="true"
      underline="true"
      >Code extra small</ic-typography
    >
  `,name:"All prop text styles"},MinAndMaxContent={render:()=>lit_html__WEBPACK_IMPORTED_MODULE_0__.qy`
    <ic-typography variant="body">A</ic-typography>
    <ic-typography variant="body"
      >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam egestas
      eget lorem sed luctus. Aenean vitae lorem leo. Pellentesque fringilla
      semper posuere. Nullam eget sem felis. Fusce quis laoreet arcu. Nulla
      commodo fringilla magna eget vehicula. Morbi ac nisl tellus. Ut mollis,
      nunc blandit aliquam dignissim, neque neque rhoncus nisi, at maximus
      ligula est vitae felis. Nunc at eros posuere, finibus metus sit amet,
      cursus mi. Nunc euismod ac turpis sit amet luctus. Pellentesque dictum
      tempor congue. Vivamus consectetur orci eget ante molestie, eget luctus
      enim tempus. Nam iaculis odio et orci consequat, et volutpat dolor
      finibus. Proin et porttitor diam. Ut quis est vel diam tincidunt congue
      nec at ipsum.</ic-typography
    >
  `,name:"Min and max content"},Playground={render:args=>lit_html__WEBPACK_IMPORTED_MODULE_0__.qy`<ic-typography
      apply-vertical-margins=${args.applyVerticalMargins}
      variant=${args.variant}
      bold=${args.bold}
      italic=${args.italic}
      strikethrough=${args.strikethrough}
      underline=${args.underline}
      theme=${args.theme}
      >Typography to test</ic-typography
    >`,args:{applyVerticalMargins:!1,bold:!1,italic:!1,strikethrough:!1,underline:!1,variant:"body",theme:"inherit"},argTypes:{variant:{options:["body","caption","h1","h2","h3","h4","label","subtitle-large","subtitle-small","label-uppercase","caption-uppercase","code-large","code-small","code-extra-small"],control:{type:"select"}},theme:{options:["inherit","light","dark"],control:{type:"inline-radio"}}},name:"Playground"},__namedExportsOrder=["Default","Variants","ComponentOverride","VerticalMargins","Truncation","Bold","Italic","Strikethrough","Underline","AllPropTextStyles","MinAndMaxContent","Playground"];Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:'{\n  render: () => html`<ic-typography>I am typography</ic-typography>`,\n  name: "Default"\n}',...Default.parameters?.docs?.source}}},Variants.parameters={...Variants.parameters,docs:{...Variants.parameters?.docs,source:{originalSource:'{\n  render: () => html`\n    <ic-typography variant="h1">Extra large title</ic-typography>\n    <ic-typography variant="h2">Large title</ic-typography>\n    <ic-typography variant="h3">Medium title</ic-typography>\n    <ic-typography variant="h4">Small title</ic-typography>\n    <ic-typography variant="subtitle-large">Subtitle 1</ic-typography>\n    <ic-typography variant="subtitle-small">Subtitle 2</ic-typography>\n    <ic-typography variant="body">Body text</ic-typography>\n    <ic-typography variant="label">Label</ic-typography>\n    <ic-typography variant="caption">Caption text</ic-typography>\n    <ic-typography variant="caption-uppercase">Caption uppercase</ic-typography>\n    <ic-typography variant="label-uppercase">Label uppercase</ic-typography>\n    <ic-typography variant="code-large">Code large</ic-typography>\n    <ic-typography variant="code-small">Code small</ic-typography>\n    <ic-typography variant="code-extra-small">Code extra small</ic-typography>\n    <ic-typography variant="badge">Badge</ic-typography>\n    <ic-typography variant="badge-small">Badge small</ic-typography>\n  `,\n  name: "Variants"\n}',...Variants.parameters?.docs?.source}}},ComponentOverride.parameters={...ComponentOverride.parameters,docs:{...ComponentOverride.parameters?.docs,source:{originalSource:'{\n  render: () => html`\n    <ic-typography variant="h1"><h3>H3 rendered as H1</h3></ic-typography>\n  `,\n  name: "Component override"\n}',...ComponentOverride.parameters?.docs?.source}}},VerticalMargins.parameters={...VerticalMargins.parameters,docs:{...VerticalMargins.parameters?.docs,source:{originalSource:'{\n  render: () => html`\n    <ic-typography apply-vertical-margins variant="h1"\n      >Extra large title</ic-typography\n    >\n    <ic-typography apply-vertical-margins variant="h2"\n      >Large title</ic-typography\n    >\n    <ic-typography apply-vertical-margins variant="h3"\n      >Medium title</ic-typography\n    >\n    <ic-typography apply-vertical-margins variant="h4"\n      >Small title</ic-typography\n    >\n    <ic-typography apply-vertical-margins variant="subtitle-large"\n      >Subtitle 1</ic-typography\n    >\n    <ic-typography apply-vertical-margins variant="subtitle-small"\n      >Subtitle 2</ic-typography\n    >\n    <ic-typography apply-vertical-margins variant="body"\n      >Body text</ic-typography\n    >\n    <ic-typography apply-vertical-margins variant="caption"\n      >Caption text</ic-typography\n    >\n    <ic-typography apply-vertical-margins variant="caption-uppercase"\n      >Caption uppercase</ic-typography\n    >\n    <ic-typography apply-vertical-margins variant="code-large"\n      >Code large</ic-typography\n    >\n    <ic-typography apply-vertical-margins variant="code-small"\n      >Code small</ic-typography\n    >\n    <ic-typography apply-vertical-margins variant="code-extra-small"\n      >Code extra small</ic-typography\n    >\n  `,\n  name: "Vertical margins"\n}',...VerticalMargins.parameters?.docs?.source}}},Truncation.parameters={...Truncation.parameters,docs:{...Truncation.parameters?.docs,source:{originalSource:'{\n  render: () => html`\n    <ic-typography max-lines="3" variant="body">\n      Body of text that is truncated to three lines. Click the \'See more\' link\n      to expand the text, then click \'See less\' to truncate the text once more!\n      <br />\n      Dripper caramelization java saucer grounds galão, mocha, and robusta\n      kopi-luwak, percolator, instant, qui saucer latte in brewed café au lait.\n      Con panna, cup, cream, body americano affogato cup espresso, rich milk\n      seasonal saucer grinder spoon that cultivar strong redeye frappuccino\n      barista extraction redeye mazagran. Grounds, french press dripper organic\n      and foam id saucer, crema, black rich dark, grounds breve coffee steamed\n      caramelization percolator.\n    </ic-typography>\n  `,\n  name: "Truncation"\n}',...Truncation.parameters?.docs?.source}}},Bold.parameters={...Bold.parameters,docs:{...Bold.parameters?.docs,source:{originalSource:'{\n  render: () => html`\n    <ic-typography variant="h1" bold="true">Extra large title</ic-typography>\n    <ic-typography variant="h2" bold="true">Large title</ic-typography>\n    <ic-typography variant="h3" bold="true">Medium title</ic-typography>\n    <ic-typography variant="h4" bold="true">Small title</ic-typography>\n    <ic-typography variant="subtitle-large" bold="true"\n      >Subtitle 1</ic-typography\n    >\n    <ic-typography variant="subtitle-small" bold="true"\n      >Subtitle 2</ic-typography\n    >\n    <ic-typography variant="body" bold="true">Body text</ic-typography>\n    <ic-typography variant="label" bold="true">Label</ic-typography>\n    <ic-typography variant="caption" bold="true">Caption text</ic-typography>\n    <ic-typography variant="caption-uppercase" bold="true"\n      >Caption uppercase</ic-typography\n    >\n    <ic-typography variant="label-uppercase" bold="true"\n      >Label uppercase</ic-typography\n    >\n    <ic-typography variant="code-large" bold="true">Code large</ic-typography>\n    <ic-typography variant="code-small" bold="true">Code small</ic-typography>\n    <ic-typography variant="code-extra-small" bold="true"\n      >Code extra small</ic-typography\n    >\n  `,\n  name: "Bold"\n}',...Bold.parameters?.docs?.source}}},Italic.parameters={...Italic.parameters,docs:{...Italic.parameters?.docs,source:{originalSource:'{\n  render: () => html`\n    <ic-typography variant="h1" italic="true">Extra large title</ic-typography>\n    <ic-typography variant="h2" italic="true">Large title</ic-typography>\n    <ic-typography variant="h3" italic="true">Medium title</ic-typography>\n    <ic-typography variant="h4" italic="true">Small title</ic-typography>\n    <ic-typography variant="subtitle-large" italic="true"\n      >Subtitle 1</ic-typography\n    >\n    <ic-typography variant="subtitle-small" italic="true"\n      >Subtitle 2</ic-typography\n    >\n    <ic-typography variant="body" italic="true">Body text</ic-typography>\n    <ic-typography variant="label" italic="true">Label</ic-typography>\n    <ic-typography variant="caption" italic="true">Caption text</ic-typography>\n    <ic-typography variant="caption-uppercase" italic="true"\n      >Caption uppercase</ic-typography\n    >\n    <ic-typography variant="label-uppercase" italic="true"\n      >Label uppercase</ic-typography\n    >\n    <ic-typography variant="code-large" italic="true">Code large</ic-typography>\n    <ic-typography variant="code-small" italic="true">Code small</ic-typography>\n    <ic-typography variant="code-extra-small" italic="true"\n      >Code extra small</ic-typography\n    >\n  `,\n  name: "Italic"\n}',...Italic.parameters?.docs?.source}}},Strikethrough.parameters={...Strikethrough.parameters,docs:{...Strikethrough.parameters?.docs,source:{originalSource:'{\n  render: () => html`\n    <ic-typography variant="h1" strikethrough="true"\n      >Extra large title</ic-typography\n    >\n    <ic-typography variant="h2" strikethrough="true">Large title</ic-typography>\n    <ic-typography variant="h3" strikethrough="true"\n      >Medium title</ic-typography\n    >\n    <ic-typography variant="h4" strikethrough="true">Small title</ic-typography>\n    <ic-typography variant="subtitle-large" strikethrough="true"\n      >Subtitle 1</ic-typography\n    >\n    <ic-typography variant="subtitle-small" strikethrough="true"\n      >Subtitle 2</ic-typography\n    >\n    <ic-typography variant="body" strikethrough="true">Body text</ic-typography>\n    <ic-typography variant="label" strikethrough="true">Label</ic-typography>\n    <ic-typography variant="caption" strikethrough="true"\n      >Caption text</ic-typography\n    >\n    <ic-typography variant="caption-uppercase" strikethrough="true"\n      >Caption uppercase</ic-typography\n    >\n    <ic-typography variant="label-uppercase" strikethrough="true"\n      >Label uppercase</ic-typography\n    >\n    <ic-typography variant="code-large" strikethrough="true"\n      >Code large</ic-typography\n    >\n    <ic-typography variant="code-small" strikethrough="true"\n      >Code small</ic-typography\n    >\n    <ic-typography variant="code-extra-small" strikethrough="true"\n      >Code extra small</ic-typography\n    >\n  `,\n  name: "Strikethrough"\n}',...Strikethrough.parameters?.docs?.source}}},Underline.parameters={...Underline.parameters,docs:{...Underline.parameters?.docs,source:{originalSource:'{\n  render: () => html`\n    <ic-typography variant="h1" underline="true"\n      >Extra large title</ic-typography\n    >\n    <ic-typography variant="h2" underline="true">Large title</ic-typography>\n    <ic-typography variant="h3" underline="true">Medium title</ic-typography>\n    <ic-typography variant="h4" underline="true">Small title</ic-typography>\n    <ic-typography variant="subtitle-large" underline="true"\n      >Subtitle 1</ic-typography\n    >\n    <ic-typography variant="subtitle-small" underline="true"\n      >Subtitle 2</ic-typography\n    >\n    <ic-typography variant="body" underline="true">Body text</ic-typography>\n    <ic-typography variant="label" underline="true">Label</ic-typography>\n    <ic-typography variant="caption" underline="true"\n      >Caption text</ic-typography\n    >\n    <ic-typography variant="caption-uppercase" underline="true"\n      >Caption uppercase</ic-typography\n    >\n    <ic-typography variant="label-uppercase" underline="true"\n      >Label uppercase</ic-typography\n    >\n    <ic-typography variant="code-large" underline="true"\n      >Code large</ic-typography\n    >\n    <ic-typography variant="code-small" underline="true"\n      >Code small</ic-typography\n    >\n    <ic-typography variant="code-extra-small" underline="true"\n      >Code extra small</ic-typography\n    >\n  `,\n  name: "Underline"\n}',...Underline.parameters?.docs?.source}}},AllPropTextStyles.parameters={...AllPropTextStyles.parameters,docs:{...AllPropTextStyles.parameters?.docs,source:{originalSource:'{\n  render: () => html`\n    <ic-typography\n      variant="h1"\n      strikethrough="true"\n      italic="true"\n      bold="true"\n      underline="true"\n      >Extra large title</ic-typography\n    >\n    <ic-typography\n      variant="h2"\n      strikethrough="true"\n      italic="true"\n      bold="true"\n      underline="true"\n      >Large title</ic-typography\n    >\n    <ic-typography\n      variant="h3"\n      strikethrough="true"\n      italic="true"\n      bold="true"\n      underline="true"\n      >Medium title</ic-typography\n    >\n    <ic-typography\n      variant="h4"\n      strikethrough="true"\n      italic="true"\n      bold="true"\n      underline="true"\n      >Small title</ic-typography\n    >\n    <ic-typography\n      variant="subtitle-large"\n      strikethrough="true"\n      italic="true"\n      bold="true"\n      underline="true"\n      >Subtitle 1</ic-typography\n    >\n    <ic-typography\n      variant="subtitle-small"\n      strikethrough="true"\n      italic="true"\n      bold="true"\n      underline="true"\n      >Subtitle 2</ic-typography\n    >\n    <ic-typography\n      variant="body"\n      strikethrough="true"\n      italic="true"\n      bold="true"\n      underline="true"\n      >Body text</ic-typography\n    >\n    <ic-typography\n      variant="label"\n      strikethrough="true"\n      italic="true"\n      bold="true"\n      underline="true"\n      >Label</ic-typography\n    >\n    <ic-typography\n      variant="caption"\n      strikethrough="true"\n      italic="true"\n      bold="true"\n      underline="true"\n      >Caption text</ic-typography\n    >\n    <ic-typography\n      variant="caption-uppercase"\n      strikethrough="true"\n      italic="true"\n      bold="true"\n      underline="true"\n      >Caption uppercase</ic-typography\n    >\n    <ic-typography\n      variant="label-uppercase"\n      strikethrough="true"\n      italic="true"\n      bold="true"\n      underline="true"\n      >Label uppercase</ic-typography\n    >\n    <ic-typography\n      variant="code-large"\n      strikethrough="true"\n      italic="true"\n      bold="true"\n      underline="true"\n      >Code large</ic-typography\n    >\n    <ic-typography\n      variant="code-small"\n      strikethrough="true"\n      italic="true"\n      bold="true"\n      underline="true"\n      >Code small</ic-typography\n    >\n    <ic-typography\n      variant="code-extra-small"\n      strikethrough="true"\n      italic="true"\n      bold="true"\n      underline="true"\n      >Code extra small</ic-typography\n    >\n  `,\n  name: "All prop text styles"\n}',...AllPropTextStyles.parameters?.docs?.source}}},MinAndMaxContent.parameters={...MinAndMaxContent.parameters,docs:{...MinAndMaxContent.parameters?.docs,source:{originalSource:'{\n  render: () => html`\n    <ic-typography variant="body">A</ic-typography>\n    <ic-typography variant="body"\n      >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam egestas\n      eget lorem sed luctus. Aenean vitae lorem leo. Pellentesque fringilla\n      semper posuere. Nullam eget sem felis. Fusce quis laoreet arcu. Nulla\n      commodo fringilla magna eget vehicula. Morbi ac nisl tellus. Ut mollis,\n      nunc blandit aliquam dignissim, neque neque rhoncus nisi, at maximus\n      ligula est vitae felis. Nunc at eros posuere, finibus metus sit amet,\n      cursus mi. Nunc euismod ac turpis sit amet luctus. Pellentesque dictum\n      tempor congue. Vivamus consectetur orci eget ante molestie, eget luctus\n      enim tempus. Nam iaculis odio et orci consequat, et volutpat dolor\n      finibus. Proin et porttitor diam. Ut quis est vel diam tincidunt congue\n      nec at ipsum.</ic-typography\n    >\n  `,\n  name: "Min and max content"\n}',...MinAndMaxContent.parameters?.docs?.source}}},Playground.parameters={...Playground.parameters,docs:{...Playground.parameters?.docs,source:{originalSource:'{\n  render: args => html`<ic-typography\n      apply-vertical-margins=${args.applyVerticalMargins}\n      variant=${args.variant}\n      bold=${args.bold}\n      italic=${args.italic}\n      strikethrough=${args.strikethrough}\n      underline=${args.underline}\n      theme=${args.theme}\n      >Typography to test</ic-typography\n    >`,\n  args: defaultArgs,\n  argTypes: {\n    variant: {\n      options: ["body", "caption", "h1", "h2", "h3", "h4", "label", "subtitle-large", "subtitle-small", "label-uppercase", "caption-uppercase", "code-large", "code-small", "code-extra-small"],\n      control: {\n        type: "select"\n      }\n    },\n    theme: {\n      options: ["inherit", "light", "dark"],\n      control: {\n        type: "inline-radio"\n      }\n    }\n  },\n  name: "Playground"\n}',...Playground.parameters?.docs?.source}}}},"./node_modules/lit-html/lit-html.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{qy:()=>x});const t=globalThis,i=t.trustedTypes,s=i?i.createPolicy("lit-html",{createHTML:t=>t}):void 0,e="$lit$",h=`lit$${(Math.random()+"").slice(9)}$`,o="?"+h,n=`<${o}>`,r=document,l=()=>r.createComment(""),c=t=>null===t||"object"!=typeof t&&"function"!=typeof t,a=Array.isArray,u=t=>a(t)||"function"==typeof t?.[Symbol.iterator],d="[ \t\n\f\r]",f=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,v=/-->/g,_=/>/g,m=RegExp(`>|${d}(?:([^\\s"'>=/]+)(${d}*=${d}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),p=/'/g,g=/"/g,$=/^(?:script|style|textarea|title)$/i,y=t=>(i,...s)=>({_$litType$:t,strings:i,values:s}),x=y(1),w=(y(2),Symbol.for("lit-noChange")),T=Symbol.for("lit-nothing"),A=new WeakMap,E=r.createTreeWalker(r,129);function C(t,i){if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==s?s.createHTML(i):i}const P=(t,i)=>{const s=t.length-1,o=[];let r,l=2===i?"<svg>":"",c=f;for(let i=0;i<s;i++){const s=t[i];let a,u,d=-1,y=0;for(;y<s.length&&(c.lastIndex=y,u=c.exec(s),null!==u);)y=c.lastIndex,c===f?"!--"===u[1]?c=v:void 0!==u[1]?c=_:void 0!==u[2]?($.test(u[2])&&(r=RegExp("</"+u[2],"g")),c=m):void 0!==u[3]&&(c=m):c===m?">"===u[0]?(c=r??f,d=-1):void 0===u[1]?d=-2:(d=c.lastIndex-u[2].length,a=u[1],c=void 0===u[3]?m:'"'===u[3]?g:p):c===g||c===p?c=m:c===v||c===_?c=f:(c=m,r=void 0);const x=c===m&&t[i+1].startsWith("/>")?" ":"";l+=c===f?s+n:d>=0?(o.push(a),s.slice(0,d)+e+s.slice(d)+h+x):s+h+(-2===d?i:x)}return[C(t,l+(t[s]||"<?>")+(2===i?"</svg>":"")),o]};class V{constructor({strings:t,_$litType$:s},n){let r;this.parts=[];let c=0,a=0;const u=t.length-1,d=this.parts,[f,v]=P(t,s);if(this.el=V.createElement(f,n),E.currentNode=this.el.content,2===s){const t=this.el.content.firstChild;t.replaceWith(...t.childNodes)}for(;null!==(r=E.nextNode())&&d.length<u;){if(1===r.nodeType){if(r.hasAttributes())for(const t of r.getAttributeNames())if(t.endsWith(e)){const i=v[a++],s=r.getAttribute(t).split(h),e=/([.?@])?(.*)/.exec(i);d.push({type:1,index:c,name:e[2],strings:s,ctor:"."===e[1]?k:"?"===e[1]?H:"@"===e[1]?I:R}),r.removeAttribute(t)}else t.startsWith(h)&&(d.push({type:6,index:c}),r.removeAttribute(t));if($.test(r.tagName)){const t=r.textContent.split(h),s=t.length-1;if(s>0){r.textContent=i?i.emptyScript:"";for(let i=0;i<s;i++)r.append(t[i],l()),E.nextNode(),d.push({type:2,index:++c});r.append(t[s],l())}}}else if(8===r.nodeType)if(r.data===o)d.push({type:2,index:c});else{let t=-1;for(;-1!==(t=r.data.indexOf(h,t+1));)d.push({type:7,index:c}),t+=h.length-1}c++}}static createElement(t,i){const s=r.createElement("template");return s.innerHTML=t,s}}function N(t,i,s=t,e){if(i===w)return i;let h=void 0!==e?s._$Co?.[e]:s._$Cl;const o=c(i)?void 0:i._$litDirective$;return h?.constructor!==o&&(h?._$AO?.(!1),void 0===o?h=void 0:(h=new o(t),h._$AT(t,s,e)),void 0!==e?(s._$Co??=[])[e]=h:s._$Cl=h),void 0!==h&&(i=N(t,h._$AS(t,i.values),h,e)),i}class S{constructor(t,i){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=i}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:i},parts:s}=this._$AD,e=(t?.creationScope??r).importNode(i,!0);E.currentNode=e;let h=E.nextNode(),o=0,n=0,l=s[0];for(;void 0!==l;){if(o===l.index){let i;2===l.type?i=new M(h,h.nextSibling,this,t):1===l.type?i=new l.ctor(h,l.name,l.strings,this,t):6===l.type&&(i=new L(h,this,t)),this._$AV.push(i),l=s[++n]}o!==l?.index&&(h=E.nextNode(),o++)}return E.currentNode=r,e}p(t){let i=0;for(const s of this._$AV)void 0!==s&&(void 0!==s.strings?(s._$AI(t,s,i),i+=s.strings.length-2):s._$AI(t[i])),i++}}class M{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,i,s,e){this.type=2,this._$AH=T,this._$AN=void 0,this._$AA=t,this._$AB=i,this._$AM=s,this.options=e,this._$Cv=e?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const i=this._$AM;return void 0!==i&&11===t?.nodeType&&(t=i.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,i=this){t=N(this,t,i),c(t)?t===T||null==t||""===t?(this._$AH!==T&&this._$AR(),this._$AH=T):t!==this._$AH&&t!==w&&this._(t):void 0!==t._$litType$?this.g(t):void 0!==t.nodeType?this.$(t):u(t)?this.T(t):this._(t)}k(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}$(t){this._$AH!==t&&(this._$AR(),this._$AH=this.k(t))}_(t){this._$AH!==T&&c(this._$AH)?this._$AA.nextSibling.data=t:this.$(r.createTextNode(t)),this._$AH=t}g(t){const{values:i,_$litType$:s}=t,e="number"==typeof s?this._$AC(t):(void 0===s.el&&(s.el=V.createElement(C(s.h,s.h[0]),this.options)),s);if(this._$AH?._$AD===e)this._$AH.p(i);else{const t=new S(e,this),s=t.u(this.options);t.p(i),this.$(s),this._$AH=t}}_$AC(t){let i=A.get(t.strings);return void 0===i&&A.set(t.strings,i=new V(t)),i}T(t){a(this._$AH)||(this._$AH=[],this._$AR());const i=this._$AH;let s,e=0;for(const h of t)e===i.length?i.push(s=new M(this.k(l()),this.k(l()),this,this.options)):s=i[e],s._$AI(h),e++;e<i.length&&(this._$AR(s&&s._$AB.nextSibling,e),i.length=e)}_$AR(t=this._$AA.nextSibling,i){for(this._$AP?.(!1,!0,i);t&&t!==this._$AB;){const i=t.nextSibling;t.remove(),t=i}}setConnected(t){void 0===this._$AM&&(this._$Cv=t,this._$AP?.(t))}}class R{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,i,s,e,h){this.type=1,this._$AH=T,this._$AN=void 0,this.element=t,this.name=i,this._$AM=e,this.options=h,s.length>2||""!==s[0]||""!==s[1]?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=T}_$AI(t,i=this,s,e){const h=this.strings;let o=!1;if(void 0===h)t=N(this,t,i,0),o=!c(t)||t!==this._$AH&&t!==w,o&&(this._$AH=t);else{const e=t;let n,r;for(t=h[0],n=0;n<h.length-1;n++)r=N(this,e[s+n],i,n),r===w&&(r=this._$AH[n]),o||=!c(r)||r!==this._$AH[n],r===T?t=T:t!==T&&(t+=(r??"")+h[n+1]),this._$AH[n]=r}o&&!e&&this.O(t)}O(t){t===T?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class k extends R{constructor(){super(...arguments),this.type=3}O(t){this.element[this.name]=t===T?void 0:t}}class H extends R{constructor(){super(...arguments),this.type=4}O(t){this.element.toggleAttribute(this.name,!!t&&t!==T)}}class I extends R{constructor(t,i,s,e,h){super(t,i,s,e,h),this.type=5}_$AI(t,i=this){if((t=N(this,t,i,0)??T)===w)return;const s=this._$AH,e=t===T&&s!==T||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,h=t!==T&&(s===T||e);e&&this.element.removeEventListener(this.name,this,s),h&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class L{constructor(t,i,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=i,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(t){N(this,t)}}const Z=t.litHtmlPolyfillSupport;Z?.(V,M),(t.litHtmlVersions??=[]).push("3.1.1")}}]);
//# sourceMappingURL=components-ic-typography-ic-typography-stories.c43f30d5.iframe.bundle.js.map