import { html } from "lit-html";

export default {
  title: "Web Components/Section container",
  component: "ic-section-container",
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
