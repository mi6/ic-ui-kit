/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable sonarjs/no-duplicate-string */
import React from 'react';
import { IcSectionContainer } from "../components";

const defaultArgs = {
  aligned: null,
  fullHeight: false,
};

export default {
  title: "Section container",
  component: IcSectionContainer,
};

export const LeftAligned = {
  render: () => (
    <IcSectionContainer
      style={{
        border: "1px solid black",
      }}
    >
      <main>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <button>Start</button>
          <button>End</button>
        </div>
      </main>
    </IcSectionContainer>
  ),

  name: "Left Aligned",
};

export const CenterAlignment = {
  render: () => (
    <IcSectionContainer
      aligned="center"
      style={{
        border: "1px solid black",
      }}
    >
      <main>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <button>Start</button>
          <button>End</button>
        </div>
      </main>
    </IcSectionContainer>
  ),

  name: "Center alignment",
};

export const FullWidthAlignment = {
  render: () => (
    <IcSectionContainer
      aligned="full-width"
      style={{
        border: "1px solid black",
      }}
    >
      <main>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <button>Start</button>
          <button>End</button>
        </div>
      </main>
    </IcSectionContainer>
  ),

  name: "Full-width alignment",
};

export const FullHeight = {
  render: () => (
    <IcSectionContainer
      aligned="full-width"
      fullHeight="true"
      style={{
        border: "1px solid black",
      }}
    >
      <main>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <button>Start</button>
          <button>End</button>
        </div>
      </main>
    </IcSectionContainer>
  ),

  name: "Full-height",
};

export const Playground = {
  render: (args) => (
    <IcSectionContainer
      aligned={args.aligned}
      fullHeight={args.fullHeight}
      style={{
        border: "1px solid black",
      }}
    >
      <main>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <button>Start</button>
          <button>End</button>
        </div>
      </main>
    </IcSectionContainer>
  ),

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
