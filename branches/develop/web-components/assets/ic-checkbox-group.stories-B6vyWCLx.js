import{a as e,i as t}from"./preload-helper-CT_b8DTk.js";import{n,t as r}from"./lit-html-CMAkC4Hj.js";import{n as i,t as a}from"./taggedTemplateLiteral-2dP4OITE.js";var o=e({AriaLiveBehaviour:()=>O,ConditionalDynamic:()=>S,ConditionalStatic:()=>C,Default:()=>g,Disabled:()=>v,Form:()=>k,HelperText:()=>T,HiddenCheckboxLabel:()=>x,HiddenGroupLabel:()=>b,Indeterminate:()=>A,IndeterminateWithChildren:()=>j,Internationalisation:()=>P,Playground:()=>I,RTL:()=>N,Required:()=>_,Sizes:()=>y,SlottedGroupLabel:()=>E,SlottedLabel:()=>w,TextFieldValueChange:()=>M,Validation:()=>D,__namedExportsOrder:()=>L,default:()=>h}),s,c,l,u,d,f,p,m,h,g,_,v,y,b,x,S,C,w,T,E,D,O,k,A,j,M,N,P,F,I,L,R=t((()=>{i(),n(),{useArgs:p}=__STORYBOOK_MODULE_PREVIEW_API__,m={additionalFieldDisplay:`dynamic`,additionalFieldSlot:`additional-field`,checked:!1,checkboxDisabled:!1,checkboxSize:`medium`,disabled:!1,dynamicText:`Dynamic text`,groupLabel:`Checkbox group label`,helperText:`Helper text`,hideLabel:!1,hideGroupLabel:!1,indeterminate:!1,label:`Checkbox label`,name:`checkbox-group`,nativeIndeterminateBehaviour:!1,required:!1,size:`medium`,validationAriaLive:`polite`,validationStatus:`no status`,validationText:``,value:`checkbox-value`,theme:`inherit`},h={title:`Web Components/Checkbox`,component:`Checkbox`},g={render:()=>r`
    <ic-checkbox-group label="This is a label" name="group1">
      <ic-checkbox
        value="valueName1"
        label="Unselected / Default"
      ></ic-checkbox>
      <ic-checkbox
        value="valueName2"
        label="Selected / Default"
        checked
      ></ic-checkbox>
      <ic-checkbox
        value="valueName3"
        label="Unselected / Disabled"
        disabled
      ></ic-checkbox>
    </ic-checkbox-group>
  `,name:`Default`},_={render:()=>r`
    <ic-checkbox-group label="This is a label" required name="group1">
      <ic-checkbox
        value="valueName1"
        label="Unselected / Default"
      ></ic-checkbox>
      <ic-checkbox
        value="valueName2"
        label="Selected / Default"
        checked
      ></ic-checkbox>
      <ic-checkbox
        value="valueName3"
        label="Unselected / Disabled"
        Disabled
      ></ic-checkbox>
    </ic-checkbox-group>
  `,name:`Required`},v={render:()=>r`
    <ic-checkbox-group label="This is a label" name="group1" disabled>
      <ic-checkbox
        value="valueName1"
        label="Unselected / Disabled 1"
      ></ic-checkbox>
      <ic-checkbox
        value="valueName2"
        label="Unselected / Disabled 2"
      ></ic-checkbox>
      <ic-checkbox
        value="valueName3"
        label="Unselected / Disabled 3"
      ></ic-checkbox>
      <ic-checkbox
        value="valueName4"
        label="Selected / Disabled"
        checked
      ></ic-checkbox>
    </ic-checkbox-group>
  `,name:`Disabled`},y={render:()=>r`
    <ic-checkbox-group
      size="large"
      label="These are checkboxes with the 'size' attribute set on them individually"
      name="group1"
    >
      <ic-checkbox
        size="small"
        value="valueName1"
        label="Unselected / Default"
      ></ic-checkbox>
      <ic-checkbox
        size="medium"
        value="valueName2"
        label="Selected / Default"
        checked
      ></ic-checkbox>
      <ic-checkbox
        size="large"
        value="valueName3"
        label="Unselected / Disabled"
        disabled
      ></ic-checkbox>
    </ic-checkbox-group>
    <ic-checkbox-group
      size="small"
      label="This is a checkbox group with small checkboxes"
      name="group1"
    >
      <ic-checkbox
        value="valueName1"
        label="Unselected / Default"
      ></ic-checkbox>
      <ic-checkbox
        value="valueName2"
        label="Selected / Default"
        checked
      ></ic-checkbox>
      <ic-checkbox
        value="valueName3"
        label="Unselected / Disabled"
        disabled
      ></ic-checkbox>
    </ic-checkbox-group>
    <ic-checkbox-group
      size="medium"
      label="This is a checkbox group with default-sized checkboxes"
      name="group1"
    >
      <ic-checkbox
        value="valueName1"
        label="Unselected / Default"
      ></ic-checkbox>
      <ic-checkbox
        value="valueName2"
        label="Selected / Default"
        checked
      ></ic-checkbox>
      <ic-checkbox
        value="valueName3"
        label="Unselected / Disabled"
        disabled
      ></ic-checkbox>
    </ic-checkbox-group>
    <ic-checkbox-group
      size="large"
      label="This is a checkbox group with large checkboxes"
      name="group1"
    >
      <ic-checkbox
        value="valueName1"
        label="Unselected / Default"
      ></ic-checkbox>
      <ic-checkbox
        value="valueName2"
        label="Selected / Default"
        checked
      ></ic-checkbox>
      <ic-checkbox
        value="valueName3"
        label="Unselected / Disabled"
        disabled
      ></ic-checkbox>
    </ic-checkbox-group>
  `,name:`Sizes`},b={render:()=>r`
    <ic-checkbox-group label="This is a label" hide-label name="group1">
      <ic-checkbox
        value="valueName1"
        label="Unselected / Default"
      ></ic-checkbox>
      <ic-checkbox
        value="valueName2"
        label="Selected / Default"
        checked
      ></ic-checkbox>
      <ic-checkbox
        value="valueName3"
        label="Unselected / Disabled"
        Disabled
      ></ic-checkbox>
    </ic-checkbox-group>
  `,name:`Hidden group label`},x={render:()=>r`
    <ic-checkbox-group label="This is a label" name="group1">
      <ic-checkbox
        value="valueName1"
        label="Unselected / Default"
        hide-label
      ></ic-checkbox>
      <ic-checkbox
        value="valueName2"
        label="Selected / Default"
        checked
        hide-label
      ></ic-checkbox>
      <ic-checkbox
        value="valueName3"
        label="Unselected / Disabled"
        Disabled
        hide-label
      ></ic-checkbox>
    </ic-checkbox-group>
  `,name:`Hidden checkbox label`},S={render:()=>r(s||=a([`
    <script>
      function handleIcChange(ev) {
        console.log(
          ev.detail.selectedOption.label,
          ev.detail.selectedOption.checked
        );
      }
      document
        .querySelector("ic-checkbox-group")
        .addEventListener("icChange", handleIcChange);
    <\/script>
    <ic-checkbox-group label="This is a label" name="group1">
      <ic-checkbox
        additional-field-display="dynamic"
        value="valueName1"
        label="option1"
      >
        <ic-text-field
          slot="additional-field"
          placeholder="Placeholder"
          label="What's your favourite type of coffee?"
        ></ic-text-field>
      </ic-checkbox>
      <ic-checkbox
        additional-field-display="dynamic"
        value="valueName2"
        label="option2 - error example"
      >
        <ic-text-field
          validation-status="error"
          validation-text="now it has really gone to (coffee) pot"
          slot="additional-field"
          placeholder="Placeholder"
          label="What's your favourite type of coffee?"
        >
        </ic-text-field>
      </ic-checkbox>
      <ic-checkbox
        additional-field-display="dynamic"
        value="valueName3"
        label="option3"
      >
        <ic-text-field
          slot="additional-field"
          placeholder="Placeholder"
          label="What's your favourite type of coffee?"
        ></ic-text-field>
      </ic-checkbox>
    </ic-checkbox-group>
  `])),name:`Conditional dynamic`},C={render:()=>r`
    <ic-checkbox-group label="This is a label" name="group1">
      <ic-checkbox value="valueName1" label="option1">
        <ic-text-field
          slot="additional-field"
          label="What's your favourite type of coffee?"
        ></ic-text-field>
      </ic-checkbox>
      <ic-checkbox value="valueName2" label="option2"> </ic-checkbox>
    </ic-checkbox-group>
  `,name:`Conditional static`},w={render:()=>r`
    <ic-checkbox-group label="Pick your coffee" name="group1">
      <ic-checkbox value="valueName1" label="Americano"></ic-checkbox>
      <ic-checkbox value="valueName2" checked>
        <span slot="label">
          Coffee <ic-status-tag label="hot" status="warning"></ic-status-tag>
        </span>
      </ic-checkbox>
      <ic-checkbox value="valueName3" checked>
        <span slot="label">
          <b>Slot Coffee</b>
        </span>
      </ic-checkbox>
      <ic-checkbox value="valueName4" disabled>
        <span slot="label"> <b>OUT OF STOCK</b> Big Coffee </span>
      </ic-checkbox>
    </ic-checkbox-group>
  `,name:`Slotted label`},T={render:()=>r`
    <ic-checkbox-group
      label="Coffee extras"
      name="group1"
      helper-text="Helper text provided by prop"
    >
      <ic-checkbox value="valueName1" label="Sugar"></ic-checkbox>
      <ic-checkbox value="valueName2" label="Milk" checked></ic-checkbox>
      <ic-checkbox value="valueName3" label="salt" Disabled></ic-checkbox>
    </ic-checkbox-group>
    <br />
    <ic-checkbox-group label="More coffee extras" name="group2">
      <ic-typography variant="caption" slot="helper-text">
        <span>
          Slotted helper text with a
          <ic-link href="#">helpful link to guidance</ic-link>
        </span>
      </ic-typography>
      <ic-checkbox value="valueName1" label="Shortbread"></ic-checkbox>
      <ic-checkbox value="valueName2" label="Scone" checked></ic-checkbox>
      <ic-checkbox
        value="valueName3"
        label="Ham Sandwich"
        Disabled
      ></ic-checkbox>
    </ic-checkbox-group>
  `,name:`Helper text`},E={render:()=>r`
    <ic-checkbox-group
      label="Coffee extras"
      name="group1"
      helper-text="Helper text provided by prop"
    >
      <ic-checkbox value="valueName1" label="Sugar"></ic-checkbox>
      <ic-checkbox value="valueName2" label="Milk" checked></ic-checkbox>
      <ic-checkbox value="valueName3" label="salt" Disabled></ic-checkbox>
    </ic-checkbox-group>
    <br />
    <ic-checkbox-group label="More coffee extras" name="group2">
      <ic-typography variant="caption" slot="label">
        <span>
          Slotted label with a
          <ic-link href="#">helpful link to guidance</ic-link> and language tag
          example <span lang="fr">exemple de texte en français</span>
        </span>
      </ic-typography>
      <ic-checkbox value="valueName1" label="Shortbread"></ic-checkbox>
      <ic-checkbox value="valueName2" label="Scone" checked></ic-checkbox>
      <ic-checkbox
        value="valueName3"
        label="Ham Sandwich"
        Disabled
      ></ic-checkbox>
    </ic-checkbox-group>
  `,name:`Slotted group label`},D={render:()=>r`
    <ic-checkbox-group
      label="This is a label"
      name="group1"
      validation-status="error"
      validation-text="Error message"
    >
      <ic-checkbox
        value="valueName1"
        label="Unselected / Default"
      ></ic-checkbox>
      <ic-checkbox
        value="valueName2"
        label="Selected / Default"
        checked
      ></ic-checkbox>
      <ic-checkbox
        value="valueName3"
        label="Unselected / Disabled"
        Disabled
      ></ic-checkbox>
    </ic-checkbox-group>
  `,name:`Validation`},O={render:()=>r(c||=a([`<ic-checkbox-group
        id="field-1"
        label="This is a label"
        name="1"
        helper-text="Error already set on page load and aria-live overridden as 'assertive'"
        validation-status="error"
        validation-text="First error message"
        validation-aria-live="assertive"
      >
        <ic-checkbox
          value="valueName1"
          label="Unselected / Default"
        ></ic-checkbox>
        <ic-checkbox
          value="valueName2"
          label="Selected / Default"
          selected
        ></ic-checkbox>
        <ic-checkbox
          value="valueName3"
          label="Unselected / Disabled"
          disabled
        ></ic-checkbox>
      </ic-checkbox-group>
      <br />
      <ic-checkbox-group
        id="field-2"
        label="This is a label"
        name="2"
        helper-text="Error set after page load and aria-live overridden as 'assertive'"
        validation-aria-live="assertive"
      >
        <ic-checkbox
          value="valueName1"
          label="Unselected / Default"
        ></ic-checkbox>
        <ic-checkbox
          value="valueName2"
          label="Selected / Default"
          selected
        ></ic-checkbox>
        <ic-checkbox
          value="valueName3"
          label="Unselected / Disabled"
          disabled
        ></ic-checkbox>
      </ic-checkbox-group>
      <br />
      <ic-button id="toggle-btn-1">Toggle errors</ic-button>
      <script>
        let showErrors1 = false;
        const btn1 = document.getElementById("toggle-btn-1");
        const field1 = document.getElementById("field-1");
        const field2 = document.getElementById("field-2");

        btn1.addEventListener("click", () => {
          showErrors1 = !showErrors1;

          field1.setAttribute("validation-status", showErrors1 ? "" : "error");
          field1.setAttribute(
            "validation-text",
            showErrors1 ? "" : "First error message"
          );

          field2.setAttribute("validation-status", showErrors1 ? "error" : "");
          field2.setAttribute(
            "validation-text",
            showErrors1 ? "Second error message" : ""
          );
        });
      <\/script>
      <br />
      <br />
      <br />
      <br />
      <ic-checkbox-group
        id="field-3"
        label="This is a label"
        name="3"
        helper-text="Default aria-live behaviour (i.e. 'polite')"
      >
        <ic-checkbox
          value="valueName1"
          label="Unselected / Default"
        ></ic-checkbox>
        <ic-checkbox
          value="valueName2"
          label="Selected / Default"
          selected
        ></ic-checkbox>
        <ic-checkbox
          value="valueName3"
          label="Unselected / Disabled"
          disabled
        ></ic-checkbox>
      </ic-checkbox-group>
      <br />
      <ic-checkbox-group
        id="field-4"
        label="This is a label"
        name="4"
        helper-text="Default aria-live behaviour (i.e. 'polite')"
      >
        <ic-checkbox
          value="valueName1"
          label="Unselected / Default"
        ></ic-checkbox>
        <ic-checkbox
          value="valueName2"
          label="Selected / Default"
          selected
        ></ic-checkbox>
        <ic-checkbox
          value="valueName3"
          label="Unselected / Disabled"
          disabled
        ></ic-checkbox>
      </ic-checkbox-group>
      <br />
      <ic-button id="toggle-btn-2">Toggle errors</ic-button>
      <br />
      <br />
      <br />
      <br />
      <br />
      <script>
        let showErrors2 = false;
        const btn2 = document.getElementById("toggle-btn-2");
        const field3 = document.getElementById("field-3");
        const field4 = document.getElementById("field-4");

        btn2.addEventListener("click", () => {
          showErrors2 = !showErrors2;

          field3.setAttribute("validation-status", showErrors2 ? "error" : "");
          field3.setAttribute(
            "validation-text",
            showErrors2 ? "Third error message" : ""
          );

          field4.setAttribute("validation-status", showErrors2 ? "error" : "");
          field4.setAttribute(
            "validation-text",
            showErrors2 ? "Fourth error message" : ""
          );
        });
      <\/script>`])),name:`Aria-live behaviour`},k={render:()=>r(l||=a([`
    <form>
      <ic-checkbox-group label="This is a label" name="group1">
        <ic-checkbox
          name="checkbox1"
          value="valueName1"
          label="Unselected / Default"
        ></ic-checkbox>
        <ic-checkbox
          name="checkbox2"
          value="valueName2"
          label="Selected / Default"
          checked
        ></ic-checkbox>
        <ic-checkbox
          name="checkbox3"
          value="valueName3"
          label="Unselected / Disabled"
          Disabled
        ></ic-checkbox>
      </ic-checkbox-group>
      <input type="submit" value="Submit" />
      <input type="reset" value="Reset" />
    </form>
    <script>
      document.querySelector("form").addEventListener("submit", (ev) => {
        ev.preventDefault();
        console.log(
          document.querySelector('ic-checkbox[name="checkbox1"]').checked
        );
        console.log(
          document.querySelector('ic-checkbox[name="checkbox2"]').checked
        );
        console.log(
          document.querySelector('ic-checkbox[name="checkbox3"]').checked
        );
      });
    <\/script>
  `])),name:`Form`},A={render:()=>r(u||=a([`
    <script>
      var indeterminate = true;
      var nativeIndeterminate = true;
      var indeterminateTextEl = document.querySelector("#indeterminate-text");
      indeterminateTextEl.innerHTML = indeterminate;
      var checkedTextEl = document.querySelector("#checked-text");
      checkedTextEl.innerHTML = true;
      var nativeIndeterminateTextEl = document.querySelector(
        "#native-indeterminate-text"
      );
      nativeIndeterminateTextEl.innerHTML = nativeIndeterminate;
      var nativeCheckedTextEl = document.querySelector("#native-checked-text");
      nativeCheckedTextEl.innerHTML = true;
      function toggleIndeterminate() {
        indeterminate = !indeterminate;
        document.querySelector("#indeterminate-checkbox").indeterminate =
          indeterminate;
        indeterminateTextEl.innerHTML = indeterminate;
      }
      function toggleNativeIndeterminate() {
        nativeIndeterminate = !nativeIndeterminate;
        document.querySelector("#native-indeterminate-checkbox").indeterminate =
          nativeIndeterminate;
        nativeIndeterminateTextEl.innerHTML = nativeIndeterminate;
      }
      function icCheckHandler(ev) {
        document.querySelector("#checked-text").innerHTML = ev.target.checked;
      }
      function icCheckHandlerNative(ev) {
        document.querySelector("#native-checked-text").innerHTML =
          ev.target.checked;
      }
      document
        .querySelector("#indeterminate-button")
        .addEventListener("click", toggleIndeterminate);
      document
        .querySelector("#indeterminate-checkbox")
        .addEventListener("icCheck", icCheckHandler);
      document
        .querySelector("#native-indeterminate-button")
        .addEventListener("click", toggleNativeIndeterminate);
      document
        .querySelector("#native-indeterminate-checkbox")
        .addEventListener("icCheck", icCheckHandlerNative);
    <\/script>
    <div style="display:flex;gap:16px;flex-wrap:wrap">
      <div style="border:1px solid gray;padding:8px;">
        <ic-checkbox-group
          label="'native-indeterminate-behavior'=false"
          name="indeterminate"
        >
          <ic-checkbox
            id="indeterminate-checkbox"
            value="indeterminate"
            label="Indeterminate checkbox"
            checked="true"
            indeterminate="true"
          >
          </ic-checkbox>
        </ic-checkbox-group>
        <br />
        <ic-button id="indeterminate-button">Toggle indeterminate</ic-button>
        <br />
        <br />
        <span>Indeterminate: <span id="indeterminate-text"></span></span>
        <br />
        <span>Checked: <span id="checked-text"></span></span>
      </div>
      <div style="border:1px solid gray;padding:8px;">
        <ic-checkbox-group
          label="'native-indeterminate-behavior'=true"
          name="native_indeterminate"
        >
          <ic-checkbox
            id="native-indeterminate-checkbox"
            value="indeterminate"
            label="Indeterminate checkbox"
            checked="true"
            indeterminate="true"
            native-indeterminate-behaviour="true"
          >
          </ic-checkbox>
        </ic-checkbox-group>
        <br />
        <ic-button id="native-indeterminate-button"
          >Toggle indeterminate</ic-button
        >
        <br />
        <br />
        <span>Indeterminate: <span id="native-indeterminate-text"></span></span>
        <br />
        <span>Checked: <span id="native-checked-text"></span></span>
      </div>
    </div>
  `])),name:`Indeterminate`},j={render:()=>r(d||=a([`
    <script>
      var drinksCheckbox = document.querySelector("#drinks-checkbox");
      var teaCheckbox = document.querySelector("#tea-checkbox");
      var coffeeCheckbox = document.querySelector("#coffee-checkbox");
      var juiceCheckbox = document.querySelector("#juice-checkbox");
      var drinksGroup = document.querySelector("#drinks-group");
      drinksCheckbox.addEventListener("icCheck", function (ev) {
        if (ev.target === drinksCheckbox) {
          teaCheckbox.checked = drinksCheckbox.checked;
          coffeeCheckbox.checked = drinksCheckbox.checked;
          juiceCheckbox.checked = drinksCheckbox.checked;
        }
      });
      drinksGroup.addEventListener("icChange", function (ev) {
        if (ev.detail.checkedOptions.length === 3) {
          drinksCheckbox.indeterminate = false;
          drinksCheckbox.checked = true;
        } else if (ev.detail.checkedOptions.length === 0) {
          drinksCheckbox.indeterminate = false;
          drinksCheckbox.checked = false;
        } else {
          drinksCheckbox.indeterminate = true;
          drinksCheckbox.checked = false;
        }
      });
      coffeeCheckbox.checked = true;
      drinksCheckbox.indeterminate = true;
    <\/script>
    <ic-checkbox-group label="Liked things" name="1">
      <ic-checkbox
        id="drinks-checkbox"
        value="drinks"
        label="Drinks"
        indeterminate="false"
        native-indeterminate-behaviour
      >
        <ic-checkbox-group
          id="drinks-group"
          name="2"
          label="Drinks"
          hide-label
          slot="additional-field"
        >
          <ic-checkbox id="tea-checkbox" value="tea" label="Tea"></ic-checkbox>
          <ic-checkbox
            id="coffee-checkbox"
            value="coffee"
            label="Coffee"
          ></ic-checkbox>
          <ic-checkbox
            id="juice-checkbox"
            value="juice"
            label="Juice"
          ></ic-checkbox>
        </ic-checkbox-group>
      </ic-checkbox>
    </ic-checkbox-group>
  `])),name:`Indeterminate with children`},M={render:()=>r(f||=a([`
    <script>
      var textOutputEl = document.querySelector("#value-text");
      function handleIcChange(ev) {
        textOutputEl.innerHTML = ev.target.value;
      }
      document
        .querySelector("ic-text-field")
        .addEventListener("icChange", handleIcChange);
    <\/script>
    <div>
      <ic-checkbox-group label="This is a label" name="group1">
        <ic-checkbox
          value="valueName1"
          label="Unselected / Default"
          additional-field-display="static"
        >
          <ic-text-field
            slot="additional-field"
            placeholder="Placeholder"
            label="What's your favourite type of coffee?"
          ></ic-text-field>
        </ic-checkbox>
      </ic-checkbox-group>
      <br />
      <span>textfield value: </span>
      <span id="value-text"></span>
      <div></div>
    </div>
  `])),name:`TextField value change`},N={render:()=>r`
    <ic-checkbox-group label="This is a label" name="group1" dir="rtl">
      <ic-checkbox
        value="valueName1"
        label="Indeterminate"
        indeterminate="true"
      ></ic-checkbox>
      <ic-checkbox value="valueName2" label="Selected" checked></ic-checkbox>
      <ic-checkbox value="valueName3" label="Disabled" disabled></ic-checkbox>
      <ic-checkbox
        additional-field-display="dynamic"
        value="valueName4"
        label="Conditional dynamic"
      >
        <ic-text-field
          slot="additional-field"
          placeholder="Placeholder"
          label="What's your favourite type of coffee?"
        ></ic-text-field>
      </ic-checkbox>
    </ic-checkbox-group>
  `,name:`RTL`},P={render:()=>r`
      <p>Each checkbox in this group is set to a different language by being wrapped in a <code>&lt;span lang=""&gt;</code></p>
      <ic-checkbox-group
        label="International Coffee"
      >
        <span lang="fr">
          <ic-checkbox value="valueName1" label="Cafe au lait"></ic-checkbox>
        </span>
        <span lang="it">
          <ic-checkbox value="valueName2" label="Americano" checked></ic-checkbox>
        </span>
        <ic-checkbox value="valueName3" label="Flat White"></ic-checkbox>
      </ic-checkbox-group>
      <p>This whole checkbox group has been wrapped in a <code>&lt;span lang="fr"&gt;</code> and will read in French</p>
      <span lang="fr">
      <ic-checkbox-group
        label="Boissons"
      >
          <ic-checkbox value="valueName1" label="Limonade"></ic-checkbox>
          <ic-checkbox value="valueName2" label="Chocolat Chaud" checked></ic-checkbox>
          <ic-checkbox value="valueName3" label="Jus"></ic-checkbox>
      </ic-checkbox-group>
      </span>
    </>
 `,name:`Internationalisation`},F=`inline-radio`,I={render:e=>{let[{checked:t},n]=p();return r` <ic-checkbox-group
      disabled=${e.disabled}
      label=${e.groupLabel}
      size=${e.size}
      helper-text=${e.helperText}
      hide-label=${e.hideGroupLabel}
      name=${e.name}
      required=${e.required}
      validation-aria-live=${e.validationAriaLive}
      validation-status=${e.validationStatus===`no status`?``:e.validationStatus}
      validation-text=${e.validationText}
      theme=${e.theme}
    >
      <ic-checkbox
        disabled=${e.checkboxDisabled}
        label=${e.label}
        value=${e.value}
        size=${e.checkboxSize}
        hide-label=${e.hideLabel}
        indeterminate=${e.indeterminate}
        checked=${t}
        additional-field-display=${e.additionalFieldDisplay}
        dynamic-text=${e.dynamicText}
        native-indeterminate-behaviour=${e.nativeIndeterminateBehaviour}
      >
        <ic-text-field
          slot=${e.additionalFieldSlot}
          placeholder="Placeholder"
          label="What's your favourite type of coffee?"
        ></ic-text-field>
      </ic-checkbox>
      <ic-checkbox value="valueName2" label="Checkbox 2"></ic-checkbox>
      <ic-checkbox value="valueName3" label="Checkbox 3"></ic-checkbox>
    </ic-checkbox-group>`},args:m,argTypes:{additionalFieldDisplay:{options:[`dynamic`,`static`],control:{type:F}},additionalFieldSlot:{options:[`additional-field`,``],control:{type:`select`}},size:{options:[`medium`,`large`,`small`],control:{type:F}},checkboxSize:{options:[`medium`,`large`,`small`],control:{type:F}},validationAriaLive:{options:[`polite`,`assertive`,`off`],control:{type:F}},validationStatus:{options:[`no status`,`warning`,`error`,`success`],control:{type:`select`}},theme:{options:[`inherit`,`light`,`dark`],control:{type:F}}},name:`Playground`},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: () => html\`
    <ic-checkbox-group label="This is a label" name="group1">
      <ic-checkbox
        value="valueName1"
        label="Unselected / Default"
      ></ic-checkbox>
      <ic-checkbox
        value="valueName2"
        label="Selected / Default"
        checked
      ></ic-checkbox>
      <ic-checkbox
        value="valueName3"
        label="Unselected / Disabled"
        disabled
      ></ic-checkbox>
    </ic-checkbox-group>
  \`,
  name: "Default"
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: () => html\`
    <ic-checkbox-group label="This is a label" required name="group1">
      <ic-checkbox
        value="valueName1"
        label="Unselected / Default"
      ></ic-checkbox>
      <ic-checkbox
        value="valueName2"
        label="Selected / Default"
        checked
      ></ic-checkbox>
      <ic-checkbox
        value="valueName3"
        label="Unselected / Disabled"
        Disabled
      ></ic-checkbox>
    </ic-checkbox-group>
  \`,
  name: "Required"
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: () => html\`
    <ic-checkbox-group label="This is a label" name="group1" disabled>
      <ic-checkbox
        value="valueName1"
        label="Unselected / Disabled 1"
      ></ic-checkbox>
      <ic-checkbox
        value="valueName2"
        label="Unselected / Disabled 2"
      ></ic-checkbox>
      <ic-checkbox
        value="valueName3"
        label="Unselected / Disabled 3"
      ></ic-checkbox>
      <ic-checkbox
        value="valueName4"
        label="Selected / Disabled"
        checked
      ></ic-checkbox>
    </ic-checkbox-group>
  \`,
  name: "Disabled"
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: () => html\`
    <ic-checkbox-group
      size="large"
      label="These are checkboxes with the 'size' attribute set on them individually"
      name="group1"
    >
      <ic-checkbox
        size="small"
        value="valueName1"
        label="Unselected / Default"
      ></ic-checkbox>
      <ic-checkbox
        size="medium"
        value="valueName2"
        label="Selected / Default"
        checked
      ></ic-checkbox>
      <ic-checkbox
        size="large"
        value="valueName3"
        label="Unselected / Disabled"
        disabled
      ></ic-checkbox>
    </ic-checkbox-group>
    <ic-checkbox-group
      size="small"
      label="This is a checkbox group with small checkboxes"
      name="group1"
    >
      <ic-checkbox
        value="valueName1"
        label="Unselected / Default"
      ></ic-checkbox>
      <ic-checkbox
        value="valueName2"
        label="Selected / Default"
        checked
      ></ic-checkbox>
      <ic-checkbox
        value="valueName3"
        label="Unselected / Disabled"
        disabled
      ></ic-checkbox>
    </ic-checkbox-group>
    <ic-checkbox-group
      size="medium"
      label="This is a checkbox group with default-sized checkboxes"
      name="group1"
    >
      <ic-checkbox
        value="valueName1"
        label="Unselected / Default"
      ></ic-checkbox>
      <ic-checkbox
        value="valueName2"
        label="Selected / Default"
        checked
      ></ic-checkbox>
      <ic-checkbox
        value="valueName3"
        label="Unselected / Disabled"
        disabled
      ></ic-checkbox>
    </ic-checkbox-group>
    <ic-checkbox-group
      size="large"
      label="This is a checkbox group with large checkboxes"
      name="group1"
    >
      <ic-checkbox
        value="valueName1"
        label="Unselected / Default"
      ></ic-checkbox>
      <ic-checkbox
        value="valueName2"
        label="Selected / Default"
        checked
      ></ic-checkbox>
      <ic-checkbox
        value="valueName3"
        label="Unselected / Disabled"
        disabled
      ></ic-checkbox>
    </ic-checkbox-group>
  \`,
  name: "Sizes"
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: () => html\`
    <ic-checkbox-group label="This is a label" hide-label name="group1">
      <ic-checkbox
        value="valueName1"
        label="Unselected / Default"
      ></ic-checkbox>
      <ic-checkbox
        value="valueName2"
        label="Selected / Default"
        checked
      ></ic-checkbox>
      <ic-checkbox
        value="valueName3"
        label="Unselected / Disabled"
        Disabled
      ></ic-checkbox>
    </ic-checkbox-group>
  \`,
  name: "Hidden group label"
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: () => html\`
    <ic-checkbox-group label="This is a label" name="group1">
      <ic-checkbox
        value="valueName1"
        label="Unselected / Default"
        hide-label
      ></ic-checkbox>
      <ic-checkbox
        value="valueName2"
        label="Selected / Default"
        checked
        hide-label
      ></ic-checkbox>
      <ic-checkbox
        value="valueName3"
        label="Unselected / Disabled"
        Disabled
        hide-label
      ></ic-checkbox>
    </ic-checkbox-group>
  \`,
  name: "Hidden checkbox label"
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: () => html\`
    <script>
      function handleIcChange(ev) {
        console.log(
          ev.detail.selectedOption.label,
          ev.detail.selectedOption.checked
        );
      }
      document
        .querySelector("ic-checkbox-group")
        .addEventListener("icChange", handleIcChange);
    <\/script>
    <ic-checkbox-group label="This is a label" name="group1">
      <ic-checkbox
        additional-field-display="dynamic"
        value="valueName1"
        label="option1"
      >
        <ic-text-field
          slot="additional-field"
          placeholder="Placeholder"
          label="What's your favourite type of coffee?"
        ></ic-text-field>
      </ic-checkbox>
      <ic-checkbox
        additional-field-display="dynamic"
        value="valueName2"
        label="option2 - error example"
      >
        <ic-text-field
          validation-status="error"
          validation-text="now it has really gone to (coffee) pot"
          slot="additional-field"
          placeholder="Placeholder"
          label="What's your favourite type of coffee?"
        >
        </ic-text-field>
      </ic-checkbox>
      <ic-checkbox
        additional-field-display="dynamic"
        value="valueName3"
        label="option3"
      >
        <ic-text-field
          slot="additional-field"
          placeholder="Placeholder"
          label="What's your favourite type of coffee?"
        ></ic-text-field>
      </ic-checkbox>
    </ic-checkbox-group>
  \`,
  name: "Conditional dynamic"
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  render: () => html\`
    <ic-checkbox-group label="This is a label" name="group1">
      <ic-checkbox value="valueName1" label="option1">
        <ic-text-field
          slot="additional-field"
          label="What's your favourite type of coffee?"
        ></ic-text-field>
      </ic-checkbox>
      <ic-checkbox value="valueName2" label="option2"> </ic-checkbox>
    </ic-checkbox-group>
  \`,
  name: "Conditional static"
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  render: () => html\`
    <ic-checkbox-group label="Pick your coffee" name="group1">
      <ic-checkbox value="valueName1" label="Americano"></ic-checkbox>
      <ic-checkbox value="valueName2" checked>
        <span slot="label">
          Coffee <ic-status-tag label="hot" status="warning"></ic-status-tag>
        </span>
      </ic-checkbox>
      <ic-checkbox value="valueName3" checked>
        <span slot="label">
          <b>Slot Coffee</b>
        </span>
      </ic-checkbox>
      <ic-checkbox value="valueName4" disabled>
        <span slot="label"> <b>OUT OF STOCK</b> Big Coffee </span>
      </ic-checkbox>
    </ic-checkbox-group>
  \`,
  name: "Slotted label"
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  render: () => html\`
    <ic-checkbox-group
      label="Coffee extras"
      name="group1"
      helper-text="Helper text provided by prop"
    >
      <ic-checkbox value="valueName1" label="Sugar"></ic-checkbox>
      <ic-checkbox value="valueName2" label="Milk" checked></ic-checkbox>
      <ic-checkbox value="valueName3" label="salt" Disabled></ic-checkbox>
    </ic-checkbox-group>
    <br />
    <ic-checkbox-group label="More coffee extras" name="group2">
      <ic-typography variant="caption" slot="helper-text">
        <span>
          Slotted helper text with a
          <ic-link href="#">helpful link to guidance</ic-link>
        </span>
      </ic-typography>
      <ic-checkbox value="valueName1" label="Shortbread"></ic-checkbox>
      <ic-checkbox value="valueName2" label="Scone" checked></ic-checkbox>
      <ic-checkbox
        value="valueName3"
        label="Ham Sandwich"
        Disabled
      ></ic-checkbox>
    </ic-checkbox-group>
  \`,
  name: "Helper text"
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  render: () => html\`
    <ic-checkbox-group
      label="Coffee extras"
      name="group1"
      helper-text="Helper text provided by prop"
    >
      <ic-checkbox value="valueName1" label="Sugar"></ic-checkbox>
      <ic-checkbox value="valueName2" label="Milk" checked></ic-checkbox>
      <ic-checkbox value="valueName3" label="salt" Disabled></ic-checkbox>
    </ic-checkbox-group>
    <br />
    <ic-checkbox-group label="More coffee extras" name="group2">
      <ic-typography variant="caption" slot="label">
        <span>
          Slotted label with a
          <ic-link href="#">helpful link to guidance</ic-link> and language tag
          example <span lang="fr">exemple de texte en français</span>
        </span>
      </ic-typography>
      <ic-checkbox value="valueName1" label="Shortbread"></ic-checkbox>
      <ic-checkbox value="valueName2" label="Scone" checked></ic-checkbox>
      <ic-checkbox
        value="valueName3"
        label="Ham Sandwich"
        Disabled
      ></ic-checkbox>
    </ic-checkbox-group>
  \`,
  name: "Slotted group label"
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  render: () => html\`
    <ic-checkbox-group
      label="This is a label"
      name="group1"
      validation-status="error"
      validation-text="Error message"
    >
      <ic-checkbox
        value="valueName1"
        label="Unselected / Default"
      ></ic-checkbox>
      <ic-checkbox
        value="valueName2"
        label="Selected / Default"
        checked
      ></ic-checkbox>
      <ic-checkbox
        value="valueName3"
        label="Unselected / Disabled"
        Disabled
      ></ic-checkbox>
    </ic-checkbox-group>
  \`,
  name: "Validation"
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  render: () => html\`<ic-checkbox-group
        id="field-1"
        label="This is a label"
        name="1"
        helper-text="Error already set on page load and aria-live overridden as 'assertive'"
        validation-status="error"
        validation-text="First error message"
        validation-aria-live="assertive"
      >
        <ic-checkbox
          value="valueName1"
          label="Unselected / Default"
        ></ic-checkbox>
        <ic-checkbox
          value="valueName2"
          label="Selected / Default"
          selected
        ></ic-checkbox>
        <ic-checkbox
          value="valueName3"
          label="Unselected / Disabled"
          disabled
        ></ic-checkbox>
      </ic-checkbox-group>
      <br />
      <ic-checkbox-group
        id="field-2"
        label="This is a label"
        name="2"
        helper-text="Error set after page load and aria-live overridden as 'assertive'"
        validation-aria-live="assertive"
      >
        <ic-checkbox
          value="valueName1"
          label="Unselected / Default"
        ></ic-checkbox>
        <ic-checkbox
          value="valueName2"
          label="Selected / Default"
          selected
        ></ic-checkbox>
        <ic-checkbox
          value="valueName3"
          label="Unselected / Disabled"
          disabled
        ></ic-checkbox>
      </ic-checkbox-group>
      <br />
      <ic-button id="toggle-btn-1">Toggle errors</ic-button>
      <script>
        let showErrors1 = false;
        const btn1 = document.getElementById("toggle-btn-1");
        const field1 = document.getElementById("field-1");
        const field2 = document.getElementById("field-2");

        btn1.addEventListener("click", () => {
          showErrors1 = !showErrors1;

          field1.setAttribute("validation-status", showErrors1 ? "" : "error");
          field1.setAttribute(
            "validation-text",
            showErrors1 ? "" : "First error message"
          );

          field2.setAttribute("validation-status", showErrors1 ? "error" : "");
          field2.setAttribute(
            "validation-text",
            showErrors1 ? "Second error message" : ""
          );
        });
      <\/script>
      <br />
      <br />
      <br />
      <br />
      <ic-checkbox-group
        id="field-3"
        label="This is a label"
        name="3"
        helper-text="Default aria-live behaviour (i.e. 'polite')"
      >
        <ic-checkbox
          value="valueName1"
          label="Unselected / Default"
        ></ic-checkbox>
        <ic-checkbox
          value="valueName2"
          label="Selected / Default"
          selected
        ></ic-checkbox>
        <ic-checkbox
          value="valueName3"
          label="Unselected / Disabled"
          disabled
        ></ic-checkbox>
      </ic-checkbox-group>
      <br />
      <ic-checkbox-group
        id="field-4"
        label="This is a label"
        name="4"
        helper-text="Default aria-live behaviour (i.e. 'polite')"
      >
        <ic-checkbox
          value="valueName1"
          label="Unselected / Default"
        ></ic-checkbox>
        <ic-checkbox
          value="valueName2"
          label="Selected / Default"
          selected
        ></ic-checkbox>
        <ic-checkbox
          value="valueName3"
          label="Unselected / Disabled"
          disabled
        ></ic-checkbox>
      </ic-checkbox-group>
      <br />
      <ic-button id="toggle-btn-2">Toggle errors</ic-button>
      <br />
      <br />
      <br />
      <br />
      <br />
      <script>
        let showErrors2 = false;
        const btn2 = document.getElementById("toggle-btn-2");
        const field3 = document.getElementById("field-3");
        const field4 = document.getElementById("field-4");

        btn2.addEventListener("click", () => {
          showErrors2 = !showErrors2;

          field3.setAttribute("validation-status", showErrors2 ? "error" : "");
          field3.setAttribute(
            "validation-text",
            showErrors2 ? "Third error message" : ""
          );

          field4.setAttribute("validation-status", showErrors2 ? "error" : "");
          field4.setAttribute(
            "validation-text",
            showErrors2 ? "Fourth error message" : ""
          );
        });
      <\/script>\`,
  name: "Aria-live behaviour"
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  render: () => html\`
    <form>
      <ic-checkbox-group label="This is a label" name="group1">
        <ic-checkbox
          name="checkbox1"
          value="valueName1"
          label="Unselected / Default"
        ></ic-checkbox>
        <ic-checkbox
          name="checkbox2"
          value="valueName2"
          label="Selected / Default"
          checked
        ></ic-checkbox>
        <ic-checkbox
          name="checkbox3"
          value="valueName3"
          label="Unselected / Disabled"
          Disabled
        ></ic-checkbox>
      </ic-checkbox-group>
      <input type="submit" value="Submit" />
      <input type="reset" value="Reset" />
    </form>
    <script>
      document.querySelector("form").addEventListener("submit", (ev) => {
        ev.preventDefault();
        console.log(
          document.querySelector('ic-checkbox[name="checkbox1"]').checked
        );
        console.log(
          document.querySelector('ic-checkbox[name="checkbox2"]').checked
        );
        console.log(
          document.querySelector('ic-checkbox[name="checkbox3"]').checked
        );
      });
    <\/script>
  \`,
  name: "Form"
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  render: () => html\`
    <script>
      var indeterminate = true;
      var nativeIndeterminate = true;
      var indeterminateTextEl = document.querySelector("#indeterminate-text");
      indeterminateTextEl.innerHTML = indeterminate;
      var checkedTextEl = document.querySelector("#checked-text");
      checkedTextEl.innerHTML = true;
      var nativeIndeterminateTextEl = document.querySelector(
        "#native-indeterminate-text"
      );
      nativeIndeterminateTextEl.innerHTML = nativeIndeterminate;
      var nativeCheckedTextEl = document.querySelector("#native-checked-text");
      nativeCheckedTextEl.innerHTML = true;
      function toggleIndeterminate() {
        indeterminate = !indeterminate;
        document.querySelector("#indeterminate-checkbox").indeterminate =
          indeterminate;
        indeterminateTextEl.innerHTML = indeterminate;
      }
      function toggleNativeIndeterminate() {
        nativeIndeterminate = !nativeIndeterminate;
        document.querySelector("#native-indeterminate-checkbox").indeterminate =
          nativeIndeterminate;
        nativeIndeterminateTextEl.innerHTML = nativeIndeterminate;
      }
      function icCheckHandler(ev) {
        document.querySelector("#checked-text").innerHTML = ev.target.checked;
      }
      function icCheckHandlerNative(ev) {
        document.querySelector("#native-checked-text").innerHTML =
          ev.target.checked;
      }
      document
        .querySelector("#indeterminate-button")
        .addEventListener("click", toggleIndeterminate);
      document
        .querySelector("#indeterminate-checkbox")
        .addEventListener("icCheck", icCheckHandler);
      document
        .querySelector("#native-indeterminate-button")
        .addEventListener("click", toggleNativeIndeterminate);
      document
        .querySelector("#native-indeterminate-checkbox")
        .addEventListener("icCheck", icCheckHandlerNative);
    <\/script>
    <div style="display:flex;gap:16px;flex-wrap:wrap">
      <div style="border:1px solid gray;padding:8px;">
        <ic-checkbox-group
          label="'native-indeterminate-behavior'=false"
          name="indeterminate"
        >
          <ic-checkbox
            id="indeterminate-checkbox"
            value="indeterminate"
            label="Indeterminate checkbox"
            checked="true"
            indeterminate="true"
          >
          </ic-checkbox>
        </ic-checkbox-group>
        <br />
        <ic-button id="indeterminate-button">Toggle indeterminate</ic-button>
        <br />
        <br />
        <span>Indeterminate: <span id="indeterminate-text"></span></span>
        <br />
        <span>Checked: <span id="checked-text"></span></span>
      </div>
      <div style="border:1px solid gray;padding:8px;">
        <ic-checkbox-group
          label="'native-indeterminate-behavior'=true"
          name="native_indeterminate"
        >
          <ic-checkbox
            id="native-indeterminate-checkbox"
            value="indeterminate"
            label="Indeterminate checkbox"
            checked="true"
            indeterminate="true"
            native-indeterminate-behaviour="true"
          >
          </ic-checkbox>
        </ic-checkbox-group>
        <br />
        <ic-button id="native-indeterminate-button"
          >Toggle indeterminate</ic-button
        >
        <br />
        <br />
        <span>Indeterminate: <span id="native-indeterminate-text"></span></span>
        <br />
        <span>Checked: <span id="native-checked-text"></span></span>
      </div>
    </div>
  \`,
  name: "Indeterminate"
}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  render: () => html\`
    <script>
      var drinksCheckbox = document.querySelector("#drinks-checkbox");
      var teaCheckbox = document.querySelector("#tea-checkbox");
      var coffeeCheckbox = document.querySelector("#coffee-checkbox");
      var juiceCheckbox = document.querySelector("#juice-checkbox");
      var drinksGroup = document.querySelector("#drinks-group");
      drinksCheckbox.addEventListener("icCheck", function (ev) {
        if (ev.target === drinksCheckbox) {
          teaCheckbox.checked = drinksCheckbox.checked;
          coffeeCheckbox.checked = drinksCheckbox.checked;
          juiceCheckbox.checked = drinksCheckbox.checked;
        }
      });
      drinksGroup.addEventListener("icChange", function (ev) {
        if (ev.detail.checkedOptions.length === 3) {
          drinksCheckbox.indeterminate = false;
          drinksCheckbox.checked = true;
        } else if (ev.detail.checkedOptions.length === 0) {
          drinksCheckbox.indeterminate = false;
          drinksCheckbox.checked = false;
        } else {
          drinksCheckbox.indeterminate = true;
          drinksCheckbox.checked = false;
        }
      });
      coffeeCheckbox.checked = true;
      drinksCheckbox.indeterminate = true;
    <\/script>
    <ic-checkbox-group label="Liked things" name="1">
      <ic-checkbox
        id="drinks-checkbox"
        value="drinks"
        label="Drinks"
        indeterminate="false"
        native-indeterminate-behaviour
      >
        <ic-checkbox-group
          id="drinks-group"
          name="2"
          label="Drinks"
          hide-label
          slot="additional-field"
        >
          <ic-checkbox id="tea-checkbox" value="tea" label="Tea"></ic-checkbox>
          <ic-checkbox
            id="coffee-checkbox"
            value="coffee"
            label="Coffee"
          ></ic-checkbox>
          <ic-checkbox
            id="juice-checkbox"
            value="juice"
            label="Juice"
          ></ic-checkbox>
        </ic-checkbox-group>
      </ic-checkbox>
    </ic-checkbox-group>
  \`,
  name: "Indeterminate with children"
}`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  render: () => html\`
    <script>
      var textOutputEl = document.querySelector("#value-text");
      function handleIcChange(ev) {
        textOutputEl.innerHTML = ev.target.value;
      }
      document
        .querySelector("ic-text-field")
        .addEventListener("icChange", handleIcChange);
    <\/script>
    <div>
      <ic-checkbox-group label="This is a label" name="group1">
        <ic-checkbox
          value="valueName1"
          label="Unselected / Default"
          additional-field-display="static"
        >
          <ic-text-field
            slot="additional-field"
            placeholder="Placeholder"
            label="What's your favourite type of coffee?"
          ></ic-text-field>
        </ic-checkbox>
      </ic-checkbox-group>
      <br />
      <span>textfield value: </span>
      <span id="value-text"></span>
      <div></div>
    </div>
  \`,
  name: "TextField value change"
}`,...M.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  render: () => html\`
    <ic-checkbox-group label="This is a label" name="group1" dir="rtl">
      <ic-checkbox
        value="valueName1"
        label="Indeterminate"
        indeterminate="true"
      ></ic-checkbox>
      <ic-checkbox value="valueName2" label="Selected" checked></ic-checkbox>
      <ic-checkbox value="valueName3" label="Disabled" disabled></ic-checkbox>
      <ic-checkbox
        additional-field-display="dynamic"
        value="valueName4"
        label="Conditional dynamic"
      >
        <ic-text-field
          slot="additional-field"
          placeholder="Placeholder"
          label="What's your favourite type of coffee?"
        ></ic-text-field>
      </ic-checkbox>
    </ic-checkbox-group>
  \`,
  name: "RTL"
}`,...N.parameters?.docs?.source}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  render: () => html\`
      <p>Each checkbox in this group is set to a different language by being wrapped in a <code>&lt;span lang=""&gt;</code></p>
      <ic-checkbox-group
        label="International Coffee"
      >
        <span lang="fr">
          <ic-checkbox value="valueName1" label="Cafe au lait"></ic-checkbox>
        </span>
        <span lang="it">
          <ic-checkbox value="valueName2" label="Americano" checked></ic-checkbox>
        </span>
        <ic-checkbox value="valueName3" label="Flat White"></ic-checkbox>
      </ic-checkbox-group>
      <p>This whole checkbox group has been wrapped in a <code>&lt;span lang="fr"&gt;</code> and will read in French</p>
      <span lang="fr">
      <ic-checkbox-group
        label="Boissons"
      >
          <ic-checkbox value="valueName1" label="Limonade"></ic-checkbox>
          <ic-checkbox value="valueName2" label="Chocolat Chaud" checked></ic-checkbox>
          <ic-checkbox value="valueName3" label="Jus"></ic-checkbox>
      </ic-checkbox-group>
      </span>
    </>
 \`,
  name: "Internationalisation"
}`,...P.parameters?.docs?.source}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [{
      checked
    }, updateArgs] = useArgs();
    return html\` <ic-checkbox-group
      disabled=\${args.disabled}
      label=\${args.groupLabel}
      size=\${args.size}
      helper-text=\${args.helperText}
      hide-label=\${args.hideGroupLabel}
      name=\${args.name}
      required=\${args.required}
      validation-aria-live=\${args.validationAriaLive}
      validation-status=\${args.validationStatus === "no status" ? "" : args.validationStatus}
      validation-text=\${args.validationText}
      theme=\${args.theme}
    >
      <ic-checkbox
        disabled=\${args.checkboxDisabled}
        label=\${args.label}
        value=\${args.value}
        size=\${args.checkboxSize}
        hide-label=\${args.hideLabel}
        indeterminate=\${args.indeterminate}
        checked=\${checked}
        additional-field-display=\${args.additionalFieldDisplay}
        dynamic-text=\${args.dynamicText}
        native-indeterminate-behaviour=\${args.nativeIndeterminateBehaviour}
      >
        <ic-text-field
          slot=\${args.additionalFieldSlot}
          placeholder="Placeholder"
          label="What's your favourite type of coffee?"
        ></ic-text-field>
      </ic-checkbox>
      <ic-checkbox value="valueName2" label="Checkbox 2"></ic-checkbox>
      <ic-checkbox value="valueName3" label="Checkbox 3"></ic-checkbox>
    </ic-checkbox-group>\`;
  },
  args: defaultArgs,
  argTypes: {
    additionalFieldDisplay: {
      options: ["dynamic", "static"],
      control: {
        type: inlineRadioSelector
      }
    },
    additionalFieldSlot: {
      options: ["additional-field", ""],
      control: {
        type: "select"
      }
    },
    size: {
      options: ["medium", "large", "small"],
      control: {
        type: inlineRadioSelector
      }
    },
    checkboxSize: {
      options: ["medium", "large", "small"],
      control: {
        type: inlineRadioSelector
      }
    },
    validationAriaLive: {
      options: ["polite", "assertive", "off"],
      control: {
        type: inlineRadioSelector
      }
    },
    validationStatus: {
      options: ["no status", "warning", "error", "success"],
      control: {
        type: "select"
      }
    },
    theme: {
      options: ["inherit", "light", "dark"],
      control: {
        type: inlineRadioSelector
      }
    }
  },
  name: "Playground"
}`,...I.parameters?.docs?.source}}},L=[`Default`,`Required`,`Disabled`,`Sizes`,`HiddenGroupLabel`,`HiddenCheckboxLabel`,`ConditionalDynamic`,`ConditionalStatic`,`SlottedLabel`,`HelperText`,`SlottedGroupLabel`,`Validation`,`AriaLiveBehaviour`,`Form`,`Indeterminate`,`IndeterminateWithChildren`,`TextFieldValueChange`,`RTL`,`Internationalisation`,`Playground`]}));R();export{O as AriaLiveBehaviour,S as ConditionalDynamic,C as ConditionalStatic,g as Default,v as Disabled,k as Form,T as HelperText,x as HiddenCheckboxLabel,b as HiddenGroupLabel,A as Indeterminate,j as IndeterminateWithChildren,P as Internationalisation,I as Playground,N as RTL,_ as Required,y as Sizes,E as SlottedGroupLabel,w as SlottedLabel,M as TextFieldValueChange,D as Validation,L as __namedExportsOrder,h as default,R as n,o as t};