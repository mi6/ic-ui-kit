import React, { useState } from "react";
import {
  IcPopoverMenu,
  IcMenuItem,
  IcMenuGroup,
  IcButton,
  IcTheme,
  IcTypography,
} from "../../../../components";
import { SlottedSVG } from "../../../../react-component-lib/slottedSVG";

type PageProps = {
  theme: "light" | "dark";
};

const IcPopoverMenuPage: React.FC<PageProps> = ({ theme }) => {
  const [popoverOpen, setPopoverOpen] = useState<boolean>(true);
  const handlePopoverToggled = () => setPopoverOpen((value) => !value);
  const handlePopoverClosed = () => setPopoverOpen(false);

  return (
    <IcTheme id="theme-wrapper" theme={theme}>
      <IcTypography variant="subtitle-small">
        <h1>Popover Menu Page</h1>
      </IcTypography>
      <IcButton
        id="button-1"
        onClick={handlePopoverToggled}
        aria-expanded={popoverOpen}
      >
        Show/Hide popover
      </IcButton>
      <IcPopoverMenu
        anchor="button-1"
        aria-label="popover"
        open={popoverOpen}
        onIcPopoverClosed={(event) => {
          handlePopoverClosed();
          console.log("Popover menu closed: ", event);
        }}
      >
        <IcMenuItem label="Copy code" disabled />
        <IcMenuGroup label="View">
          <IcMenuItem label="Zoom in" keyboardShortcutLabel="Cmd+" />
          <IcMenuItem label="Zoom out" keyboardShortcutLabel="Cmd-" />
        </IcMenuGroup>
        <IcMenuItem label="Actions" submenuTriggerFor="abc" />
      </IcPopoverMenu>
      <IcPopoverMenu submenuId="abc">
        <IcMenuItem label="Edit" />
        <IcMenuItem label="Find" submenuTriggerFor="abc123" />
        <IcMenuItem label="Delete" variant="destructive" />
      </IcPopoverMenu>
      <IcPopoverMenu submenuId="abc123">
        <IcMenuItem
          label="Search the web"
          description="This will search the web to find the thing you are looking for."
        />
        <IcMenuItem label="Find..." />
        <IcMenuItem label="Find icons">
          <SlottedSVG
            slot="icon"
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 0 24 24"
            width="24px"
          >
            <path d="M0 0h24v24H0V0z" fill="none" />
            <path d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z" />
          </SlottedSVG>
        </IcMenuItem>
        <IcMenuItem
          label="Show found results"
          variant="toggle"
          onIcToggleChecked={(event) => console.log(event.detail.checked)}
        />
      </IcPopoverMenu>
    </IcTheme>
  );
};

export default IcPopoverMenuPage;
