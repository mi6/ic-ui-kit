"use strict";(self.webpackChunk_ukic_react=self.webpackChunk_ukic_react||[]).push([[3675],{"./src/stories/ic-typography.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{AllPropTextStyles:()=>AllPropTextStyles,Bold:()=>Bold,ComponentOverride:()=>ComponentOverride,Default:()=>Default,InAnAgGrid:()=>InAnAgGrid,Italic:()=>Italic,MinAndMaxContent:()=>MinAndMaxContent,Playground:()=>Playground,Strikethrough:()=>Strikethrough,Truncation:()=>Truncation,Underline:()=>Underline,Variants:()=>Variants,VerticalMargins:()=>VerticalMargins,__namedExportsOrder:()=>__namedExportsOrder,default:()=>ic_typography_stories});var react=__webpack_require__("./node_modules/react/index.js"),index_esm=__webpack_require__("./node_modules/ag-grid-react/dist/package/index.esm.mjs"),components=(__webpack_require__("./node_modules/ag-grid-community/styles/ag-grid.css"),__webpack_require__("./node_modules/ag-grid-community/styles/ag-theme-quartz.css"),__webpack_require__("./src/components.ts"));var AGGrid=function AGGrid(){var colDefs=[{field:"firstName"},{field:"lastName"},{field:"jobTitle",cellRenderer:function JobTitleRenderer(params){return react.createElement(components.Cu,null,react.createElement("p",null,params.value))}},{field:"age"}];return react.createElement(react.Fragment,null,react.createElement("div",{className:"ag-theme-quartz"},react.createElement(index_esm.W6,{rowData:[{firstName:"Joe",lastName:"Bloggs",jobTitle:"Developer",age:30},{firstName:"Sarah",lastName:"Smith",jobTitle:"Analyst",age:28},{firstName:"Mark",lastName:"Owens",jobTitle:"Team Lead",age:45},{firstName:"Naomi",lastName:"Thomas",jobTitle:"Senior Software Architect",age:32},{firstName:"Luke",lastName:"Ashford",jobTitle:"Junior Developer",age:18}],columnDefs:colDefs,domLayout:"autoHeight"})))};const ic_typography_stories={title:"Typography",component:components.Cu};var Default={render:function render(){return react.createElement(components.Cu,null,"I am typography")},name:"Default"},Variants={render:function render(){return react.createElement(react.Fragment,null,react.createElement(components.Cu,{variant:"h1"},"Extra large title"),react.createElement(components.Cu,{variant:"h2"},"Large title"),react.createElement(components.Cu,{variant:"h3"},"Medium title"),react.createElement(components.Cu,{variant:"h4"},"Small title"),react.createElement(components.Cu,{variant:"subtitle-large"},"Subtitle 1"),react.createElement(components.Cu,{variant:"subtitle-small"},"Subtitle 2"),react.createElement(components.Cu,{variant:"body"},"Body text"),react.createElement(components.Cu,{variant:"label"},"Label"),react.createElement(components.Cu,{variant:"caption"},"Caption text"),react.createElement(components.Cu,{variant:"caption-uppercase"},"Caption uppercase"),react.createElement(components.Cu,{variant:"label-uppercase"},"Label uppercase"),react.createElement(components.Cu,{variant:"code-large"},"Code large"),react.createElement(components.Cu,{variant:"code-small"},"Code small"),react.createElement(components.Cu,{variant:"code-extra-small"},"Code extra small"))},name:"Variants"},ComponentOverride={render:function render(){return react.createElement(components.Cu,{variant:"h1"},react.createElement("h3",null,"H3 rendered as H1"))},name:"Component override"},VerticalMargins={render:function render(){return react.createElement(react.Fragment,null,react.createElement(components.Cu,{applyVerticalMargins:!0,variant:"h1"},"Extra large title"),react.createElement(components.Cu,{applyVerticalMargins:!0,variant:"h2"},"Large title"),react.createElement(components.Cu,{applyVerticalMargins:!0,variant:"h3"},"Medium title"),react.createElement(components.Cu,{applyVerticalMargins:!0,variant:"h4"},"Small title"),react.createElement(components.Cu,{applyVerticalMargins:!0,variant:"subtitle-large"},"Subtitle 1"),react.createElement(components.Cu,{applyVerticalMargins:!0,variant:"subtitle-small"},"Subtitle 2"),react.createElement(components.Cu,{applyVerticalMargins:!0,variant:"body"},"Body text"),react.createElement(components.Cu,{applyVerticalMargins:!0,variant:"caption"},"Caption text"),react.createElement(components.Cu,{applyVerticalMargins:!0,variant:"caption-uppercase"},"Caption uppercase"),react.createElement(components.Cu,{applyVerticalMargins:!0,variant:"code-large"},"Code large"),react.createElement(components.Cu,{applyVerticalMargins:!0,variant:"code-small"},"Code small"),react.createElement(components.Cu,{applyVerticalMargins:!0,variant:"code-extra-small"},"Code extra small"))},name:"Vertical margins"},Truncation={render:function render(){return react.createElement(react.Fragment,null,react.createElement(components.Cu,{"max-lines":"3",variant:"body"},"Body of text that is truncated to three lines. Click the 'See more' link to expand the text, then click 'See less' to truncate the text once more!",react.createElement("br",null),"Dripper caramelization java saucer grounds galão, mocha, and robusta kopi-luwak, percolator, instant, qui saucer latte in brewed café au lait. Con panna, cup, cream, body americano affogato cup espresso, rich milk seasonal saucer grinder spoon that cultivar strong redeye frappuccino barista extraction redeye mazagran. Grounds, french press dripper organic and foam id saucer, crema, black rich dark, grounds breve coffee steamed caramelization percolator."))},name:"Truncation"},Bold={render:function render(){return react.createElement(react.Fragment,null,react.createElement(components.Cu,{variant:"h1",bold:!0},"Extra large title"),react.createElement(components.Cu,{variant:"h2",bold:!0},"Large title"),react.createElement(components.Cu,{variant:"h3",bold:!0},"Medium title"),react.createElement(components.Cu,{variant:"h4",bold:!0},"Small title"),react.createElement(components.Cu,{variant:"subtitle-large",bold:!0},"Subtitle 1"),react.createElement(components.Cu,{variant:"subtitle-small",bold:!0},"Subtitle 2"),react.createElement(components.Cu,{variant:"body",bold:!0},"Body text"),react.createElement(components.Cu,{variant:"label",bold:!0},"Label"),react.createElement(components.Cu,{variant:"caption",bold:!0},"Caption text"),react.createElement(components.Cu,{variant:"caption-uppercase",bold:!0},"Caption uppercase"),react.createElement(components.Cu,{variant:"label-uppercase",bold:!0},"Label uppercase"),react.createElement(components.Cu,{variant:"code-large",bold:!0},"Code large"),react.createElement(components.Cu,{variant:"code-small",bold:!0},"Code small"),react.createElement(components.Cu,{variant:"code-extra-small",bold:!0},"Code extra small"))},name:"Bold"},Italic={render:function render(){return react.createElement(react.Fragment,null,react.createElement(components.Cu,{variant:"h1",italic:!0},"Extra large title"),react.createElement(components.Cu,{variant:"h2",italic:!0},"Large title"),react.createElement(components.Cu,{variant:"h3",italic:!0},"Medium title"),react.createElement(components.Cu,{variant:"h4",italic:!0},"Small title"),react.createElement(components.Cu,{variant:"subtitle-large",italic:!0},"Subtitle 1"),react.createElement(components.Cu,{variant:"subtitle-small",italic:!0},"Subtitle 2"),react.createElement(components.Cu,{variant:"body",italic:!0},"Body text"),react.createElement(components.Cu,{variant:"label",italic:!0},"Label"),react.createElement(components.Cu,{variant:"caption",italic:!0},"Caption text"),react.createElement(components.Cu,{variant:"caption-uppercase",italic:!0},"Caption uppercase"),react.createElement(components.Cu,{variant:"label-uppercase",italic:!0},"Label uppercase"),react.createElement(components.Cu,{variant:"code-large",italic:!0},"Code large"),react.createElement(components.Cu,{variant:"code-small",italic:!0},"Code small"),react.createElement(components.Cu,{variant:"code-extra-small",italic:!0},"Code extra small"))},name:"Italic"},Strikethrough={render:function render(){return react.createElement(react.Fragment,null,react.createElement(components.Cu,{variant:"h1",strikethrough:!0},"Extra large title"),react.createElement(components.Cu,{variant:"h2",strikethrough:!0},"Large title"),react.createElement(components.Cu,{variant:"h3",strikethrough:!0},"Medium title"),react.createElement(components.Cu,{variant:"h4",strikethrough:!0},"Small title"),react.createElement(components.Cu,{variant:"subtitle-large",strikethrough:!0},"Subtitle 1"),react.createElement(components.Cu,{variant:"subtitle-small",strikethrough:!0},"Subtitle 2"),react.createElement(components.Cu,{variant:"body",strikethrough:!0},"Body text"),react.createElement(components.Cu,{variant:"label",strikethrough:!0},"Label"),react.createElement(components.Cu,{variant:"caption",strikethrough:!0},"Caption text"),react.createElement(components.Cu,{variant:"caption-uppercase",strikethrough:!0},"Caption uppercase"),react.createElement(components.Cu,{variant:"label-uppercase",strikethrough:!0},"Label uppercase"),react.createElement(components.Cu,{variant:"code-large",strikethrough:!0},"Code large"),react.createElement(components.Cu,{variant:"code-small",strikethrough:!0},"Code small"),react.createElement(components.Cu,{variant:"code-extra-small",strikethrough:!0},"Code extra small"))},name:"Strikethrough"},Underline={render:function render(){return react.createElement(react.Fragment,null,react.createElement(components.Cu,{variant:"h1",underline:!0},"Extra large title"),react.createElement(components.Cu,{variant:"h2",underline:!0},"Large title"),react.createElement(components.Cu,{variant:"h3",underline:!0},"Medium title"),react.createElement(components.Cu,{variant:"h4",underline:!0},"Small title"),react.createElement(components.Cu,{variant:"subtitle-large",underline:!0},"Subtitle 1"),react.createElement(components.Cu,{variant:"subtitle-small",underline:!0},"Subtitle 2"),react.createElement(components.Cu,{variant:"body",underline:!0},"Body text"),react.createElement(components.Cu,{variant:"label",underline:!0},"Label"),react.createElement(components.Cu,{variant:"caption",underline:!0},"Caption text"),react.createElement(components.Cu,{variant:"caption-uppercase",underline:!0},"Caption uppercase"),react.createElement(components.Cu,{variant:"label-uppercase",underline:!0},"Label uppercase"),react.createElement(components.Cu,{variant:"code-large",underline:!0},"Code large"),react.createElement(components.Cu,{variant:"code-small",underline:!0},"Code small"),react.createElement(components.Cu,{variant:"code-extra-small",underline:!0},"Code extra small"))},name:"Underline"},AllPropTextStyles={render:function render(){return react.createElement(react.Fragment,null,react.createElement(components.Cu,{variant:"h1",underline:!0,strikethrough:!0,italic:!0,bold:!0},"Extra large title"),react.createElement(components.Cu,{variant:"h2",underline:!0,strikethrough:!0,italic:!0,bold:!0},"Large title"),react.createElement(components.Cu,{variant:"h3",underline:!0,strikethrough:!0,italic:!0,bold:!0},"Medium title"),react.createElement(components.Cu,{variant:"h4",underline:!0,strikethrough:!0,italic:!0,bold:!0},"Small title"),react.createElement(components.Cu,{variant:"subtitle-large",underline:!0,strikethrough:!0,italic:!0,bold:!0},"Subtitle 1"),react.createElement(components.Cu,{variant:"subtitle-small",underline:!0,strikethrough:!0,italic:!0,bold:!0},"Subtitle 2"),react.createElement(components.Cu,{variant:"body",underline:!0,strikethrough:!0,italic:!0,bold:!0},"Body text"),react.createElement(components.Cu,{variant:"label",underline:!0,strikethrough:!0,italic:!0,bold:!0},"Label"),react.createElement(components.Cu,{variant:"caption",underline:!0,strikethrough:!0,italic:!0,bold:!0},"Caption text"),react.createElement(components.Cu,{variant:"caption-uppercase",underline:!0,strikethrough:!0,italic:!0,bold:!0},"Caption uppercase"),react.createElement(components.Cu,{variant:"label-uppercase",underline:!0,strikethrough:!0,italic:!0,bold:!0},"Label uppercase"),react.createElement(components.Cu,{variant:"code-large",underline:!0,strikethrough:!0,italic:!0,bold:!0},"Code large"),react.createElement(components.Cu,{variant:"code-small",underline:!0,strikethrough:!0,italic:!0,bold:!0},"Code small"),react.createElement(components.Cu,{variant:"code-extra-small",underline:!0,strikethrough:!0,italic:!0,bold:!0},"Code extra small"))},name:"All prop text styles"},MinAndMaxContent={render:function render(){return react.createElement(react.Fragment,null,react.createElement(components.Cu,null,"A"),react.createElement(components.Cu,null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam egestas eget lorem sed luctus. Aenean vitae lorem leo. Pellentesque fringilla semper posuere. Nullam eget sem felis. Fusce quis laoreet arcu. Nulla commodo fringilla magna eget vehicula. Morbi ac nisl tellus. Ut mollis, nunc blandit aliquam dignissim, neque neque rhoncus nisi, at maximus ligula est vitae felis. Nunc at eros posuere, finibus metus sit amet, cursus mi. Nunc euismod ac turpis sit amet luctus. Pellentesque dictum tempor congue. Vivamus consectetur orci eget ante molestie, eget luctus enim tempus. Nam iaculis odio et orci consequat, et volutpat dolor finibus. Proin et porttitor diam. Ut quis est vel diam tincidunt congue nec at ipsum."))},name:"Min and max content"},InAnAgGrid={render:function render(){return react.createElement(AGGrid,null)},name:"In an AG Grid"},Playground={render:function render(args){return react.createElement(components.Cu,{applyVerticalMargins:args.applyVerticalMargins,variant:args.variant,bold:args.bold,italic:args.italic,strikethrough:args.strikethrough,underline:args.underline},"Typography to test")},args:{applyVerticalMargins:!1,bold:!1,italic:!1,strikethrough:!1,underline:!1,variant:"body"},argTypes:{variant:{options:["body","caption","h1","h2","h3","h4","label","subtitle-large","subtitle-small","label-uppercase","caption-uppercase","code-large","code-small","code-extra-small"],control:{type:"select"}}},name:"Playground"};const __namedExportsOrder=["Default","Variants","ComponentOverride","VerticalMargins","Truncation","Bold","Italic","Strikethrough","Underline","AllPropTextStyles","MinAndMaxContent","InAnAgGrid","Playground"];Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:'{\n  render: () => <IcTypography>I am typography</IcTypography>,\n  name: "Default"\n}',...Default.parameters?.docs?.source}}},Variants.parameters={...Variants.parameters,docs:{...Variants.parameters?.docs,source:{originalSource:'{\n  render: () => <>\n      <IcTypography variant="h1">Extra large title</IcTypography>\n      <IcTypography variant="h2">Large title</IcTypography>\n      <IcTypography variant="h3">Medium title</IcTypography>\n      <IcTypography variant="h4">Small title</IcTypography>\n      <IcTypography variant="subtitle-large">Subtitle 1</IcTypography>\n      <IcTypography variant="subtitle-small">Subtitle 2</IcTypography>\n      <IcTypography variant="body">Body text</IcTypography>\n      <IcTypography variant="label">Label</IcTypography>\n      <IcTypography variant="caption">Caption text</IcTypography>\n      <IcTypography variant="caption-uppercase">Caption uppercase</IcTypography>\n      <IcTypography variant="label-uppercase">Label uppercase</IcTypography>\n      <IcTypography variant="code-large">Code large</IcTypography>\n      <IcTypography variant="code-small">Code small</IcTypography>\n      <IcTypography variant="code-extra-small">Code extra small</IcTypography>\n    </>,\n  name: "Variants"\n}',...Variants.parameters?.docs?.source}}},ComponentOverride.parameters={...ComponentOverride.parameters,docs:{...ComponentOverride.parameters?.docs,source:{originalSource:'{\n  render: () => <IcTypography variant="h1">\n      <h3>H3 rendered as H1</h3>\n    </IcTypography>,\n  name: "Component override"\n}',...ComponentOverride.parameters?.docs?.source}}},VerticalMargins.parameters={...VerticalMargins.parameters,docs:{...VerticalMargins.parameters?.docs,source:{originalSource:'{\n  render: () => <>\n      <IcTypography applyVerticalMargins variant="h1">\n        Extra large title\n      </IcTypography>\n      <IcTypography applyVerticalMargins variant="h2">\n        Large title\n      </IcTypography>\n      <IcTypography applyVerticalMargins variant="h3">\n        Medium title\n      </IcTypography>\n      <IcTypography applyVerticalMargins variant="h4">\n        Small title\n      </IcTypography>\n      <IcTypography applyVerticalMargins variant="subtitle-large">\n        Subtitle 1\n      </IcTypography>\n      <IcTypography applyVerticalMargins variant="subtitle-small">\n        Subtitle 2\n      </IcTypography>\n      <IcTypography applyVerticalMargins variant="body">\n        Body text\n      </IcTypography>\n      <IcTypography applyVerticalMargins variant="caption">\n        Caption text\n      </IcTypography>\n      <IcTypography applyVerticalMargins variant="caption-uppercase">\n        Caption uppercase\n      </IcTypography>\n      <IcTypography applyVerticalMargins variant="code-large">\n        Code large\n      </IcTypography>\n      <IcTypography applyVerticalMargins variant="code-small">\n        Code small\n      </IcTypography>\n      <IcTypography applyVerticalMargins variant="code-extra-small">\n        Code extra small\n      </IcTypography>\n    </>,\n  name: "Vertical margins"\n}',...VerticalMargins.parameters?.docs?.source}}},Truncation.parameters={...Truncation.parameters,docs:{...Truncation.parameters?.docs,source:{originalSource:'{\n  render: () => <>\n      <IcTypography max-lines="3" variant="body">\n        Body of text that is truncated to three lines. Click the \'See more\' link\n        to expand the text, then click \'See less\' to truncate the text once\n        more!\n        <br />\n        Dripper caramelization java saucer grounds galão, mocha, and robusta\n        kopi-luwak, percolator, instant, qui saucer latte in brewed café au\n        lait. Con panna, cup, cream, body americano affogato cup espresso, rich\n        milk seasonal saucer grinder spoon that cultivar strong redeye\n        frappuccino barista extraction redeye mazagran. Grounds, french press\n        dripper organic and foam id saucer, crema, black rich dark, grounds\n        breve coffee steamed caramelization percolator.\n      </IcTypography>\n    </>,\n  name: "Truncation"\n}',...Truncation.parameters?.docs?.source}}},Bold.parameters={...Bold.parameters,docs:{...Bold.parameters?.docs,source:{originalSource:'{\n  render: () => <>\n      <IcTypography variant="h1" bold>\n        Extra large title\n      </IcTypography>\n      <IcTypography variant="h2" bold>\n        Large title\n      </IcTypography>\n      <IcTypography variant="h3" bold>\n        Medium title\n      </IcTypography>\n      <IcTypography variant="h4" bold>\n        Small title\n      </IcTypography>\n      <IcTypography variant="subtitle-large" bold>\n        Subtitle 1\n      </IcTypography>\n      <IcTypography variant="subtitle-small" bold>\n        Subtitle 2\n      </IcTypography>\n      <IcTypography variant="body" bold>\n        Body text\n      </IcTypography>\n      <IcTypography variant="label" bold>\n        Label\n      </IcTypography>\n      <IcTypography variant="caption" bold>\n        Caption text\n      </IcTypography>\n      <IcTypography variant="caption-uppercase" bold>\n        Caption uppercase\n      </IcTypography>\n      <IcTypography variant="label-uppercase" bold>\n        Label uppercase\n      </IcTypography>\n      <IcTypography variant="code-large" bold>\n        Code large\n      </IcTypography>\n      <IcTypography variant="code-small" bold>\n        Code small\n      </IcTypography>\n      <IcTypography variant="code-extra-small" bold>\n        Code extra small\n      </IcTypography>\n    </>,\n  name: "Bold"\n}',...Bold.parameters?.docs?.source}}},Italic.parameters={...Italic.parameters,docs:{...Italic.parameters?.docs,source:{originalSource:'{\n  render: () => <>\n      <IcTypography variant="h1" italic>\n        Extra large title\n      </IcTypography>\n      <IcTypography variant="h2" italic>\n        Large title\n      </IcTypography>\n      <IcTypography variant="h3" italic>\n        Medium title\n      </IcTypography>\n      <IcTypography variant="h4" italic>\n        Small title\n      </IcTypography>\n      <IcTypography variant="subtitle-large" italic>\n        Subtitle 1\n      </IcTypography>\n      <IcTypography variant="subtitle-small" italic>\n        Subtitle 2\n      </IcTypography>\n      <IcTypography variant="body" italic>\n        Body text\n      </IcTypography>\n      <IcTypography variant="label" italic>\n        Label\n      </IcTypography>\n      <IcTypography variant="caption" italic>\n        Caption text\n      </IcTypography>\n      <IcTypography variant="caption-uppercase" italic>\n        Caption uppercase\n      </IcTypography>\n      <IcTypography variant="label-uppercase" italic>\n        Label uppercase\n      </IcTypography>\n      <IcTypography variant="code-large" italic>\n        Code large\n      </IcTypography>\n      <IcTypography variant="code-small" italic>\n        Code small\n      </IcTypography>\n      <IcTypography variant="code-extra-small" italic>\n        Code extra small\n      </IcTypography>\n    </>,\n  name: "Italic"\n}',...Italic.parameters?.docs?.source}}},Strikethrough.parameters={...Strikethrough.parameters,docs:{...Strikethrough.parameters?.docs,source:{originalSource:'{\n  render: () => <>\n      <IcTypography variant="h1" strikethrough>\n        Extra large title\n      </IcTypography>\n      <IcTypography variant="h2" strikethrough>\n        Large title\n      </IcTypography>\n      <IcTypography variant="h3" strikethrough>\n        Medium title\n      </IcTypography>\n      <IcTypography variant="h4" strikethrough>\n        Small title\n      </IcTypography>\n      <IcTypography variant="subtitle-large" strikethrough>\n        Subtitle 1\n      </IcTypography>\n      <IcTypography variant="subtitle-small" strikethrough>\n        Subtitle 2\n      </IcTypography>\n      <IcTypography variant="body" strikethrough>\n        Body text\n      </IcTypography>\n      <IcTypography variant="label" strikethrough>\n        Label\n      </IcTypography>\n      <IcTypography variant="caption" strikethrough>\n        Caption text\n      </IcTypography>\n      <IcTypography variant="caption-uppercase" strikethrough>\n        Caption uppercase\n      </IcTypography>\n      <IcTypography variant="label-uppercase" strikethrough>\n        Label uppercase\n      </IcTypography>\n      <IcTypography variant="code-large" strikethrough>\n        Code large\n      </IcTypography>\n      <IcTypography variant="code-small" strikethrough>\n        Code small\n      </IcTypography>\n      <IcTypography variant="code-extra-small" strikethrough>\n        Code extra small\n      </IcTypography>\n    </>,\n  name: "Strikethrough"\n}',...Strikethrough.parameters?.docs?.source}}},Underline.parameters={...Underline.parameters,docs:{...Underline.parameters?.docs,source:{originalSource:'{\n  render: () => <>\n      <IcTypography variant="h1" underline>\n        Extra large title\n      </IcTypography>\n      <IcTypography variant="h2" underline>\n        Large title\n      </IcTypography>\n      <IcTypography variant="h3" underline>\n        Medium title\n      </IcTypography>\n      <IcTypography variant="h4" underline>\n        Small title\n      </IcTypography>\n      <IcTypography variant="subtitle-large" underline>\n        Subtitle 1\n      </IcTypography>\n      <IcTypography variant="subtitle-small" underline>\n        Subtitle 2\n      </IcTypography>\n      <IcTypography variant="body" underline>\n        Body text\n      </IcTypography>\n      <IcTypography variant="label" underline>\n        Label\n      </IcTypography>\n      <IcTypography variant="caption" underline>\n        Caption text\n      </IcTypography>\n      <IcTypography variant="caption-uppercase" underline>\n        Caption uppercase\n      </IcTypography>\n      <IcTypography variant="label-uppercase" underline>\n        Label uppercase\n      </IcTypography>\n      <IcTypography variant="code-large" underline>\n        Code large\n      </IcTypography>\n      <IcTypography variant="code-small" underline>\n        Code small\n      </IcTypography>\n      <IcTypography variant="code-extra-small" underline>\n        Code extra small\n      </IcTypography>\n    </>,\n  name: "Underline"\n}',...Underline.parameters?.docs?.source}}},AllPropTextStyles.parameters={...AllPropTextStyles.parameters,docs:{...AllPropTextStyles.parameters?.docs,source:{originalSource:'{\n  render: () => <>\n      <IcTypography variant="h1" underline strikethrough italic bold>\n        Extra large title\n      </IcTypography>\n      <IcTypography variant="h2" underline strikethrough italic bold>\n        Large title\n      </IcTypography>\n      <IcTypography variant="h3" underline strikethrough italic bold>\n        Medium title\n      </IcTypography>\n      <IcTypography variant="h4" underline strikethrough italic bold>\n        Small title\n      </IcTypography>\n      <IcTypography variant="subtitle-large" underline strikethrough italic bold>\n        Subtitle 1\n      </IcTypography>\n      <IcTypography variant="subtitle-small" underline strikethrough italic bold>\n        Subtitle 2\n      </IcTypography>\n      <IcTypography variant="body" underline strikethrough italic bold>\n        Body text\n      </IcTypography>\n      <IcTypography variant="label" underline strikethrough italic bold>\n        Label\n      </IcTypography>\n      <IcTypography variant="caption" underline strikethrough italic bold>\n        Caption text\n      </IcTypography>\n      <IcTypography variant="caption-uppercase" underline strikethrough italic bold>\n        Caption uppercase\n      </IcTypography>\n      <IcTypography variant="label-uppercase" underline strikethrough italic bold>\n        Label uppercase\n      </IcTypography>\n      <IcTypography variant="code-large" underline strikethrough italic bold>\n        Code large\n      </IcTypography>\n      <IcTypography variant="code-small" underline strikethrough italic bold>\n        Code small\n      </IcTypography>\n      <IcTypography variant="code-extra-small" underline strikethrough italic bold>\n        Code extra small\n      </IcTypography>\n    </>,\n  name: "All prop text styles"\n}',...AllPropTextStyles.parameters?.docs?.source}}},MinAndMaxContent.parameters={...MinAndMaxContent.parameters,docs:{...MinAndMaxContent.parameters?.docs,source:{originalSource:'{\n  render: () => <>\n      <IcTypography>A</IcTypography>\n      <IcTypography>\n        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam egestas\n        eget lorem sed luctus. Aenean vitae lorem leo. Pellentesque fringilla\n        semper posuere. Nullam eget sem felis. Fusce quis laoreet arcu. Nulla\n        commodo fringilla magna eget vehicula. Morbi ac nisl tellus. Ut mollis,\n        nunc blandit aliquam dignissim, neque neque rhoncus nisi, at maximus\n        ligula est vitae felis. Nunc at eros posuere, finibus metus sit amet,\n        cursus mi. Nunc euismod ac turpis sit amet luctus. Pellentesque dictum\n        tempor congue. Vivamus consectetur orci eget ante molestie, eget luctus\n        enim tempus. Nam iaculis odio et orci consequat, et volutpat dolor\n        finibus. Proin et porttitor diam. Ut quis est vel diam tincidunt congue\n        nec at ipsum.\n      </IcTypography>\n    </>,\n  name: "Min and max content"\n}',...MinAndMaxContent.parameters?.docs?.source}}},InAnAgGrid.parameters={...InAnAgGrid.parameters,docs:{...InAnAgGrid.parameters?.docs,source:{originalSource:'{\n  render: () => <AGGrid />,\n  name: "In an AG Grid"\n}',...InAnAgGrid.parameters?.docs?.source}}},Playground.parameters={...Playground.parameters,docs:{...Playground.parameters?.docs,source:{originalSource:'{\n  render: args => <IcTypography applyVerticalMargins={args.applyVerticalMargins} variant={args.variant} bold={args.bold} italic={args.italic} strikethrough={args.strikethrough} underline={args.underline}>\n      Typography to test\n    </IcTypography>,\n  args: defaultArgs,\n  argTypes: {\n    variant: {\n      options: ["body", "caption", "h1", "h2", "h3", "h4", "label", "subtitle-large", "subtitle-small", "label-uppercase", "caption-uppercase", "code-large", "code-small", "code-extra-small"],\n      control: {\n        type: "select"\n      }\n    }\n  },\n  name: "Playground"\n}',...Playground.parameters?.docs?.source}}}}}]);