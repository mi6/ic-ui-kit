import React, { useEffect, useState, Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";

const IcButtonPage = lazy(() => import("./pages/IcButton/IcButtonSingle"));
const IcButtonMultiplePage = lazy(
  () => import("./pages/IcButton/IcButtonMultiple")
);
const IcButtonVariantsPage = lazy(
  () => import("./pages/IcButton/IcButtonVariants")
);
const IcButtonEventListenersPage = lazy(
  () => import("./pages/IcButton/IcButtonWithEventListeners")
);
const IcCheckboxPage = lazy(
  () => import("./pages/IcCheckbox/IcCheckboxSingle")
);
const IcCheckboxMultiplePage = lazy(
  () => import("./pages/IcCheckbox/IcCheckboxMultiple")
);
const IcCheckboxBasicMultiplePage = lazy(
  () => import("./pages/IcCheckbox/IcCheckboxBasicMutliple")
);
const IcSideNavigationPage = lazy(
  () => import("./pages/IcSideNavigation/IcSideNavigationClosed")
);
const IcSideNavigationExpandedPage = lazy(
  () => import("./pages/IcSideNavigation/IcSideNavigationExpanded")
);
const IcTopNavigationBasicPage = lazy(
  () => import("./pages/IcTopNavigation/IcTopNavigationBasic")
);
const IcTopNavigationPage = lazy(
  () => import("./pages/IcTopNavigation/IcTopNavigationWithNavigation")
);
const IcPopoverMenuPage = lazy(
  () => import("./pages/IcPopoverMenu/IcPopoverMenuSingle")
);
const IcPopoverMenuMultiplePage = lazy(
  () => import("./pages/IcPopoverMenu/IcPopoverMenuMultiple")
);
const IcPopoverMenuNotRenderedPage = lazy(
  () => import("./pages/IcPopoverMenu/IcPopoverMenuMultipleNotRendered")
);
const IcAccordionPage = lazy(
  () => import("./pages/IcAccordion/IcAccordionSingle")
);
const IcAccordionMultiplePage = lazy(
  () => import("./pages/IcAccordion/IcAccordionMultiple")
);
const IcDialogPage = lazy(() => import("./pages/IcDialog/IcDialogSingle"));
const IcDialogSlottedContentPage = lazy(
  () => import("./pages/IcDialog/IcDialogSlottedContent")
);
const IcDialogMultiplePage = lazy(
  () => import("./pages/IcDialog/IcDialogMultiple")
);
const IcDialogAllOpenPage = lazy(
  () => import("./pages/IcDialog/IcDialogAllOpen")
);
const IcSelectPage = lazy(
  () => import("./pages/IcSelect/Single/IcSelectSingle")
);
const IcSelectVariantsPage = lazy(
  () => import("./pages/IcSelect/Single/IcSelectVariants")
);
const IcSelectMultiplePage = lazy(
  () => import("./pages/IcSelect/Single/IcSelectMultiple")
);
const IcSearchableSelectPage = lazy(
  () => import("./pages/IcSelect/Searchable/IcSelectSearchableSingle")
);
const IcSelectSearchableVariantsPage = lazy(
  () => import("./pages/IcSelect/Searchable/IcSelectSearchableVariants")
);
const IcSelectSearchableMultiplePage = lazy(
  () => import("./pages/IcSelect/Searchable/IcSelectSearchableMultiple")
);
const IcSelectMultiPage = lazy(
  () => import("./pages/IcSelect/Multi/IcSelectMultiSingle")
);
const IcSelectMultiVariantsPage = lazy(
  () => import("./pages/IcSelect/Multi/IcSelectMultiVariants")
);
const IcSelectMultiMultiplePage = lazy(
  () => import("./pages/IcSelect/Multi/IcSelectMultiMultiple")
);
const IcSearchBarPage = lazy(
  () => import("./pages/IcSearchBar/IcSearchBarSingle")
);
const IcSearchBarVariantsPage = lazy(
  () => import("./pages/IcSearchBar/IcSearchBarVariants")
);
const IcSearchBarMultiplePage = lazy(
  () => import("./pages/IcSearchBar/IcSearchBarMultiple")
);
const IcRadioPage = lazy(() => import("./pages/IcRadio/IcRadioSingle"));
const IcRadioVariantsPage = lazy(
  () => import("./pages/IcRadio/IcRadioVariants")
);
const IcRadioMultiplePage = lazy(
  () => import("./pages/IcRadio/IcRadioMultiple")
);
const IcToastPage = lazy(() => import("./pages/IcToast/IcToastSingle"));
const IcToastVariantsPage = lazy(
  () => import("./pages/IcToast/IcToastVariants")
);
const IcToastMultiplePage = lazy(
  () => import("./pages/IcToast/IcToastMultiple")
);
const IcHeroPage = lazy(() => import("./pages/IcHero"));
const IcPageHeaderPage = lazy(() => import("./pages/IcPageHeader"));
const IcFooterPage = lazy(() => import("./pages/IcFooter"));
// const IcStepperPage = lazy(() => import("./pages/IcStepper"));

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
        ? "--ic-color-background-primary-dark"
        : "--ic-color-background-primary-light";
    document.body.style.backgroundColor = getComputedStyle(document.body)
      .getPropertyValue(colorVar)
      .trim();
  }, [theme]);

  return (
    <>
      <main>
        <Suspense fallback={<div>Loading…</div>}>
          <Routes>
            <Route path="/">
              <Route path="button" element={<IcButtonPage theme={theme} />} />
              <Route
                path="button-multiple"
                element={<IcButtonMultiplePage theme={theme} />}
              />
              <Route
                path="button-variants"
                element={<IcButtonVariantsPage theme={theme} />}
              />
              <Route
                path="button-event-listeners"
                element={<IcButtonEventListenersPage theme={theme} />}
              />
              <Route
                path="checkbox"
                element={<IcCheckboxPage theme={theme} />}
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
                element={<IcPopoverMenuPage theme={theme} />}
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
                element={<IcAccordionPage theme={theme} />}
              />
              <Route
                path="accordion-multiple"
                element={<IcAccordionMultiplePage theme={theme} />}
              />
              <Route path="dialog" element={<IcDialogPage theme={theme} />} />
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
              <Route path="select" element={<IcSelectPage theme={theme} />} />
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
                element={<IcSearchableSelectPage theme={theme} />}
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
                element={<IcSelectMultiPage theme={theme} />}
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
                element={<IcSearchBarPage theme={theme} />}
              />
              <Route
                path="searchbar-variants"
                element={<IcSearchBarVariantsPage theme={theme} />}
              />
              <Route
                path="searchbar-multiple"
                element={<IcSearchBarMultiplePage theme={theme} />}
              />
              <Route path="radio" element={<IcRadioPage theme={theme} />} />
              <Route
                path="radio-variants"
                element={<IcRadioVariantsPage theme={theme} />}
              />
              <Route
                path="radio-multiple"
                element={<IcRadioMultiplePage theme={theme} />}
              />
              <Route path="toast" element={<IcToastPage theme={theme} />} />
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
              {/* <Route path="stepper" element={<IcStepperPage theme={theme} />} /> */}
            </Route>
          </Routes>
        </Suspense>
      </main>
    </>
  );
};

export default App;
