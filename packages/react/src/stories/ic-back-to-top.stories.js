/* eslint-disable sonarjs/no-duplicate-string */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React from 'react';
import {
  IcBackToTop,
  IcButton,
  IcClassificationBanner,
  IcTypography,
} from "../components";

const defaultArgs = {
  target: "topEl",
  theme: "inherit",
  variant: "default",
  position: "right",
};

export default {
  title: "Back to top",
  component: IcBackToTop,
};

export const Default = {
  render: () => (
   <>
    <div id="topEl" style={{ marginTop: "-20px" }}>
      <IcTypography variant="h2">Top of the page</IcTypography>
    </div>
    <div style={{ height: "1200px" }}></div>
    <IcBackToTop target="topEl" />
   </>
  ),

  name: "Default",
};

export const PositionLeft = {
  render: () => (
   <>
    <div id="topEl" style={{ marginTop: "-20px" }}>
      <IcTypography variant="h2">Top of the page</IcTypography>
    </div>
    <div style={{ height: "1200px" }}></div>
    <IcBackToTop target="topEl" position='left'/>
   </>
  ),

  name: "Position left",
};

export const PositionCenter = {
  render: () => (
   <>
    <div id="topEl" style={{ marginTop: "-20px" }}>
      <IcTypography variant="h2">Top of the page</IcTypography>
    </div>
    <div style={{ height: "1200px" }}></div>
    <IcBackToTop target="topEl" position='center'/>
   </>
  ),

  name: "Position center",
};

export const PageExample = {
  render: () => (
    <>
      <div
      id="header"
      style={{
        width: "100%",
        height: "100px",
        backgroundColor: "#23508e",
        color: "var(--ic-architectural-white)",
      }}
    >
      <IcTypography variant="h1">Header</IcTypography>
      <IcButton variant="secondary" theme="light" monochrome>Button</IcButton>
    </div>
    <div id="topPageEl">
      <IcTypography variant="h2">Top of the page</IcTypography>
    </div>
    <IcTypography variant="h3">Some content</IcTypography>
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
    <IcTypography variant="h3">More content</IcTypography>
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
    <IcTypography variant="h3">Some other content</IcTypography>
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
    <IcTypography variant="h3">Some more</IcTypography>
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
    <IcButton>Button</IcButton>
    <br />
    <br />
    <br />
    <IcTypography variant="h3">Nearly there</IcTypography>
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
    <IcTypography variant="h3">The end</IcTypography>
    <br />
    <IcBackToTop target="topPageEl" />
    <footer style={{ marginBottom: "24px" }}>
      <div
        id="footer"
        style={{
          width: "100%",
          height: "200px",
          backgroundColor: "#23508e",
          color: "var(--ic-architectural-white)",
        }}
      >
        <IcTypography variant="h3">Footer</IcTypography>
      </div>
    </footer>
    <IcClassificationBanner classification="official" />
    </>
  ),

  name: "Page Example",
};

export const Playground = {
  render: (args) => (
    <>
      <div
        id="header"
        style={{
          width: "100%",
          height: "100px",
          backgroundColor: "#23508e",
          color: "var(--ic-architectural-white)",
        }}
      >
        <IcTypography variant="h1">Header</IcTypography>
        <IcButton variant="secondary" theme="light" monochrome>
          Button
        </IcButton>
      </div>
      <div id="topEl">
        <IcTypography variant="h2">Top of the page</IcTypography>
      </div>
      <IcTypography variant="h3">Some content</IcTypography>
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
      <IcTypography variant="h3">More content</IcTypography>
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
      <IcTypography variant="h3">Some other content</IcTypography>
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
      <IcTypography variant="h3">Some more</IcTypography>
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
      <IcButton>Button</IcButton>
      <br />
      <br />
      <br />
      <IcTypography variant="h3">Nearly there</IcTypography>
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
      <IcTypography variant="h3">The end</IcTypography>
      <br />
      <IcBackToTop
        target={args.target}
        variant={args.variant}
        theme={args.theme}
        position={args.position}
      />
      <footer
        style={{
          marginBottom: "24px",
        }}
      >
        <div
          id="footer"
          style={{
            width: "100%",
            height: "200px",
            backgroundColor: "#23508e",
            color: "var(--ic-architectural-white)",
          }}
        >
          <IcTypography variant="h3">Footer</IcTypography>
        </div>
      </footer>
      <IcClassificationBanner classification="official" />
    </>
  ),

  args: defaultArgs,

  argTypes: {
    target: {
      table: {
        disable: true,
      },
    },

    theme: {
      options: ["inherit", "light", "dark"],

      control: {
        type: "inline-radio",
      },
    },

    variant: {
      options: ["default", "icon"],

      control: {
        type: "inline-radio",
      },
    },
    position: {
      options: ["left", "center", "right"],

      control: {
        type: "inline-radio",
      },
    },
  },

  name: "Playground",
};
