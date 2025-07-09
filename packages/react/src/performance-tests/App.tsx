import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";

import IcButtonSinglePage from "./pages/IcButton/IcButtonSingle";
import IcButtonMultiplePage from "./pages/IcButton/IcButtonMultiple";
import IcButtonVariantsPage from "./pages/IcButton/IcButtonVariants";
import IcButtonEventsPage from "./pages/IcButton/IcButtonWithEvents";
import IcCheckboxSinglePage from "./pages/IcCheckbox/IcCheckboxSingle";
import IcCheckboxMultiplePage from "./pages/IcCheckbox/IcCheckboxMultiple";
import IcCheckboxBasicMultiplePage from "./pages/IcCheckbox/IcCheckboxBasicMultiple";
import IcSideNavigationPage from "./pages/IcSideNavigation/IcSideNavigationClosed";
import IcSideNavigationExpandedPage from "./pages/IcSideNavigation/IcSideNavigationExpanded";
import IcTopNavigationBasicPage from "./pages/IcTopNavigation/IcTopNavigationBasic";
import IcTopNavigationPage from "./pages/IcTopNavigation/IcTopNavigationWithNavigation";
import IcPopoverMenuSinglePage from "./pages/IcPopoverMenu/IcPopoverMenuSingle";
import IcPopoverMenuMultiplePage from "./pages/IcPopoverMenu/IcPopoverMenuMultiple";
import IcPopoverMenuNotRenderedPage from "./pages/IcPopoverMenu/IcPopoverMenuMultipleNotRendered";
import IcAccordionSinglePage from "./pages/IcAccordion/IcAccordionSingle";
import IcAccordionMultiplePage from "./pages/IcAccordion/IcAccordionMultiple";
import IcDialogSinglePage from "./pages/IcDialog/IcDialogSingle";
import IcDialogSlottedContentPage from "./pages/IcDialog/IcDialogSlottedContent";
import IcDialogMultiplePage from "./pages/IcDialog/IcDialogMultiple";
import IcDialogAllOpenPage from "./pages/IcDialog/IcDialogAllOpen";
import IcSelectSinglePage from "./pages/IcSelect/Single/IcSelectSingle";
import IcSelectVariantsPage from "./pages/IcSelect/Single/IcSelectVariants";
import IcSelectMultiplePage from "./pages/IcSelect/Single/IcSelectMultiple";
import IcSearchableSelectSinglePage from "./pages/IcSelect/Searchable/IcSelectSearchableSingle";
import IcSelectSearchableVariantsPage from "./pages/IcSelect/Searchable/IcSelectSearchableVariants";
import IcSelectSearchableMultiplePage from "./pages/IcSelect/Searchable/IcSelectSearchableMultiple";
import IcSelectMultiSinglePage from "./pages/IcSelect/Multi/IcSelectMultiSingle";
import IcSelectMultiVariantsPage from "./pages/IcSelect/Multi/IcSelectMultiVariants";
import IcSelectMultiMultiplePage from "./pages/IcSelect/Multi/IcSelectMultiMultiple";
import IcSearchBarSinglePage from "./pages/IcSearchBar/IcSearchBarSingle";
import IcSearchBarVariantsPage from "./pages/IcSearchBar/IcSearchBarVariants";
import IcSearchBarMultiplePage from "./pages/IcSearchBar/IcSearchBarMultiple";
import IcRadioSinglePage from "./pages/IcRadio/IcRadioSingle";
import IcRadioVariantsPage from "./pages/IcRadio/IcRadioVariants";
import IcRadioMultiplePage from "./pages/IcRadio/IcRadioMultiple";
import IcToastSinglePage from "./pages/IcToast/IcToastSingle";
import IcToastVariantsPage from "./pages/IcToast/IcToastVariants";
import IcToastMultiplePage from "./pages/IcToast/IcToastMultiple";
import IcHeroPage from "./pages/IcHero";
import IcPageHeaderPage from "./pages/IcPageHeader";
import IcFooterPage from "./pages/IcFooter";
import IcStepperPage from "./pages/IcStepper";

const getThemeFromUrl = () => {
  const hash = window.location.hash;
  const queryIndex = hash.indexOf("?");
  if (queryIndex !== -1) {
    const params = new URLSearchParams(hash.substring(queryIndex));
    const theme = params.get("theme");
    return theme === "dark" ? "dark" : "light";
  }
  return "light";
};

// Using React router to create pages
// HashRouter (https://reactrouter.com/en/main/router-components/hash-router) is used so reloading the page doesn't re-direct to 404
const App = () => {
  const [theme, setTheme] = useState<"light" | "dark">(getThemeFromUrl());

  useEffect(() => {
    const onPopState = () => setTheme(getThemeFromUrl());
    window.addEventListener("popstate", onPopState);
    return () => window.removeEventListener("popstate", onPopState);
  }, []);

  useEffect(() => {
    const colorVar =
      theme === "dark"
        ? "--ic-color-page-background-dark"
        : "--ic-color-background-primary-light";
    document.body.style.backgroundColor = getComputedStyle(document.body)
      .getPropertyValue(colorVar)
      .trim();
  }, [theme]);

  return (
    <>
      <main>
        <Routes>
          <Route path="/">
            <Route
              path="button"
              element={<IcButtonSinglePage theme={theme} />}
            />
            <Route
              path="button-multiple"
              element={<IcButtonMultiplePage theme={theme} />}
            />
            <Route
              path="button-variants"
              element={<IcButtonVariantsPage theme={theme} />}
            />
            <Route
              path="button-events"
              element={<IcButtonEventsPage theme={theme} />}
            />
            <Route
              path="checkbox"
              element={<IcCheckboxSinglePage theme={theme} />}
            />
            <Route
              path="checkbox-multiple"
              element={<IcCheckboxMultiplePage theme={theme} />}
            />
            <Route
              path="checkbox-basic-multiple"
              element={<IcCheckboxBasicMultiplePage theme={theme} />}
            />
            <Route
              path="side-navigation"
              element={<IcSideNavigationPage theme={theme} />}
            />
            <Route
              path="side-navigation-expanded"
              element={<IcSideNavigationExpandedPage theme={theme} />}
            />
            <Route
              path="top-navigation-basic"
              element={<IcTopNavigationBasicPage theme={theme} />}
            />
            <Route
              path="top-navigation"
              element={<IcTopNavigationPage theme={theme} />}
            />
            <Route
              path="popover-menu"
              element={<IcPopoverMenuSinglePage theme={theme} />}
            />
            <Route
              path="popover-menu-multiple"
              element={<IcPopoverMenuMultiplePage theme={theme} />}
            />
            <Route
              path="popover-menu-multiple-not-rendered"
              element={<IcPopoverMenuNotRenderedPage theme={theme} />}
            />
            <Route
              path="accordion"
              element={<IcAccordionSinglePage theme={theme} />}
            />
            <Route
              path="accordion-multiple"
              element={<IcAccordionMultiplePage theme={theme} />}
            />
            <Route
              path="dialog"
              element={<IcDialogSinglePage theme={theme} />}
            />
            <Route
              path="dialog-slotted-content"
              element={<IcDialogSlottedContentPage theme={theme} />}
            />
            <Route
              path="dialog-multiple"
              element={<IcDialogMultiplePage theme={theme} />}
            />
            <Route
              path="dialog-all-open"
              element={<IcDialogAllOpenPage theme={theme} />}
            />
            <Route
              path="select"
              element={<IcSelectSinglePage theme={theme} />}
            />
            <Route
              path="select-variants"
              element={<IcSelectVariantsPage theme={theme} />}
            />
            <Route
              path="select-multiple"
              element={<IcSelectMultiplePage theme={theme} />}
            />
            <Route
              path="searchable-select"
              element={<IcSearchableSelectSinglePage theme={theme} />}
            />
            <Route
              path="searchable-select-variants"
              element={<IcSelectSearchableVariantsPage theme={theme} />}
            />
            <Route
              path="searchable-select-multiple"
              element={<IcSelectSearchableMultiplePage theme={theme} />}
            />
            <Route
              path="multi-select"
              element={<IcSelectMultiSinglePage theme={theme} />}
            />
            <Route
              path="multi-select-variants"
              element={<IcSelectMultiVariantsPage theme={theme} />}
            />
            <Route
              path="multi-select-multiple"
              element={<IcSelectMultiMultiplePage theme={theme} />}
            />
            <Route
              path="searchbar"
              element={<IcSearchBarSinglePage theme={theme} />}
            />
            <Route
              path="searchbar-variants"
              element={<IcSearchBarVariantsPage theme={theme} />}
            />
            <Route
              path="searchbar-multiple"
              element={<IcSearchBarMultiplePage theme={theme} />}
            />
            <Route path="radio" element={<IcRadioSinglePage theme={theme} />} />
            <Route
              path="radio-variants"
              element={<IcRadioVariantsPage theme={theme} />}
            />
            <Route
              path="radio-multiple"
              element={<IcRadioMultiplePage theme={theme} />}
            />
            <Route path="toast" element={<IcToastSinglePage theme={theme} />} />
            <Route
              path="toast-variants"
              element={<IcToastVariantsPage theme={theme} />}
            />
            <Route
              path="toast-multiple"
              element={<IcToastMultiplePage theme={theme} />}
            />
            <Route path="hero" element={<IcHeroPage theme={theme} />} />
            <Route
              path="page-header"
              element={<IcPageHeaderPage theme={theme} />}
            />
            <Route path="footer" element={<IcFooterPage theme={theme} />} />
            <Route path="stepper" element={<IcStepperPage theme={theme} />} />
          </Route>
        </Routes>
      </main>
    </>
  );
};

export default App;
