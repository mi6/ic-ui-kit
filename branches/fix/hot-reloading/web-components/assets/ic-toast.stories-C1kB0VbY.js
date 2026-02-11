var p=Object.freeze,S=Object.defineProperty;var e=(t,x)=>p(S(t,"raw",{value:p(x||t.slice())}));import{x as i}from"./lit-html-CWQq0DyO.js";const w={autoDismissTimeout:5e3,dismissButtonAriaLabel:"dismiss",dismissMode:"manual",heading:"This is the heading",message:"This is the message",neutralIconAriaLabel:"",variant:"neutral",actionSlot:"action",neutralIconSlot:"neutral-icon",theme:"inherit"},D={title:"Web Components/Toast",component:"ic-toast"};var d;const n={render:()=>i(d||(d=e([`<button onclick="func()">Display toast</button>
      <script>
        var toastRegion = document.querySelector("ic-toast-region");
        function func() {
          var x = document.getElementById("toast1");
          toastRegion.openToast = x;
        }
      <\/script>
      <ic-toast-region>
        <ic-toast id="toast1" heading="Your coffee is ready"></ic-toast>
      </ic-toast-region>`]))),name:"Default"};var g;const a={render:()=>i(g||(g=e([`<button onclick="func()">Display toast</button>
      <script>
        var toastRegion = document.querySelector("ic-toast-region");
        function func() {
          var x = document.getElementById("toast1");
          toastRegion.openToast = x;
        }
      <\/script>
      <ic-toast-region>
        <ic-toast
          id="toast1"
          heading="Your coffee is ready"
          message="Please dismiss and collect"
          variant="success"
        ></ic-toast>
      </ic-toast-region>`]))),name:"With variant"};var v;const s={render:()=>i(v||(v=e([`<button onclick="func()">Display toast</button>
      <script>
        var toastRegion = document.querySelector("ic-toast-region");
        function func() {
          var x = document.getElementById("toast1");
          toastRegion.openToast = x;
        }
      <\/script>
      <ic-toast-region>
        <ic-toast
          id="toast1"
          heading="Your coffee is ready"
          message="Please dismiss and come to collect your delicious coffee from the barista right away before it gets cold. Don't delay! We wouldn't want you to lose out on your fantastic coffee now would we?"
        ></ic-toast>
      </ic-toast-region>`]))),name:"Multiline message"};var h;const o={render:()=>i(h||(h=e([`<button onclick="func()">Display toast 1</button>
      <button onclick="func2()">Display toast 2</button>
      <script>
        var toastRegion = document.querySelector("ic-toast-region");
        function func() {
          var x = document.getElementById("toast1");
          toastRegion.openToast = x;
        }
        function func2() {
          var x = document.getElementById("toast2");
          toastRegion.openToast = x;
        }
      <\/script>
      <ic-toast-region>
        <ic-toast
          id="toast1"
          heading="Your coffee had issues"
          message="Please dismiss and try again"
          variant="warning"
        >
          <ic-button slot="action" appearance="light">Click me</ic-button>
        </ic-toast>
        <ic-toast
          id="toast2"
          heading="Your coffee was lost"
          message="Please dismiss and try again"
          variant="error"
        >
          <ic-link href="/" slot="action" theme="dark">Click me</ic-link>
        </ic-toast>
      </ic-toast-region>`]))),name:"Slotted action elements"};var f;const u={render:()=>i(f||(f=e([`<button onclick="func()">Display toast 1</button>
      <button onclick="func2()">Display toast 2</button>
      <script>
        var toastRegion = document.querySelector("ic-toast-region");
        function func() {
          var x = document.getElementById("toast1");
          toastRegion.openToast = x;
        }
        function func2() {
          var x = document.getElementById("toast2");
          toastRegion.openToast = x;
        }
      <\/script>
      <ic-toast-region>
        <ic-toast
          id="toast1"
          variant="info"
          heading="Your coffee is ready"
          message="This alert will dismiss itself, please collect your java"
          dismiss-mode="automatic"
          auto-dismiss-timeout="10000"
        ></ic-toast>
        <ic-toast
          id="toast2"
          heading="Your coffee was lost"
          message="This alert will dismiss itself, sorry about the coffee"
          variant="error"
          dismiss-mode="automatic"
          auto-dismiss-timeout="10000"
        ></ic-toast>
      </ic-toast-region>`]))),name:"Auto dismiss"};var b;const r={render:()=>i(b||(b=e([`<button onclick="func()">Display toast</button>
      <script>
        var toastRegion = document.querySelector("ic-toast-region");
        function func() {
          var x = document.getElementById("toast1");
          toastRegion.openToast = x;
        }
      <\/script>
      <ic-toast-region>
        <ic-toast
          id="toast1"
          heading="Your coffee is ready"
          variant="neutral"
          neutral-icon-aria-label="Hello world"
          dismiss-button-aria-label="dismiss me"
        >
          <svg
            slot="neutral-icon"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8.79502 15.875L4.62502 11.705L3.20502 13.115L8.79502 18.705L20.795 6.70501L19.385 5.29501L8.79502 15.875Z"
            />
          </svg>
        </ic-toast>
      </ic-toast-region>`]))),name:"Custom neutral icon and dismiss aria-label"};var y;const c={render:()=>i(y||(y=e([` <script>
        var toastRegion = document.querySelector("ic-toast-region");
        function func() {
          var x = document.getElementById("toast1");
          toastRegion.openToast = x;
        }
      <\/script>
      <ic-toast-region>
        <ic-toast id="toast1" heading="Your coffee is ready"></ic-toast>
      </ic-toast-region>
      <div
        id="header"
        style="width:100%;height:80px;background-color:#23508e;color:var(--ic-architectural-white)"
      >
        <ic-typography variant="h1">Header</ic-typography>
      </div>
      <div id="topPageEl">
        <ic-typography variant="h2">Top of the page</ic-typography>
      </div>
      <ic-typography variant="h3">Some content</ic-typography>
      <button onclick="func()">Display toast</button>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel velit
        turpis. Cras ac ligula et lectus mollis molestie in a enim. In ac turpis
        in leo rutrum eleifend. Fusce consectetur posuere ligula, vitae semper
        lorem mollis vitae. Fusce vel blandit turpis. Nulla justo ligula,
        egestas quis rutrum id, vulputate eget diam. Integer mattis quis nisi id
        blandit. Duis nisi lectus, suscipit elementum iaculis sed, porta et
        risus.
      </p>
      <br />
      <br />
      <br />
      <ic-typography variant="h3">More content</ic-typography>
      <p>
        Phasellus accumsan ligula enim, a iaculis sapien rhoncus vitae.
        Curabitur pulvinar posuere diam in luctus. Sed blandit diam id odio
        aliquam aliquet. Pellentesque eros enim, tristique vel mattis eu,
        blandit at enim. Pellentesque sollicitudin pellentesque tellus vel
        eleifend. Nulla mauris lorem, porttitor vel orci eu, iaculis maximus
        nunc. Ut rhoncus ex ipsum. Mauris ultricies, augue sed eleifend
        pellentesque, leo purus efficitur orci, sit amet volutpat tortor diam
        non lorem. Morbi venenatis neque vel accumsan sagittis. Nunc rutrum
        augue non urna tincidunt auctor in at libero. Sed in risus sit amet nisl
        tempor viverra. Phasellus maximus sapien eu erat maximus iaculis.
        Praesent ultricies id orci eu euismod. Fusce eu urna turpis. Praesent ut
        neque tincidunt, porta sem id, accumsan massa.
      </p>
      <br />
      <br />
      <br />
      <ic-typography variant="h3">Some other content</ic-typography>
      <p>
        Curabitur eu tempor justo. Nunc congue viverra tristique. Maecenas massa
        enim, tincidunt consequat maximus at, fermentum vel lectus. Curabitur at
        ligula tellus. Ut a elit sit amet augue sagittis feugiat. Mauris mi
        enim, viverra id turpis ac, auctor vulputate ipsum. Nunc efficitur
        volutpat augue eget sollicitudin. Pellentesque eget pharetra ligula.
        Integer finibus feugiat sapien a pulvinar. Phasellus fermentum est
        lacus, quis volutpat justo pellentesque vitae. Sed vitae diam porta,
        facilisis metus ut, dictum lorem. Proin sed bibendum libero. Maecenas
        justo neque, ultricies sed magna ac, mattis vehicula elit. Donec ac
        lacus eget sapien luctus ultricies in in nibh.
      </p>
      <p>
        Curabitur in nulla urna. Donec ligula est, suscipit eget malesuada
        vitae, elementum et quam. Lorem ipsum dolor sit amet, consectetur
        adipiscing elit. Nulla eu dui a quam mollis porta. Nulla ante nunc,
        ultrices luctus dolor at, ullamcorper convallis erat. Aenean viverra
        semper arcu nec semper. Sed non magna purus. Integer accumsan dui et
        volutpat auctor. Phasellus nec risus ultricies, maximus nunc eu,
        placerat diam. Etiam pulvinar lacinia urna eget molestie. Suspendisse
        semper hendrerit ipsum, vel porttitor lacus venenatis sit amet. Nullam
        non elit in sem vestibulum molestie tempor eget augue. Sed neque ligula,
        tempus ac mollis bibendum, ultrices suscipit risus. Duis suscipit
        pulvinar varius.
      </p>
      <br />
      <br />
      <br />
      <ic-typography variant="h3">Some more</ic-typography>
      <p>
        Etiam accumsan nibh erat, condimentum tempus metus suscipit nec. Duis
        placerat varius dolor eget ornare. Vestibulum egestas tellus non tellus
        ornare, eu scelerisque erat pulvinar. Nam tempus lacus eu libero
        consequat, in elementum magna ultricies. Etiam at suscipit odio. Duis
        quis quam vitae quam varius luctus. Aliquam erat volutpat. Fusce laoreet
        consectetur tortor, ac suscipit sem feugiat non. Etiam tempus tellus
        aliquet orci pretium, nec pretium nulla faucibus
      </p>
      <br />
      <br />
      <br />
      <ic-typography variant="h3">Nearly there</ic-typography>
      <p>
        Curabitur eu tempor justo. Nunc congue viverra tristique. Maecenas massa
        enim, tincidunt consequat maximus at, fermentum vel lectus. Curabitur at
        ligula tellus. Ut a elit sit amet augue sagittis feugiat. Mauris mi
        enim, viverra id turpis ac, auctor vulputate ipsum. Nunc efficitur
        volutpat augue eget sollicitudin. Pellentesque eget pharetra ligula.
        Integer finibus feugiat sapien a pulvinar. Phasellus fermentum est
        lacus, quis volutpat justo pellentesque vitae. Sed vitae diam porta,
        facilisis metus ut, dictum lorem. Proin sed bibendum libero. Maecenas
        justo neque, ultricies sed magna ac, mattis vehicula elit. Donec ac
        lacus eget sapien luctus ultricies in in nibh.
      </p>
      <p>
        Curabitur in nulla urna. Donec ligula est, suscipit eget malesuada
        vitae, elementum et quam. Lorem ipsum dolor sit amet, consectetur
        adipiscing elit. Nulla eu dui a quam mollis porta. Nulla ante nunc,
        ultrices luctus dolor at, ullamcorper convallis erat. Aenean viverra
        semper arcu nec semper. Sed non magna purus. Integer accumsan dui et
        volutpat auctor. Phasellus nec risus ultricies, maximus nunc eu,
        placerat diam. Etiam pulvinar lacinia urna eget molestie. Suspendisse
        semper hendrerit ipsum, vel porttitor lacus venenatis sit amet. Nullam
        non elit in sem vestibulum molestie tempor eget augue. Sed neque ligula,
        tempus ac mollis bibendum, ultrices suscipit risus. Duis suscipit
        pulvinar varius.
      </p>
      <br />
      <br />
      <br />
      <ic-typography variant="h3">The end</ic-typography>
      <br />`]))),name:"Example on page"},m="inline-radio";var q;const l={render:t=>i(q||(q=e([`<button onclick="func()">Display toast</button>
      <script>
        var toastRegion = document.querySelector("ic-toast-region");
        function func() {
          var x = document.getElementById("toast1");
          toastRegion.openToast = x;
        }
      <\/script>
      <ic-toast-region>
        <ic-toast
          id="toast1"
          heading=`,`
          message=`,`
          variant=`,`
          dismiss-mode=`,`
          auto-dismiss-timeout=`,`
          neutral-icon-aria-label=`,`
          dismiss-button-aria-label=`,`
          theme=`,`
        >
          <ic-button slot=`,` appearance="light"
            >Click me</ic-button
          >
          <svg
            slot=`,`
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8.79502 15.875L4.62502 11.705L3.20502 13.115L8.79502 18.705L20.795 6.70501L19.385 5.29501L8.79502 15.875Z"
            />
          </svg>
        </ic-toast>
      </ic-toast-region>`])),t.heading,t.message,t.variant,t.dismissMode,t.autoDismissTimeout,t.neutralIconAriaLabel,t.dismissButtonAriaLabel,t.theme,t.actionSlot,t.neutralIconSlot),args:w,argTypes:{dismissMode:{options:["manual","automatic"],control:{type:m}},variant:{options:["neutral","info","warning","error","success","ai",""],control:{type:m}},actionSlot:{options:["action",""],control:{type:"select"}},neutralIconSlot:{options:["neutral-icon",""],control:{type:"select"}},theme:{options:["inherit","light","dark"],control:{type:m}}},name:"Playground"};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: () => html\`<button onclick="func()">Display toast</button>
      <script>
        var toastRegion = document.querySelector("ic-toast-region");
        function func() {
          var x = document.getElementById("toast1");
          toastRegion.openToast = x;
        }
      <\/script>
      <ic-toast-region>
        <ic-toast id="toast1" heading="Your coffee is ready"></ic-toast>
      </ic-toast-region>\`,
  name: "Default"
}`,...n.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: () => html\`<button onclick="func()">Display toast</button>
      <script>
        var toastRegion = document.querySelector("ic-toast-region");
        function func() {
          var x = document.getElementById("toast1");
          toastRegion.openToast = x;
        }
      <\/script>
      <ic-toast-region>
        <ic-toast
          id="toast1"
          heading="Your coffee is ready"
          message="Please dismiss and collect"
          variant="success"
        ></ic-toast>
      </ic-toast-region>\`,
  name: "With variant"
}`,...a.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => html\`<button onclick="func()">Display toast</button>
      <script>
        var toastRegion = document.querySelector("ic-toast-region");
        function func() {
          var x = document.getElementById("toast1");
          toastRegion.openToast = x;
        }
      <\/script>
      <ic-toast-region>
        <ic-toast
          id="toast1"
          heading="Your coffee is ready"
          message="Please dismiss and come to collect your delicious coffee from the barista right away before it gets cold. Don't delay! We wouldn't want you to lose out on your fantastic coffee now would we?"
        ></ic-toast>
      </ic-toast-region>\`,
  name: "Multiline message"
}`,...s.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: () => html\`<button onclick="func()">Display toast 1</button>
      <button onclick="func2()">Display toast 2</button>
      <script>
        var toastRegion = document.querySelector("ic-toast-region");
        function func() {
          var x = document.getElementById("toast1");
          toastRegion.openToast = x;
        }
        function func2() {
          var x = document.getElementById("toast2");
          toastRegion.openToast = x;
        }
      <\/script>
      <ic-toast-region>
        <ic-toast
          id="toast1"
          heading="Your coffee had issues"
          message="Please dismiss and try again"
          variant="warning"
        >
          <ic-button slot="action" appearance="light">Click me</ic-button>
        </ic-toast>
        <ic-toast
          id="toast2"
          heading="Your coffee was lost"
          message="Please dismiss and try again"
          variant="error"
        >
          <ic-link href="/" slot="action" theme="dark">Click me</ic-link>
        </ic-toast>
      </ic-toast-region>\`,
  name: "Slotted action elements"
}`,...o.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => html\`<button onclick="func()">Display toast 1</button>
      <button onclick="func2()">Display toast 2</button>
      <script>
        var toastRegion = document.querySelector("ic-toast-region");
        function func() {
          var x = document.getElementById("toast1");
          toastRegion.openToast = x;
        }
        function func2() {
          var x = document.getElementById("toast2");
          toastRegion.openToast = x;
        }
      <\/script>
      <ic-toast-region>
        <ic-toast
          id="toast1"
          variant="info"
          heading="Your coffee is ready"
          message="This alert will dismiss itself, please collect your java"
          dismiss-mode="automatic"
          auto-dismiss-timeout="10000"
        ></ic-toast>
        <ic-toast
          id="toast2"
          heading="Your coffee was lost"
          message="This alert will dismiss itself, sorry about the coffee"
          variant="error"
          dismiss-mode="automatic"
          auto-dismiss-timeout="10000"
        ></ic-toast>
      </ic-toast-region>\`,
  name: "Auto dismiss"
}`,...u.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: () => html\`<button onclick="func()">Display toast</button>
      <script>
        var toastRegion = document.querySelector("ic-toast-region");
        function func() {
          var x = document.getElementById("toast1");
          toastRegion.openToast = x;
        }
      <\/script>
      <ic-toast-region>
        <ic-toast
          id="toast1"
          heading="Your coffee is ready"
          variant="neutral"
          neutral-icon-aria-label="Hello world"
          dismiss-button-aria-label="dismiss me"
        >
          <svg
            slot="neutral-icon"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8.79502 15.875L4.62502 11.705L3.20502 13.115L8.79502 18.705L20.795 6.70501L19.385 5.29501L8.79502 15.875Z"
            />
          </svg>
        </ic-toast>
      </ic-toast-region>\`,
  name: "Custom neutral icon and dismiss aria-label"
}`,...r.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => html\` <script>
        var toastRegion = document.querySelector("ic-toast-region");
        function func() {
          var x = document.getElementById("toast1");
          toastRegion.openToast = x;
        }
      <\/script>
      <ic-toast-region>
        <ic-toast id="toast1" heading="Your coffee is ready"></ic-toast>
      </ic-toast-region>
      <div
        id="header"
        style="width:100%;height:80px;background-color:#23508e;color:var(--ic-architectural-white)"
      >
        <ic-typography variant="h1">Header</ic-typography>
      </div>
      <div id="topPageEl">
        <ic-typography variant="h2">Top of the page</ic-typography>
      </div>
      <ic-typography variant="h3">Some content</ic-typography>
      <button onclick="func()">Display toast</button>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel velit
        turpis. Cras ac ligula et lectus mollis molestie in a enim. In ac turpis
        in leo rutrum eleifend. Fusce consectetur posuere ligula, vitae semper
        lorem mollis vitae. Fusce vel blandit turpis. Nulla justo ligula,
        egestas quis rutrum id, vulputate eget diam. Integer mattis quis nisi id
        blandit. Duis nisi lectus, suscipit elementum iaculis sed, porta et
        risus.
      </p>
      <br />
      <br />
      <br />
      <ic-typography variant="h3">More content</ic-typography>
      <p>
        Phasellus accumsan ligula enim, a iaculis sapien rhoncus vitae.
        Curabitur pulvinar posuere diam in luctus. Sed blandit diam id odio
        aliquam aliquet. Pellentesque eros enim, tristique vel mattis eu,
        blandit at enim. Pellentesque sollicitudin pellentesque tellus vel
        eleifend. Nulla mauris lorem, porttitor vel orci eu, iaculis maximus
        nunc. Ut rhoncus ex ipsum. Mauris ultricies, augue sed eleifend
        pellentesque, leo purus efficitur orci, sit amet volutpat tortor diam
        non lorem. Morbi venenatis neque vel accumsan sagittis. Nunc rutrum
        augue non urna tincidunt auctor in at libero. Sed in risus sit amet nisl
        tempor viverra. Phasellus maximus sapien eu erat maximus iaculis.
        Praesent ultricies id orci eu euismod. Fusce eu urna turpis. Praesent ut
        neque tincidunt, porta sem id, accumsan massa.
      </p>
      <br />
      <br />
      <br />
      <ic-typography variant="h3">Some other content</ic-typography>
      <p>
        Curabitur eu tempor justo. Nunc congue viverra tristique. Maecenas massa
        enim, tincidunt consequat maximus at, fermentum vel lectus. Curabitur at
        ligula tellus. Ut a elit sit amet augue sagittis feugiat. Mauris mi
        enim, viverra id turpis ac, auctor vulputate ipsum. Nunc efficitur
        volutpat augue eget sollicitudin. Pellentesque eget pharetra ligula.
        Integer finibus feugiat sapien a pulvinar. Phasellus fermentum est
        lacus, quis volutpat justo pellentesque vitae. Sed vitae diam porta,
        facilisis metus ut, dictum lorem. Proin sed bibendum libero. Maecenas
        justo neque, ultricies sed magna ac, mattis vehicula elit. Donec ac
        lacus eget sapien luctus ultricies in in nibh.
      </p>
      <p>
        Curabitur in nulla urna. Donec ligula est, suscipit eget malesuada
        vitae, elementum et quam. Lorem ipsum dolor sit amet, consectetur
        adipiscing elit. Nulla eu dui a quam mollis porta. Nulla ante nunc,
        ultrices luctus dolor at, ullamcorper convallis erat. Aenean viverra
        semper arcu nec semper. Sed non magna purus. Integer accumsan dui et
        volutpat auctor. Phasellus nec risus ultricies, maximus nunc eu,
        placerat diam. Etiam pulvinar lacinia urna eget molestie. Suspendisse
        semper hendrerit ipsum, vel porttitor lacus venenatis sit amet. Nullam
        non elit in sem vestibulum molestie tempor eget augue. Sed neque ligula,
        tempus ac mollis bibendum, ultrices suscipit risus. Duis suscipit
        pulvinar varius.
      </p>
      <br />
      <br />
      <br />
      <ic-typography variant="h3">Some more</ic-typography>
      <p>
        Etiam accumsan nibh erat, condimentum tempus metus suscipit nec. Duis
        placerat varius dolor eget ornare. Vestibulum egestas tellus non tellus
        ornare, eu scelerisque erat pulvinar. Nam tempus lacus eu libero
        consequat, in elementum magna ultricies. Etiam at suscipit odio. Duis
        quis quam vitae quam varius luctus. Aliquam erat volutpat. Fusce laoreet
        consectetur tortor, ac suscipit sem feugiat non. Etiam tempus tellus
        aliquet orci pretium, nec pretium nulla faucibus
      </p>
      <br />
      <br />
      <br />
      <ic-typography variant="h3">Nearly there</ic-typography>
      <p>
        Curabitur eu tempor justo. Nunc congue viverra tristique. Maecenas massa
        enim, tincidunt consequat maximus at, fermentum vel lectus. Curabitur at
        ligula tellus. Ut a elit sit amet augue sagittis feugiat. Mauris mi
        enim, viverra id turpis ac, auctor vulputate ipsum. Nunc efficitur
        volutpat augue eget sollicitudin. Pellentesque eget pharetra ligula.
        Integer finibus feugiat sapien a pulvinar. Phasellus fermentum est
        lacus, quis volutpat justo pellentesque vitae. Sed vitae diam porta,
        facilisis metus ut, dictum lorem. Proin sed bibendum libero. Maecenas
        justo neque, ultricies sed magna ac, mattis vehicula elit. Donec ac
        lacus eget sapien luctus ultricies in in nibh.
      </p>
      <p>
        Curabitur in nulla urna. Donec ligula est, suscipit eget malesuada
        vitae, elementum et quam. Lorem ipsum dolor sit amet, consectetur
        adipiscing elit. Nulla eu dui a quam mollis porta. Nulla ante nunc,
        ultrices luctus dolor at, ullamcorper convallis erat. Aenean viverra
        semper arcu nec semper. Sed non magna purus. Integer accumsan dui et
        volutpat auctor. Phasellus nec risus ultricies, maximus nunc eu,
        placerat diam. Etiam pulvinar lacinia urna eget molestie. Suspendisse
        semper hendrerit ipsum, vel porttitor lacus venenatis sit amet. Nullam
        non elit in sem vestibulum molestie tempor eget augue. Sed neque ligula,
        tempus ac mollis bibendum, ultrices suscipit risus. Duis suscipit
        pulvinar varius.
      </p>
      <br />
      <br />
      <br />
      <ic-typography variant="h3">The end</ic-typography>
      <br />\`,
  name: "Example on page"
}`,...c.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: args => html\`<button onclick="func()">Display toast</button>
      <script>
        var toastRegion = document.querySelector("ic-toast-region");
        function func() {
          var x = document.getElementById("toast1");
          toastRegion.openToast = x;
        }
      <\/script>
      <ic-toast-region>
        <ic-toast
          id="toast1"
          heading=\${args.heading}
          message=\${args.message}
          variant=\${args.variant}
          dismiss-mode=\${args.dismissMode}
          auto-dismiss-timeout=\${args.autoDismissTimeout}
          neutral-icon-aria-label=\${args.neutralIconAriaLabel}
          dismiss-button-aria-label=\${args.dismissButtonAriaLabel}
          theme=\${args.theme}
        >
          <ic-button slot=\${args.actionSlot} appearance="light"
            >Click me</ic-button
          >
          <svg
            slot=\${args.neutralIconSlot}
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8.79502 15.875L4.62502 11.705L3.20502 13.115L8.79502 18.705L20.795 6.70501L19.385 5.29501L8.79502 15.875Z"
            />
          </svg>
        </ic-toast>
      </ic-toast-region>\`,
  args: defaultArgs,
  argTypes: {
    dismissMode: {
      options: ["manual", "automatic"],
      control: {
        type: inlineRadioSelector
      }
    },
    variant: {
      options: ["neutral", "info", "warning", "error", "success", "ai", ""],
      control: {
        type: inlineRadioSelector
      }
    },
    actionSlot: {
      options: ["action", ""],
      control: {
        type: "select"
      }
    },
    neutralIconSlot: {
      options: ["neutral-icon", ""],
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
}`,...l.parameters?.docs?.source}}};const P=["Default","WithVariant","MultilineMessage","SlottedActionElements","AutoDismiss","CustomNeutralIconAndDismissAriaLabel","ExampleOnPage","Playground"],E=Object.freeze(Object.defineProperty({__proto__:null,AutoDismiss:u,CustomNeutralIconAndDismissAriaLabel:r,Default:n,ExampleOnPage:c,MultilineMessage:s,Playground:l,SlottedActionElements:o,WithVariant:a,__namedExportsOrder:P,default:D},Symbol.toStringTag,{value:"Module"}));export{E as I};
