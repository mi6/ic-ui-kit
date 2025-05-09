import { html } from "lit-html";

export default {
  title: "Web Components/Back to top",
  component: "ic-back-to-top",
};

export const Default = {
  render: () => html`
    <div id="topEl" style="margin-top:-20px;">
      <ic-typography variant="h2">Top of the page</ic-typography>
    </div>
    <div style="height:1200px;"></div>
    <ic-back-to-top target="topEl"></ic-back-to-top>
    <footer style="margin-bottom: 24px;">
      <div
        id="footer"
        style="width: 100%; height: 200px; background-color: #23508e;"
      >
        <ic-typography variant="h3">Footer</ic-typography>
      </div>
    </footer>
    <ic-classification-banner
      classification="official"
    ></ic-classification-banner>
  `,

  name: "Default",
};

export const PositionLeft = {
  render: () => html`
    <div id="topEl" style="margin-top:-20px;">
      <ic-typography variant="h2">Top of the page</ic-typography>
    </div>
    <div style="height:1200px;"></div>
    <ic-back-to-top target="topEl" position="left"></ic-back-to-top>
    <footer style="margin-bottom: 24px;">
      <div
        id="footer"
        style="width: 100%; height: 200px; background-color: #23508e;"
      >
        <ic-typography variant="h3">Footer</ic-typography>
      </div>
    </footer>
    <ic-classification-banner
      classification="official"
    ></ic-classification-banner>
  `,

  name: "Position left",
};

export const PositionCenter = {
  render: () => html`
    <div id="topEl" style="margin-top:-20px;">
      <ic-typography variant="h2">Top of the page</ic-typography>
    </div>
    <div style="height:1200px;"></div>
    <ic-back-to-top target="topEl" position="center"></ic-back-to-top>
    <footer style="margin-bottom: 24px;">
      <div id="footer" style="height: 200px; background-color: #23508e;">
        <ic-typography variant="h3">Footer</ic-typography>
      </div>
    </footer>
    <ic-classification-banner
      classification="official"
    ></ic-classification-banner>
  `,

  name: "Position center",
};

export const IconOnly = {
  render: () => html`
    <div id="topEl" style="margin-top:-20px;">
      <ic-typography variant="h2">Top of the page</ic-typography>
    </div>
    <div style="height:1200px;"></div>
    <ic-back-to-top target="topEl" variant="icon"></ic-back-to-top>
  `,

  name: "Icon Only",
};

export const PageExample = {
  render: () => html`
    <div
      id="header"
      style="width:100%;height:100px;background-color:#23508e;color:var(--ic-architectural-white)"
    >
      <ic-typography variant="h1">Header</ic-typography>
      <ic-button variant="secondary" appearance="light">Button</ic-button>
    </div>
    <div id="topPageEl">
      <ic-typography variant="h2">Top of the page</ic-typography>
    </div>
    <ic-typography variant="h3">Some content</ic-typography>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel velit
      turpis. Cras ac ligula et lectus mollis molestie in a enim. In ac turpis
      in leo rutrum eleifend. Fusce consectetur posuere ligula, vitae semper
      lorem mollis vitae. Fusce vel blandit turpis. Nulla justo ligula, egestas
      quis rutrum id, vulputate eget diam. Integer mattis quis nisi id blandit.
      Duis nisi lectus, suscipit elementum iaculis sed, porta et risus.
    </p>
    <br />
    <br />
    <br />
    <ic-typography variant="h3">More content</ic-typography>
    <p>
      Phasellus accumsan ligula enim, a iaculis sapien rhoncus vitae. Curabitur
      pulvinar posuere diam in luctus. Sed blandit diam id odio aliquam aliquet.
      Pellentesque eros enim, tristique vel mattis eu, blandit at enim.
      Pellentesque sollicitudin pellentesque tellus vel eleifend. Nulla mauris
      lorem, porttitor vel orci eu, iaculis maximus nunc. Ut rhoncus ex ipsum.
      Mauris ultricies, augue sed eleifend pellentesque, leo purus efficitur
      orci, sit amet volutpat tortor diam non lorem. Morbi venenatis neque vel
      accumsan sagittis. Nunc rutrum augue non urna tincidunt auctor in at
      libero. Sed in risus sit amet nisl tempor viverra. Phasellus maximus
      sapien eu erat maximus iaculis. Praesent ultricies id orci eu euismod.
      Fusce eu urna turpis. Praesent ut neque tincidunt, porta sem id, accumsan
      massa.
    </p>
    <br />
    <br />
    <br />
    <ic-typography variant="h3">Some other content</ic-typography>
    <p>
      Curabitur eu tempor justo. Nunc congue viverra tristique. Maecenas massa
      enim, tincidunt consequat maximus at, fermentum vel lectus. Curabitur at
      ligula tellus. Ut a elit sit amet augue sagittis feugiat. Mauris mi enim,
      viverra id turpis ac, auctor vulputate ipsum. Nunc efficitur volutpat
      augue eget sollicitudin. Pellentesque eget pharetra ligula. Integer
      finibus feugiat sapien a pulvinar. Phasellus fermentum est lacus, quis
      volutpat justo pellentesque vitae. Sed vitae diam porta, facilisis metus
      ut, dictum lorem. Proin sed bibendum libero. Maecenas justo neque,
      ultricies sed magna ac, mattis vehicula elit. Donec ac lacus eget sapien
      luctus ultricies in in nibh.
    </p>
    <p>
      Curabitur in nulla urna. Donec ligula est, suscipit eget malesuada vitae,
      elementum et quam. Lorem ipsum dolor sit amet, consectetur adipiscing
      elit. Nulla eu dui a quam mollis porta. Nulla ante nunc, ultrices luctus
      dolor at, ullamcorper convallis erat. Aenean viverra semper arcu nec
      semper. Sed non magna purus. Integer accumsan dui et volutpat auctor.
      Phasellus nec risus ultricies, maximus nunc eu, placerat diam. Etiam
      pulvinar lacinia urna eget molestie. Suspendisse semper hendrerit ipsum,
      vel porttitor lacus venenatis sit amet. Nullam non elit in sem vestibulum
      molestie tempor eget augue. Sed neque ligula, tempus ac mollis bibendum,
      ultrices suscipit risus. Duis suscipit pulvinar varius.
    </p>
    <br />
    <br />
    <br />
    <ic-typography variant="h3">Some more</ic-typography>
    <p>
      Etiam accumsan nibh erat, condimentum tempus metus suscipit nec. Duis
      placerat varius dolor eget ornare. Vestibulum egestas tellus non tellus
      ornare, eu scelerisque erat pulvinar. Nam tempus lacus eu libero
      consequat, in elementum magna ultricies. Etiam at suscipit odio. Duis quis
      quam vitae quam varius luctus. Aliquam erat volutpat. Fusce laoreet
      consectetur tortor, ac suscipit sem feugiat non. Etiam tempus tellus
      aliquet orci pretium, nec pretium nulla faucibus
    </p>
    <br />
    <ic-button>Button</ic-button>
    <br />
    <br />
    <br />
    <ic-typography variant="h3">Nearly there</ic-typography>
    <p>
      Curabitur eu tempor justo. Nunc congue viverra tristique. Maecenas massa
      enim, tincidunt consequat maximus at, fermentum vel lectus. Curabitur at
      ligula tellus. Ut a elit sit amet augue sagittis feugiat. Mauris mi enim,
      viverra id turpis ac, auctor vulputate ipsum. Nunc efficitur volutpat
      augue eget sollicitudin. Pellentesque eget pharetra ligula. Integer
      finibus feugiat sapien a pulvinar. Phasellus fermentum est lacus, quis
      volutpat justo pellentesque vitae. Sed vitae diam porta, facilisis metus
      ut, dictum lorem. Proin sed bibendum libero. Maecenas justo neque,
      ultricies sed magna ac, mattis vehicula elit. Donec ac lacus eget sapien
      luctus ultricies in in nibh.
    </p>
    <p>
      Curabitur in nulla urna. Donec ligula est, suscipit eget malesuada vitae,
      elementum et quam. Lorem ipsum dolor sit amet, consectetur adipiscing
      elit. Nulla eu dui a quam mollis porta. Nulla ante nunc, ultrices luctus
      dolor at, ullamcorper convallis erat. Aenean viverra semper arcu nec
      semper. Sed non magna purus. Integer accumsan dui et volutpat auctor.
      Phasellus nec risus ultricies, maximus nunc eu, placerat diam. Etiam
      pulvinar lacinia urna eget molestie. Suspendisse semper hendrerit ipsum,
      vel porttitor lacus venenatis sit amet. Nullam non elit in sem vestibulum
      molestie tempor eget augue. Sed neque ligula, tempus ac mollis bibendum,
      ultrices suscipit risus. Duis suscipit pulvinar varius.
    </p>
    <br />
    <br />
    <br />
    <ic-typography variant="h3">The end</ic-typography>
    <br />
    <ic-back-to-top target="topPageEl"></ic-back-to-top>
    <footer>
      <div
        id="footer"
        style="width:100%;height:200px;background-color:#23508e;color:var(--ic-architectural-white)"
      >
        <ic-typography variant="h3">Footer</ic-typography>
      </div>
    </footer>
    <ic-classification-banner
      classification="official"
    ></ic-classification-banner>
  `,

  name: "Page example",
};
