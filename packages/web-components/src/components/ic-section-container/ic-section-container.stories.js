import { html } from "lit-html";

export default {
  title: "Web Components/Section container",
  component: "ic-section-container",
};

const defaultArgs = {
  aligned: null,
  fullHeight: false,
};

export const LeftAligned = {
  render: () =>
    html`<ic-section-container>
      <main>
        <div style="display: flex; justify-content: space-between">
          <button>Start</button>
          <button>End</button>
        </div>
      </main>
    </ic-section-container>`,

  name: "Left aligned",
};

export const CenterAlignment = {
  render: () =>
    html`<ic-section-container aligned="center">
      <main>
        <div style="display: flex; justify-content: space-between">
          <button>Start</button>
          <button>End</button>
        </div>
      </main>
    </ic-section-container>`,

  name: "Center alignment",
};

export const FullWidthAlignment = {
  render: () =>
    html`<ic-section-container aligned="full-width">
      <main>
        <div style="display: flex; justify-content: space-between">
          <button>Start</button>
          <button>End</button>
        </div>
      </main>
    </ic-section-container>`,

  name: "Full-width alignment",
};

export const FullHeight = {
  render: () =>
    html`<ic-section-container aligned="full-width" full-height>
      <main>
        <div style="display: flex; justify-content: space-between">
          <button>Start</button>
          <button>End</button>
        </div>
      </main>
    </ic-section-container>`,

  name: "Full-height",
};

export const Playground = {
  render: (args) => html`
    <ic-section-container
      aligned=${args.aligned}
      full-height=${args.fullHeight}
      style="border: 1px solid black;"
    >
      <main>
        <div
          style="
            display: flex;
            justify-content: space-between;
          "
        >
          <button>Start</button>
          <button>End</button>
        </div>
      </main>
    </IcSectionContainer>`,

  name: "Playground",
  args: defaultArgs,

  argTypes: {
    aligned: {
      options: [null, "left", "center", "full-width"],

      control: {
        type: "inline-radio",
      },
    },
  },
};
