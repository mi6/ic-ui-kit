import React, { useEffect, useState } from 'react';
import { IcDrawer } from "../components";
import readme from "../../../canary-web-components/src/components/ic-drawer/readme.md";
import { mdiCoffee, mdiRefresh } from "@mdi/js";
import {
  IcAccordion,
  IcActionChip,
  IcButton,
  IcCheckbox,
  IcCheckboxGroup,
  IcChip,
  IcFooter,
  IcMenuGroup,
  IcMenuItem,
  IcNavigationItem,
  IcPageHeader,
  IcPopoverMenu,
  IcRadioGroup,
  IcRadioOption,
  IcSearchBar,
  IcSectionContainer,
  IcSelect,
  IcSideNavigation,
  IcSwitch,
  IcTab,
  IcTabContext,
  IcTabGroup,
  IcTabPanel,
  IcTextField,
  IcTooltip,
  IcTypography,
  SlottedSVG,
} from "@ukic/react";

export default {
  title: "React Components/Drawer",
  component: IcDrawer,
  parameters: {
    componentAPI: {
      data: readme,
    },
    layout: "fullscreen",
  },
}

const selectOptions = [
  { label: "Cappuccino", value: "Cap" },
  { label: "Latte", value: "Lat" },
  { label: "Americano", value: "Ame" },
];

const defaultArgs = {
  boundary: "viewport",
  chevronButtonAriaLabel: "",
  closeButtonAriaLabel: "",
  closeOnBackdropClick: true,
  expanded: false,
  heading: "Roasted coffee",
  hideCloseButton: false,
  message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ut pharetra tortor, sed lacinia lectus. Aliquam elementum risus ipsum, sit amet tincidunt elit pharetra quis. Morbi maximus dolor sit amet nulla feugiat, sed congue ligula dignissim. Nullam ac augue nec erat suscipit scelerisque. Aliquam at tellus fringilla, faucibus est posuere, convallis magna. Integer vel ornare lectus. Vestibulum convallis mauris vel quam vehicula maximus. Fusce et consequat lacus, non auctor tellus. In ut lacus aliquet, accumsan tellus a, volutpat ante. Aliquam erat volutpat. Nam non lectus mauris. In eu libero ut augue viverra accumsan. Praesent non felis tortor. Nullam rutrum odio justo, bibendum pulvinar leo dictum a. Donec sodales sagittis ultricies. Duis posuere a mauris vitae auctor. Pellentesque porta, massa ac pellentesque feugiat, diam mauris commodo neque, quis gravida risus est sit amet lacus. Fusce rhoncus leo nec lobortis mattis. Donec risus leo, eleifend efficitur purus ac, sollicitudin dictum neque. Suspendisse potenti. Etiam mattis felis nisi, non laoreet ipsum sollicitudin at. Quisque metus nibh, imperdiet nec euismod a, convallis et sem. Maecenas cursus porttitor fringilla. Ut gravida ante at orci sagittis tincidunt. Integer porta nisl nisi, in vehicula felis aliquet sit amet. Praesent eleifend libero in vulputate convallis. Aenean aliquet ante a venenatis convallis. Donec quis felis semper, imperdiet tellus eu, imperdiet nisi. Sed aliquet felis nec tellus aliquet, et sodales sem varius. Etiam justo mauris, dapibus a ornare id, volutpat sit amet orci. Nam eu condimentum tortor, rhoncus fermentum nunc. Duis mollis justo a tortor tempus dictum. Quisque vulputate, risus non tempor varius, eros velit rutrum dui, non gravida elit erat eget ex. Ut cursus congue enim eget eleifend. Nullam iaculis neque non ligula aliquam, vitae rutrum arcu ultrices. Etiam porttitor condimentum dolor, ut luctus risus condimentum sit amet. Duis faucibus commodo leo nec bibendum. Nam faucibus, lectus vitae pulvinar ullamcorper, risus orci tempus sapien, varius pulvinar nulla odio eget ipsum. Mauris vestibulum sem vitae lectus feugiat, in tincidunt neque fringilla. Fusce lacus eros, elementum sit amet sapien et, congue venenatis metus. Nullam mauris velit, pharetra et ligula faucibus, pulvinar luctus nisl. Etiam ante odio, fermentum ac accumsan eget, luctus a libero. Phasellus maximus risus ac viverra scelerisque.",
  position: "right",
  size: "medium",
  theme: "inherit",
  trigger: "arrow",
  actionsSlot: true,
  headingAdornmentSlot: true,
  headingSlot: false,
  messageSlot: false,
  "--ic-drawer-height": "",
  "--ic-drawer-width": "",
};

const ShowHideContent = () => {
  const [showEl1, setShowEl1] = useState(false);
  const [showEl2, setShowEl2] = useState(false);
  const handleShow = (show) => {
    // Delay prevents false positive by ensuring the two slot updates happen at separate times
    setTimeout(() => {
      setShowEl1(show);
    }, 2000);
    setShowEl2(show);
  };
  return (
    <>
      <IcTypography>
        Demonstrates changes to slotted elements happening after first load.
        <br />
        The button which is a child of an already rendered slotted
        {" "}<code>{`<div>`}</code> will show / hide after a 2s delay.
      </IcTypography>
      <br />
      <IcButton onClick={() => handleShow(true)}>Show</IcButton>
      <IcButton onClick={() => handleShow(false)}>Hide</IcButton>
      <div>
        {showEl1 && (
          <IcButton>Child of slotted element</IcButton>
        )}
      </div>
      {showEl2 && (
        <>
          <IcButton>Slotted element</IcButton>
          <IcTypography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </IcTypography>
        </>
      )}
    </>
  );
};

export const RightPosition = {
  render: () => <IcDrawer
      heading="Roasted coffee"
      message="Contrary to popular belief, light roast coffee has more caffeine than dark roast coffee. The longer coffee is roasted, the more caffeine is lost through the cooking of the bean. Light roast coffee is a light brown colour and has no oil on the surface of the beans, and these coffees typically have a crisp acidity, a mellow body, and bright flavours."
      onIcDrawerExpanded={ev => console.log(ev.detail)}
    >
      <SlottedSVG
          path={mdiCoffee}
          slot="heading-adornment"
          viewBox="0 0 24 24"
      />
      <IcButton slot="actions">Add to order</IcButton>
    </IcDrawer>,
  name: "Right position",
};

export const LeftPosition = {
  render: () => <IcDrawer
      heading="Roasted coffee"
      message="Contrary to popular belief, light roast coffee has more caffeine than dark roast coffee. The longer coffee is roasted, the more caffeine is lost through the cooking of the bean. Light roast coffee is a light brown colour and has no oil on the surface of the beans, and these coffees typically have a crisp acidity, a mellow body, and bright flavours."
      position="left"
      onIcDrawerExpanded={ev => console.log(ev.detail)}
    >
      <SlottedSVG
          path={mdiCoffee}
          slot="heading-adornment"
          viewBox="0 0 24 24"
      />
      <IcButton slot="actions">Add to order</IcButton>
    </IcDrawer>,
  name: "Left position",
};

export const TopPosition = {
  render: () => <IcDrawer
      heading="Roasted coffee"
      message="Contrary to popular belief, light roast coffee has more caffeine than dark roast coffee. The longer coffee is roasted, the more caffeine is lost through the cooking of the bean. Light roast coffee is a light brown colour and has no oil on the surface of the beans, and these coffees typically have a crisp acidity, a mellow body, and bright flavours."
      position="top"
      onIcDrawerExpanded={ev => console.log(ev.detail)}
    >
      <SlottedSVG
          path={mdiCoffee}
          slot="heading-adornment"
          viewBox="0 0 24 24"
      />
      <IcButton slot="actions">Add to order</IcButton>
    </IcDrawer>,
  name: "Top position",
};

export const BottomPosition = {
  render: () => <IcDrawer
      heading="Roasted coffee"
      message="Contrary to popular belief, light roast coffee has more caffeine than dark roast coffee. The longer coffee is roasted, the more caffeine is lost through the cooking of the bean. Light roast coffee is a light brown colour and has no oil on the surface of the beans, and these coffees typically have a crisp acidity, a mellow body, and bright flavours."
      position="bottom"
      onIcDrawerExpanded={ev => console.log(ev.detail)}
    >
      <SlottedSVG
          path={mdiCoffee}
          slot="heading-adornment"
          viewBox="0 0 24 24"
      />
      <IcButton slot="actions">Add to order</IcButton>
    </IcDrawer>,
  name: "Bottom position",
};

export const Expanded = {
  render: () => <IcDrawer
      heading="Roasted coffee"
      message="Contrary to popular belief, light roast coffee has more caffeine than dark roast coffee. The longer coffee is roasted, the more caffeine is lost through the cooking of the bean. Light roast coffee is a light brown colour and has no oil on the surface of the beans, and these coffees typically have a crisp acidity, a mellow body, and bright flavours."
      expanded
      onIcDrawerExpanded={ev => console.log(ev.detail)}
    >
      <SlottedSVG
          path={mdiCoffee}
          slot="heading-adornment"
          viewBox="0 0 24 24"
      />
      <IcButton slot="actions">Add to order</IcButton>
    </IcDrawer>,
  name: "Expanded",
};

export const ContainedWithinParent = {
  render: () => <div
    style={{
      position: "relative",
      display: "flex",
      border: "1px solid lightgrey",
      flex: 1,
      margin: "32px",
      height: "calc(100vh - 64px)"
    }}>
      <IcDrawer
        heading="Roasted coffee"
        message="Contrary to popular belief, light roast coffee has more caffeine than dark roast coffee. The longer coffee is roasted, the more caffeine is lost through the cooking of the bean. Light roast coffee is a light brown colour and has no oil on the surface of the beans, and these coffees typically have a crisp acidity, a mellow body, and bright flavours."
        boundary="parent"
        onIcDrawerExpanded={ev => console.log(ev.detail)}
      >
        <SlottedSVG
          path={mdiCoffee}
          slot="heading-adornment"
          viewBox="0 0 24 24"
        />
        <IcButton slot="actions">Add to order</IcButton>
      </IcDrawer>
    </div>,
  name: "Contained within parent",
};

export const ManualTrigger = {
  render: () => {
    const toggleDrawer = (position) => {
      const drawer = document.querySelector(`#drawer-${position}`);
      drawer.expanded = !drawer.expanded;
    };

    return (
      <>
        <div style={{ margin: "16px", display: "flex", gap: "16px"}}>
          <IcButton onClick={() => toggleDrawer("right")}>Toggle right drawer</IcButton>
          <IcButton onClick={() => toggleDrawer("left")}>Toggle left drawer</IcButton>
          <IcButton onClick={() => toggleDrawer("top")}>Toggle top drawer</IcButton>
          <IcButton onClick={() => toggleDrawer("bottom")}>Toggle bottom drawer</IcButton>
        </div>
        <IcDrawer
          id="drawer-right"
          heading="Roasted coffee"
          message="Contrary to popular belief, light roast coffee has more caffeine than dark roast coffee. The longer coffee is roasted, the more caffeine is lost through the cooking of the bean. Light roast coffee is a light brown colour and has no oil on the surface of the beans, and these coffees typically have a crisp acidity, a mellow body, and bright flavours."
          trigger="controlled"
          onIcDrawerExpanded={ev => console.log(ev.detail)}
        >
          <SlottedSVG
              path={mdiCoffee}
              slot="heading-adornment"
              viewBox="0 0 24 24"
          />
          <IcButton slot="actions">Add to order</IcButton>
        </IcDrawer>
        <IcDrawer
          id="drawer-left"
          heading="Roasted coffee"
          message="Contrary to popular belief, light roast coffee has more caffeine than dark roast coffee. The longer coffee is roasted, the more caffeine is lost through the cooking of the bean. Light roast coffee is a light brown colour and has no oil on the surface of the beans, and these coffees typically have a crisp acidity, a mellow body, and bright flavours."
          position="left"
          trigger="controlled"
          onIcDrawerExpanded={ev => console.log(ev.detail)}
        >
          <SlottedSVG
              path={mdiCoffee}
              slot="heading-adornment"
              viewBox="0 0 24 24"
          />
          <IcButton slot="actions">Add to order</IcButton>
        </IcDrawer>
        <IcDrawer
          id="drawer-top"
          heading="Roasted coffee"
          message="Contrary to popular belief, light roast coffee has more caffeine than dark roast coffee. The longer coffee is roasted, the more caffeine is lost through the cooking of the bean. Light roast coffee is a light brown colour and has no oil on the surface of the beans, and these coffees typically have a crisp acidity, a mellow body, and bright flavours."
          position="top"
          trigger="controlled"
          onIcDrawerExpanded={ev => console.log(ev.detail)}
        >
          <SlottedSVG
              path={mdiCoffee}
              slot="heading-adornment"
              viewBox="0 0 24 24"
          />
          <IcButton slot="actions">Add to order</IcButton>
        </IcDrawer>
        <IcDrawer
          id="drawer-bottom"
          heading="Roasted coffee"
          message="Contrary to popular belief, light roast coffee has more caffeine than dark roast coffee. The longer coffee is roasted, the more caffeine is lost through the cooking of the bean. Light roast coffee is a light brown colour and has no oil on the surface of the beans, and these coffees typically have a crisp acidity, a mellow body, and bright flavours."
          position="top"
          trigger="controlled"
          onIcDrawerExpanded={ev => console.log(ev.detail)}
        >
          <SlottedSVG
              path={mdiCoffee}
              slot="heading-adornment"
              viewBox="0 0 24 24"
          />
          <IcButton slot="actions">Add to order</IcButton>
        </IcDrawer>
      </>
    )
  },
  name: "Manual trigger",
};

export const ManualTriggerContainedWithinParent = {
  render: () => {
    const toggleDrawer = (position) => {
      const drawer = document.querySelector(`#drawer-${position}`);
      drawer.expanded = !drawer.expanded;
    };

    return (
      <div style={{ display: "flex", flexDirection: "column", height: "100vh" }}>
        <div style={{ margin: "32px 32px 0 32px", display: "flex", gap: "16px"}}>
          <IcButton onClick={() => toggleDrawer("right")}>Toggle right drawer</IcButton>
          <IcButton onClick={() => toggleDrawer("left")}>Toggle left drawer</IcButton>
          <IcButton onClick={() => toggleDrawer("top")}>Toggle top drawer</IcButton>
          <IcButton onClick={() => toggleDrawer("bottom")}>Toggle bottom drawer</IcButton>
        </div>
        <div
        style={{ position: "relative", display: "flex", border: "1px solid lightgrey", flex: 1, margin: "32px" }}
      >
        <IcDrawer
          id="drawer-right"
          heading="Roasted coffee"
          message="Contrary to popular belief, light roast coffee has more caffeine than dark roast coffee. The longer coffee is roasted, the more caffeine is lost through the cooking of the bean. Light roast coffee is a light brown colour and has no oil on the surface of the beans, and these coffees typically have a crisp acidity, a mellow body, and bright flavours."
          trigger="controlled"
          boundary="parent"
          onIcDrawerExpanded={ev => console.log(ev.detail)}
        >
          <SlottedSVG
            path={mdiCoffee}
            slot="heading-adornment"
            viewBox="0 0 24 24"
          />
          <IcButton slot="actions">Add to order</IcButton>
        </IcDrawer>
        <IcDrawer
          id="drawer-left"
          heading="Roasted coffee"
          message="Contrary to popular belief, light roast coffee has more caffeine than dark roast coffee. The longer coffee is roasted, the more caffeine is lost through the cooking of the bean. Light roast coffee is a light brown colour and has no oil on the surface of the beans, and these coffees typically have a crisp acidity, a mellow body, and bright flavours."
          position="left"
          trigger="controlled"
          boundary="parent"
          onIcDrawerExpanded={ev => console.log(ev.detail)}
        >
          <SlottedSVG
              path={mdiCoffee}
              slot="heading-adornment"
              viewBox="0 0 24 24"
          />
          <IcButton slot="actions">Add to order</IcButton>
        </IcDrawer>
        <IcDrawer
          id="drawer-top"
          heading="Roasted coffee"
          message="Contrary to popular belief, light roast coffee has more caffeine than dark roast coffee. The longer coffee is roasted, the more caffeine is lost through the cooking of the bean. Light roast coffee is a light brown colour and has no oil on the surface of the beans, and these coffees typically have a crisp acidity, a mellow body, and bright flavours."
          position="top"
          trigger="controlled"
          boundary="parent"
          onIcDrawerExpanded={ev => console.log(ev.detail)}
        >
          <SlottedSVG
              path={mdiCoffee}
              slot="heading-adornment"
              viewBox="0 0 24 24"
          />
          <IcButton slot="actions">Add to order</IcButton>
        </IcDrawer>
        <IcDrawer
          id="drawer-bottom"
          heading="Roasted coffee"
          message="Contrary to popular belief, light roast coffee has more caffeine than dark roast coffee. The longer coffee is roasted, the more caffeine is lost through the cooking of the bean. Light roast coffee is a light brown colour and has no oil on the surface of the beans, and these coffees typically have a crisp acidity, a mellow body, and bright flavours."
          position="bottom"
          trigger="controlled"
          boundary="parent"
          onIcDrawerExpanded={ev => console.log(ev.detail)}
        >
          <SlottedSVG
              path={mdiCoffee}
              slot="heading-adornment"
              viewBox="0 0 24 24"
          />
          <IcButton slot="actions">Add to order</IcButton>
        </IcDrawer>
        </div>
      </div>
    )
  },
  name: "Manual trigger - contained within parent",
};

export const Small = {
  render: () => <IcDrawer
      heading="Roasted coffee"
      message="Contrary to popular belief, light roast coffee has more caffeine than dark roast coffee. The longer coffee is roasted, the more caffeine is lost through the cooking of the bean. Light roast coffee is a light brown colour and has no oil on the surface of the beans, and these coffees typically have a crisp acidity, a mellow body, and bright flavours."
      size="small"
      onIcDrawerExpanded={ev => console.log(ev.detail)}
    >
      <SlottedSVG
          path={mdiCoffee}
          slot="heading-adornment"
          viewBox="0 0 24 24"
      />
      <IcButton slot="actions">Add to order</IcButton>
    </IcDrawer>,
  name: "Small",
};

export const Large = {
  render: () => <IcDrawer
      heading="Roasted coffee"
      message="Contrary to popular belief, light roast coffee has more caffeine than dark roast coffee. The longer coffee is roasted, the more caffeine is lost through the cooking of the bean. Light roast coffee is a light brown colour and has no oil on the surface of the beans, and these coffees typically have a crisp acidity, a mellow body, and bright flavours."
      size="large"
      onIcDrawerExpanded={ev => console.log(ev.detail)}
    >
      <SlottedSVG
          path={mdiCoffee}
          slot="heading-adornment"
          viewBox="0 0 24 24"
      />
      <IcButton slot="actions">Add to order</IcButton>
    </IcDrawer>,
  name: "Large",
};

export const SlottedContent = {
  render: () => {
    const [popoverOpen, setPopoverOpen] = useState(false);
    const showPopover = () => setPopoverOpen(true);
    const handlePopoverClosed = () => setPopoverOpen(false);

    return(
    <IcDrawer onIcDrawerExpanded={ev => console.log(ev.detail)}>
      <SlottedSVG
          path={mdiCoffee}
          slot="heading-adornment"
          viewBox="0 0 24 24"
      />
      <IcTypography slot="heading" variant="h4">
        <h4>Roasted coffee</h4>
      </IcTypography>
      <div>
        <IcTypography>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </IcTypography>
        <br />
        <IcTooltip label="This is a description of the button">
          <IcButton>
            Button with tooltip
          </IcButton>
        </IcTooltip>
        <IcButton
          variant="icon-primary"
          aria-label="This is a description of the button"
          tooltip-placement="top"
        >
          <SlottedSVG
            path={mdiRefresh}
            viewBox="0 0 24 24"
          />
        </IcButton>
        <br />
        <br />
        <IcAccordion heading="This is an accordion">
          <IcCheckbox label="Agree" value="confirm" additionalFieldDisplay="static">
            <IcTextField
              slot="additional-field"
              placeholder="Placeholder"
              label="What's your favourite type of coffee?"
            />
          </IcCheckbox>
          <br />
          <IcRadioGroup label="This is a label" name="1">
            <IcRadioOption
              value="valueName1"
              label="Unselected / Default"
              additionalFieldDisplay="dynamic"
            >
              <IcTextField
                slot="additional-field"
                placeholder="Placeholder"
                label="What's your favourite type of coffee?"
              />
            </IcRadioOption>
            <IcRadioOption
              value="valueName2"
              label="Selected / Default"
              additionalFieldDisplay="static"
              selected
            >
              <IcTextField
                slot="additional-field"
                placeholder="Placeholder"
                label="What's your favourite type of coffee?"
              />
            </IcRadioOption>
            <IcRadioOption
              value="valueName3"
              label="Unselected / Disabled"
              disabled
            />
          </IcRadioGroup>
        </IcAccordion>
        <br />
        <IcSearchBar label="What is your favourite coffee?" />
        <br />
        <IcTextField label="What is your favourite coffee?" />
        <br />
        <IcSelect
          id="sel1"
          label="What is your favourite coffee?"
          placeholder="Placeholder goes here"
          options={selectOptions}
        />
      <br />
      <IcButton id="button-1" onClick={showPopover}>
        Show popover
      </IcButton>
      <div>
        <IcPopoverMenu anchor="button-1" aria-label="popover" open={popoverOpen} onIcPopoverClosed={handlePopoverClosed}>
          <IcMenuItem label="Copy code" disabled />
          <IcMenuGroup label="View">
            <IcMenuItem
              label="Zoom in"
              keyboardShortcutLabel="Cmd+"
            />
          </IcMenuGroup>
          <IcMenuItem
            label="Actions"
            submenuTriggerFor="abc"
          />
        </IcPopoverMenu>
        <IcPopoverMenu submenuId="abc">
          <IcMenuItem
            label="Find"
            submenuTriggerFor="abc123"
          />
        </IcPopoverMenu>
        <IcPopoverMenu submenuId="abc123">
          <IcMenuItem
            disabled
            label="Search the web"
            description="This will search the web to find the thing you are looking for."
          />
          <IcMenuItem label="Find icons">
            <svg
              slot="icon"
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 0 24 24"
              width="24px"
            >
              <path d="M0 0h24v24H0V0z" fill="none" />
              <path
                d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"
              />
            </svg>
          </IcMenuItem>
        </IcPopoverMenu>
        </div>
        <br />
        <IcCheckboxGroup
          hideLabel
          label="confirm"
          name="confirm-checkbox"
        >
          <IcCheckbox label="Confirm" value="confirm" additionalFieldDisplay="static">
            <IcTextField
              slot="additional-field"
              placeholder="Placeholder"
              label="What's your favourite type of coffee?"
            />
          </IcCheckbox>
          <IcCheckbox additionalFieldDisplay="dynamic" value="disagree" label="Disagree">
            <IcTextField
              slot="additional-field"
              placeholder="Placeholder"
              label="What's your favourite type of coffee?"
            />
          </IcCheckbox>
          <IcCheckbox label="Disabled" value="disabled" disabled></IcCheckbox>
        </IcCheckboxGroup>
        <br />
        <IcActionChip label="Default"></IcActionChip>
        <IcChip label="Default" dismissible="true">
          <SlottedSVG
            slot="icon"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM10 3C11.66 3 13 4.34 13 6C13 7.66 11.66 9 10 9C8.34 9 7 7.66 7 6C7 4.34 8.34 3 10 3ZM10 17.2C7.5 17.2 5.29 15.92 4 13.98C4.03 11.99 8 10.9 10 10.9C11.99 10.9 15.97 11.99 16 13.98C14.71 15.92 12.5 17.2 10 17.2Z"
            />
          </SlottedSVG>
        </IcChip>
        <br />
        <br />
        <IcSwitch label="Switch label" />
        <br />
        <br />
        <IcTabContext
          onIcTabSelect={(ev) =>
            console.log({
              tabIndex: ev.detail.tabIndex,
              tabLabel: ev.detail.tabLabel,
            })
          }
        >
          <IcTabGroup label="Example tab group">
            <IcTab>Ingredients</IcTab>
            <IcTab>Method</IcTab>
            <IcTab>History</IcTab>
          </IcTabGroup>
          <IcTabPanel>Tab One - Ingredients</IcTabPanel>
          <IcTabPanel>Tab Two - Method</IcTabPanel>
          <IcTabPanel>Tab Three - History</IcTabPanel>
        </IcTabContext>
        <br />
      </div>
      <IcButton slot="actions">Add to order</IcButton>
    </IcDrawer>
  )},
  name: "Slotted content",
};

export const ShowHideInteractiveElements = {
  render: () => <IcDrawer
      heading="Roasted coffee"
      message="Contrary to popular belief, light roast coffee has more caffeine than dark roast coffee. The longer coffee is roasted, the more caffeine is lost through the cooking of the bean. Light roast coffee is a light brown colour and has no oil on the surface of the beans, and these coffees typically have a crisp acidity, a mellow body, and bright flavours."
      onIcDrawerExpanded={ev => console.log(ev.detail)}
    >
      <SlottedSVG
          path={mdiCoffee}
          slot="heading-adornment"
          viewBox="0 0 24 24"
      />
      <ShowHideContent />
      <IcButton slot="actions">Add to order</IcButton>
    </IcDrawer>,
  name: "Show / hide interactive elements",
}

export const Playground = {
  render: (args) => {
    const [drawerExpanded, setDrawerExpanded] = useState(args.expanded);

    // Prevents Storybook-only issue where drawer would close when slotted elements are updated
    useEffect(() => {
      setDrawerExpanded(args.expanded);
    }, [args.expanded]);

    return (
      <div style={{ display: "flex", height: "100%" }}>
        <IcSideNavigation
          appTitle="Déja-brew"
          status="alpha"
          version="v0.0.7"
        >
          <SlottedSVG
            slot="app-icon"
            xmlns="http://www.w3.org/2000/svg"
            height={24}
            width={24}
            viewBox="0 0 24 24"
            fill="#000000"
          >
            <path d="M0 0h24v24H0V0z" fill="none" />
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-5.5-2.5l7.51-3.49L17.5 6.5 9.99 9.99 6.5 17.5zm5.5-6.6c.61 0 1.1.49 1.1 1.1s-.49 1.1-1.1 1.1-1.1-.49-1.1-1.1.49-1.1 1.1-1.1z" />
          </SlottedSVG>
          <IcNavigationItem slot="primary-navigation" href="/" label="Home">
            <SlottedSVG
              slot="icon"
              width={24}
              height={24}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 6.19L17 10.69V18.5H15V12.5H9V18.5H7V10.69L12 6.19ZM12 3.5L2 12.5H5V20.5H11V14.5H13V20.5H19V12.5H22L12 3.5Z"
                fill="currentColor"
              />
            </SlottedSVG>
          </IcNavigationItem>
        </IcSideNavigation>
        <div style={{ display: "flex", flexDirection: "column", flexGrow: 1 }}>
          <main id="main" style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
            <IcPageHeader
              heading="Latte recipe"
              subheading="A latte is a popular Italian coffee, made with espresso, steamed milk and a thin layer of foam."
              aligned="center"
            />
            <div style={{ display: "flex", flex: 1, position: "relative" }}>
            <IcSectionContainer aligned="center"><IcTypography>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla et odio metus. Quisque pharetra at elit et bibendum. Vivamus pellentesque lacus vel facilisis tincidunt. Aliquam erat volutpat. Pellentesque mi ligula, aliquet eget lacinia dignissim, euismod non sapien. Fusce ac lorem eget nisi tincidunt imperdiet. Sed sed ipsum pellentesque, feugiat ligula ut, placerat nisl. Nulla gravida faucibus elit ut laoreet. Nam sagittis lacinia eros a aliquet. Cras in massa condimentum, auctor turpis vestibulum, imperdiet libero. Integer arcu purus, ultricies sit amet felis vel, ullamcorper semper lectus. Proin ultrices tortor sed velit mattis facilisis. Integer rutrum nec nulla at fringilla. Duis a nibh ut tellus venenatis tincidunt a vel quam.
                </p>
              </IcTypography>
              <br />
              {args.trigger === 'controlled' && (
                <IcButton variant="secondary" onClick={() => setDrawerExpanded(!drawerExpanded)}>Learn more about roasted coffee</IcButton>
              )}
            </IcSectionContainer>
            <IcDrawer
              boundary={args.boundary}
              chevronButtonAriaLabel={args.chevronButtonAriaLabel}
              closeButtonAriaLabel={args.closeButtonAriaLabel}
              closeOnBackdropClick={args.closeOnBackdropClick}
              expanded={drawerExpanded}
              heading={args.heading}
              hideCloseButton={args.hideCloseButton}
              message={args.message}
              position={args.position}
              size={args.size}
              theme={args.theme}
              trigger={args.trigger}
              onIcDrawerExpanded={ev => setDrawerExpanded(ev.detail.expanded)}
              style={{
                "--ic-drawer-width": `${args["--ic-drawer-width"]}`,
                "--ic-drawer-height": `${args["--ic-drawer-height"]}`
              }}
            >
              {args.headingAdornmentSlot && (
                <SlottedSVG
                  path={mdiCoffee}
                  slot="heading-adornment"
                  viewBox="0 0 24 24"
                />
              )}
              {args.headingSlot && (
                <IcTypography slot="heading" variant="h4">
                  <h4>(Slotted) Roasted coffee</h4>
                </IcTypography>
              )}
              {args.messageSlot && (
                <IcTypography slot="message">
                  <p>
                    (Slotted)
                    <br />
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ut pharetra tortor, sed lacinia lectus. Aliquam elementum risus ipsum, sit amet tincidunt elit pharetra quis.
                      <br />
                      <br />
                      <IcButton>Lorem ipsum</IcButton>
                      <br />
                      <br />
                      Morbi maximus dolor sit amet nulla feugiat, sed congue ligula dignissim. Nullam ac augue nec erat suscipit scelerisque. Aliquam at tellus fringilla, faucibus est posuere, convallis magna. Integer vel ornare lectus. Vestibulum convallis mauris vel quam vehicula maximus. Fusce et consequat lacus, non auctor tellus. In ut lacus aliquet, accumsan tellus a, volutpat ante. Aliquam erat volutpat. Nam non lectus mauris. In eu libero ut augue viverra accumsan. Praesent non felis tortor. Nullam rutrum odio justo, bibendum pulvinar leo dictum a. Donec sodales sagittis ultricies. Duis posuere a mauris vitae auctor. Pellentesque porta, massa ac pellentesque feugiat, diam mauris commodo neque, quis gravida risus est sit amet lacus. Fusce rhoncus leo nec lobortis mattis. Donec risus leo, eleifend efficitur purus ac, sollicitudin dictum neque. Suspendisse potenti. Etiam mattis felis nisi, non laoreet ipsum sollicitudin at. Quisque metus nibh, imperdiet nec euismod a, convallis et sem. Maecenas cursus porttitor fringilla. Ut gravida ante at orci sagittis tincidunt. Integer porta nisl nisi, in vehicula felis aliquet sit amet. Praesent eleifend libero in vulputate convallis. Aenean aliquet ante a venenatis convallis. Donec quis felis semper, imperdiet tellus eu, imperdiet nisi. Sed aliquet felis nec tellus aliquet, et sodales sem varius. Etiam justo mauris, dapibus a ornare id, volutpat sit amet orci. Nam eu condimentum tortor, rhoncus fermentum nunc. Duis mollis justo a tortor tempus dictum. Quisque vulputate, risus non tempor varius, eros velit rutrum dui, non gravida elit erat eget ex. Ut cursus congue enim eget eleifend. Nullam iaculis neque non ligula aliquam, vitae rutrum arcu ultrices. Etiam porttitor condimentum dolor, ut luctus risus condimentum sit amet. Duis faucibus commodo leo nec bibendum. Nam faucibus, lectus vitae pulvinar ullamcorper, risus orci tempus sapien, varius pulvinar nulla odio eget ipsum. Mauris vestibulum sem vitae lectus feugiat, in tincidunt neque fringilla. Fusce lacus eros, elementum sit amet sapien et, congue venenatis metus. Nullam mauris velit, pharetra et ligula faucibus, pulvinar luctus nisl. Etiam ante odio, fermentum ac accumsan eget, luctus a libero. Phasellus maximus risus ac viverra scelerisque.
                  </p>
                </IcTypography>
              )}
              {args.actionsSlot && (
                <>
                  <IcButton slot="actions" variant="secondary">Learn even more</IcButton>
                  <IcButton slot="actions" variant="secondary">Add to favourites</IcButton>
                  <IcButton slot="actions">Add to order</IcButton>
                </>
              )}
            </IcDrawer>
            </div>
          </main>
          <IcFooter
            aligned="center"
            caption="This information is exempt under the Freedom of Information Act 2000 (FOIA) and may be exempt under other UK information legislation."
            description="This pattern was built using the Intelligence Community Design System (ICDS)."
          />
        </div>
      </div>
    )
  },
  name: "Playground",
  args: defaultArgs,
  argTypes: {
    boundary: {
      options: ["viewport", "parent"],
      control: {
        type: "inline-radio",
      },
    },
    position: {
      options: ["top", "bottom", "left", "right"],
      control: {
        type: "inline-radio",
      },
    },
    size: {
      options: ["small", "medium", "large"],
      control: {
        type: "inline-radio",
      },
    },
    theme: {
      options: ["inherit", "light", "dark"],
      control: {
        type: "inline-radio"
      },
    },
    trigger: {
      options: ["arrow", "controlled"],
      control: {
        type: "inline-radio",
      },
    },
  }
}
