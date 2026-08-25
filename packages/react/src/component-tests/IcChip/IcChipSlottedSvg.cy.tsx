/// <reference types="Cypress" />

import React from "react";
import { mount } from "cypress/react";
import { IcChip } from "../../components";
import { SlottedSVG } from "../../react-component-lib/slottedSVG";

const ICON_PATH =
  "M12,19.2C9.5,19.2 7.29,17.92 6,16C6.03,14 10,12.9 12,12.9C14,12.9 17.97,14 18,16C16.71,17.92 14.5,19.2 12,19.2M12,5A3,3 0 0,1 15,8A3,3 0 0,1 12,11A3,3 0 0,1 9,8A3,3 0 0,1 12,5M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12C22,6.47 17.5,2 12,2Z";

describe("IcChip SlottedSVG sizing", () => {
  it("constrains a SlottedSVG to the chip icon container", () => {
    mount(
      <div style={{ display: "flex", gap: "8px" }}>
        <IcChip label="Account">
          <SlottedSVG
            slot="icon"
            path={ICON_PATH}
            viewBox="0 0 24 24"
            aria-label="Account"
          />
        </IcChip>
        <IcChip label="Neighbour" />
      </div>
    );

    cy.checkHydrated("ic-chip");

    cy.get("ic-chip")
      .eq(0)
      .then(($chip) => {
        const chip = $chip[0];
        const iconContainer = chip.shadowRoot?.querySelector(
          ".icon"
        ) as HTMLElement;
        const svg = chip.querySelector('svg[slot="icon"]') as SVGElement;

        expect(iconContainer).not.to.be.null;
        expect(svg).not.to.be.null;

        const containerRect = iconContainer.getBoundingClientRect();
        const svgRect = svg.getBoundingClientRect();

        expect(containerRect.width).to.be.at.most(24);
        expect(containerRect.height).to.be.at.most(24);
        expect(svgRect.width).to.be.at.most(containerRect.width);
        expect(svgRect.height).to.be.at.most(containerRect.height);
      });
  });
});
