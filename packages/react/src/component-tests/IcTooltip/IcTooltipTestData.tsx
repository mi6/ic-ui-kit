import React, { FC, useState, useRef } from "react";
import { IcTooltip, IcChip } from "../../components";
import { SlottedSVG } from "../../react-component-lib/slottedSVG";

export const Default = () => {
  return (
    <div style={{ margin: "40px" }}>
      <IcTooltip
        label="This is a description of the button"
        id="ic-tooltip-test-button-default"
        target="test-button-default"
      >
        <button
          aria-describedby="ic-tooltip-test-button-default"
          id="test-button-default"
        >
          Default
        </button>
      </IcTooltip>
    </div>
  );
};

export const TopPlacement = () => {
  return (
    <div style={{ margin: "40px" }}>
      <IcTooltip
        placement="top-start"
        label="This is a description of the button"
        id="ic-tooltip-test-button-top-start"
        target="test-button-top-start"
      >
        <button
          id="test-button-top-start"
          aria-describedby="ic-tooltip-test-button-top-start"
        >
          Top start
        </button>
      </IcTooltip>
      <IcTooltip
        placement="top"
        label="This is a description of the button"
        id="ic-tooltip-test-button-top"
        target="test-button-top"
      >
        <button
          id="test-button-top"
          aria-describedby="ic-tooltip-test-button-top"
        >
          Top
        </button>
      </IcTooltip>
      <IcTooltip
        placement="top-end"
        label="This is a description of the button"
        id="ic-tooltip-test-button-top-end"
        target="test-button-top-end"
      >
        <button
          id="test-button-top-end"
          aria-describedby="ic-tooltip-test-button-top-end"
        >
          Top end
        </button>
      </IcTooltip>
    </div>
  );
};

export const BottomPlacement = () => {
  return (
    <div style={{ margin: "40px" }}>
      <IcTooltip
        placement="bottom-start"
        label="This is a description of the button"
        id="ic-tooltip-test-button-bottom-start"
        target="test-button-bottom-start"
      >
        <button
          id="test-button-bottom-start"
          aria-describedby="ic-tooltip-test-button-bottom-start"
        >
          Bottom start
        </button>
      </IcTooltip>
      <IcTooltip
        placement="bottom"
        label="This is a description of the button"
        id="ic-tooltip-test-button-bottom"
        target="test-button-bottom"
      >
        <button
          id="test-button-bottom"
          aria-describedby="ic-tooltip-test-button-bottom"
        >
          Bottom
        </button>
      </IcTooltip>
      <IcTooltip
        placement="bottom-end"
        label="This is a description of the button"
        id="ic-tooltip-test-button-bottom-end"
        target="test-button-bottom-end"
      >
        <button
          id="test-button-bottom-end"
          aria-describedby="ic-tooltip-test-button-bottom-end"
        >
          Bottom end
        </button>
      </IcTooltip>
    </div>
  );
};

export const RightPlacement = () => {
  return (
    <div style={{ margin: "40px" }}>
      <IcTooltip
        placement="right-start"
        label="This is a description of the button"
        id="ic-tooltip-test-button-right-start"
        target="test-button-right-start"
      >
        <button
          id="test-button-right-start"
          aria-describedby="ic-tooltip-test-button-right-start"
        >
          Right start
        </button>
      </IcTooltip>
      <IcTooltip
        placement="right"
        label="This is a description of the button"
        id="ic-tooltip-test-button-right"
        target="test-button-right"
      >
        <button
          id="test-button-right"
          aria-describedby="ic-tooltip-test-button-right"
        >
          Right
        </button>
      </IcTooltip>
      <IcTooltip
        placement="right-end"
        label="This is a description of the button"
        id="ic-tooltip-test-button-right-end"
        target="test-button-right-end"
      >
        <button
          id="test-button-right-end"
          aria-describedby="ic-tooltip-test-button-right-end"
        >
          Right end
        </button>
      </IcTooltip>
    </div>
  );
};

export const LeftPlacement = () => {
  return (
    <div style={{ marginLeft: "240px", marginTop: "40px" }}>
      <IcTooltip
        placement="left-start"
        label="This is a description of the button"
        id="ic-tooltip-test-button-left-start"
        target="test-button-left-start"
      >
        <button
          id="test-button-left-start"
          aria-describedby="ic-tooltip-test-button-left-start"
        >
          Left start
        </button>
      </IcTooltip>
      <IcTooltip
        placement="left"
        label="This is a description of the button"
        id="ic-tooltip-test-button-left"
        target="test-button-left"
      >
        <button
          id="test-button-left"
          aria-describedby="ic-tooltip-test-button-left"
        >
          Left
        </button>
      </IcTooltip>
      <IcTooltip
        placement="left-end"
        label="This is a description of the button"
        id="ic-tooltip-test-button-left-end"
        target="test-button-left-end"
      >
        <button
          id="test-button-left-end"
          aria-describedby="ic-tooltip-test-button-left-end"
        >
          Left end
        </button>
      </IcTooltip>
    </div>
  );
};

export const Truncation = () => {
  return (
    <div style={{ margin: "40px" }}>
      <IcTooltip
        label="This is a body of text that is truncated to three lines within a tooltip. It has been truncated based on the maxLines prop. The number of lines in the text is clamped to the number passed through the maxLines prop."
        maxLines={3}
        id="ic-tooltip-test-button-truncation"
        target="test-button-truncation"
      >
        <button
          aria-describedby="ic-tooltip-test-button-truncation"
          id="test-button-truncation"
        >
          Default
        </button>
      </IcTooltip>
    </div>
  );
};

export const Chip = () => {
  return (
    <div style={{ margin: "40px" }}>
      <IcTooltip target="small-chip" label="An espresso-based drink">
        <IcChip id="small-chip" label="Americano" size="small">
          <SlottedSVG
            slot="icon"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M2,21V19H20V21H2M20,8V5H18V8H20M20,3A2,2 0 0,1 22,5V8A2,2 0 0,1 20,10H18V13A4,4 0 0,1 14,17H8A4,4 0 0,1 4,13V3H20M16,5H6V13A2,2 0 0,0 8,15H14A2,2 0 0,0 16,13V5Z" />
          </SlottedSVG>
        </IcChip>
      </IcTooltip>
    </div>
  );
};

export const TwoButtons = () => {
  return (
    <div style={{ margin: "40px" }}>
      <IcTooltip
        label="This is a description of the button"
        id="ic-tooltip-test-button"
        target="button-1"
      >
        <button aria-describedby="ic-tooltip-test-button-1" id="button-1">
          Button 1
        </button>
      </IcTooltip>
      <button aria-describedby="ic-tooltip-test-button-2" id="button-2">
        Button 2
      </button>
    </div>
  );
};

export const DisableHover = () => {
  return (
    <div style={{ margin: "40px" }}>
      <IcTooltip
        label="This is a description of the button"
        id="ic-tooltip-test-button"
        target="button"
        disableHover={true}
      >
        <button aria-describedby="ic-tooltip-test-button" id="button">
          Disabled Hover
        </button>
      </IcTooltip>
    </div>
  );
};

const External: FC = () => {
  const [display, setDisplay] = useState<boolean>(true);
  const tooltipEl = useRef<HTMLIcTooltipElement | null>(null);
  const handleDisplay = () => {
    tooltipEl.current?.displayTooltip(display, display);
    setDisplay(!display);
  };
  return (
    <div>
      <button id="external-method" onClick={handleDisplay}>
        Show tooltip
      </button>
      <IcTooltip
        ref={tooltipEl}
        label="Add Americano to favourites"
        target="test-button"
      >
        <button aria-describedby="ic-tooltip-test-button" id="test-button">
          Add
        </button>
      </IcTooltip>
    </div>
  );
};
export { External };

const ExternalNoPersist: FC = () => {
  const [display, setDisplay] = useState<boolean>(true);
  const tooltipEl = useRef<HTMLIcTooltipElement | null>(null);
  const handleDisplay = () => {
    tooltipEl.current?.displayTooltip(display, false);
    setDisplay(!display);
  };
  return (
    <div>
      <button id="external-method" onClick={handleDisplay}>
        Show tooltip
      </button>
      <IcTooltip
        ref={tooltipEl}
        label="Add Americano to favourites"
        target="test-button"
      >
        <button aria-describedby="ic-tooltip-test-button" id="test-button">
          Add
        </button>
      </IcTooltip>
    </div>
  );
};
export { ExternalNoPersist };
