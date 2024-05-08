# Pull request checklist guide

This guide is designed to go through each of the individual points of the pull request checklist so you can feel confident ticking them off when you contribute.

## General

### Changes to docs package checked and committed

When running a `npm run build`, the `docs.json` file gets updated.

If you have made a component change, such as adding or updating a slot/prop/event, the `docs.json` should contain changes that are necessary to update the `@ukic/docs` package.

If your changes update the `docs.json` with more than just a date/time change, then you should commit this file under the docs scope and not alongside your web components or react changes e.g. `docs(docs): update to docs.json`.

This also applies to canary components, where the `docs.json` in `canary-docs` should be updated.

### All acceptance criteria reviewed and met

If you have added a new feature, or fixed a bug, it is likely that in the ticket you followed, there was an acceptance criteria section. Any acceptance criteria within that section should be met, or discussed with the author of the issue.

## Testing

### Relevant unit tests and visual regression tests added

If you have added a new feature, or fixed a bug, you might want to add tests to ensure nothing affects this new behaviour in the future.

For information on writing unit tests, we have a [testing guide](TESTING.md) available. The coverage of unit tests should always be over 80%.

Visual regression tests are added using the `compareSnapshot` command in Cypress. Where a component has resize behaviour and displays differently at breakpoints, visual tests should be added for each breakpoint with reasonable visual differences e.g. mobile breakpoint and desktop breakpoint.

### Visual testing against Figma component specification completed

To ensure that any changes you've made match up with the original designs, you should always check the Figma file for if there are any visual differences.

To test this, you should check for:

- Padding
- Margins
- Colours
- Hover states
- Active states
- Prop names
- Figma Prototype functionality vs. implemented functionality

## Accessibility

### Accessibility Insights FastPass performed

[Accessibility Insights](https://accessibilityinsights.io/) is a tool that helps pick out any accessibility issues within web apps and sites.

Accessibility Insights offers a FastPass service which identifies common high-impact issues within five minutes. To complete a FastPass, Accessibility Insights offers a [FastPass guide](https://accessibilityinsights.io/docs/web/getstarted/fastpass/).

### A11y unit test added and yields no issues

For every visual regression test added in Cypress, we advise adding an accessibility check.
This means that for every `compareSnapshot` command you add, you should also add a `checkA11yWithWait` command.

### A11y plug-in on Storybook yields no issues

As an extra check for any accessibility failures we've utilised the [Storybook accessibility addon](https://storybook.js.org/addons/@storybook/addon-a11y).

When running Storybook, this can be accessed in the 'Accessibility' tab in the popout menu. There should be no violations on any Storybook page.

### Manual screen reader testing performed using NVDA and VoiceOver

Screen readers are an important part of app usage for blind users, partially-sighted users, or users with reading disorders. For that reason, it's important to ensure that any changes you make to our components has no negative impact on the screen reader functionality.

To cover any potential screen reader issues, we suggest testing the components using NVDA and VoiceOver (for macOS). If you don't have access to either of these tools, please leave a comment on your contribution and a member of the ICDS team will reach out.

To test using a screen reader, use tabs, arrow keys, spacebar and enter to navigate as you would as a standard keyboard user. To ensure non-focusable content is read out how you would expect, use up/down arrows on NVDA or the modifier key + left/right arrows on VoiceOver.

These are the common things you should look out for when screen reader testing:

- Page content should be read aloud
- Relevant semantic information should be read aloud
- The navigation/reading order should make logical sense - this can be tested by viewing the elements list (Insert+F7 for NVDA, and the modifier key + U for VoiceOver)
- Images/icons should have alt text or aria labels
- Components with disabled state should announce it's state
- Components that open or expand should announce the new state of the component
- Components that can be selected or checked should announce the new state of the component
- Components in a group should have the group information read aloud as well as the information on the component itself

### Manual keyboard testing for keyboard controls and logical focus order

The [W3C guidance](https://www.w3.org/WAI/WCAG21/Understanding/focus-order.html) explains that it is a WCAG 2.1 Level A criteria to be able to navigate sequentially where focus is in an order that preserves meaning and operability.

To ensure that this functionality is met, the DOM order should match the visual order. If your changes include dynamic content (e.g. the additional field in radio buttons/checkboxes), the dynamic content should immediately follow its trigger in the DOM.

You should test that each of these common keyboard functions works as expected:

- `TAB` moves forward through interactive elements.
- `SHIFT + TAB` moves backwards through interactive elements.
- `ENTER` activates a link or button or selects an option.
- `SPACE` activates a button, checks or unchecks a checkbox, expands a dropdown menu.
- `UP` and `DOWN` arrows move through radio button options, menu options and autocomplete options.
- `SPACE` and `SHIFT + SPACE` will scroll up or down by page, unless you currently have a form control focused.
- `ESC` closes a dialogue box.

### Correct roles used and ARIA attributes used correctly where required

Roles within components help to convey the layout of elements on a page e.g. headings/lists. The [W3C guidance](https://www.w3.org/WAI/ARIA/apg/practices/structural-roles/) contains a full list of structural roles available.

If you haven't provided a valid value for the role attribute, it is likely that one of accessibility tests will pick up on it.

ARIA attributes are used to modify state and properties of a component within the accessibility tree. The [Mozilla docs](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes) contain a full list of attributes available.

Common ARIA attributes we use are:

- aria-controls
- aria-disabled
- aria-expanded
- aria-hidden
- aria-owns

### Logical heading structure is maintained

Headings should be structured by their ranks, where `<h1>` is the most important heading and `<h6>` is the least important heading.

It's important that heading ranks aren't skipped e.g. a `<h2>` should not be followed by a `<h4>`.

To ensure this functionality is met, any headings within components should make sense on a page, or they should have a slot option as well as a prop so that the user can change any headings to fit with the wider page structure.

## Resize/zoom behaviour

### Page can be zoomed to 400% with no loss of content

To conform to Level AA of WCAG 2.1, an app must allow the user to zoom to 400% without needing to horizontally scroll.

The [W3C guidance](https://www.w3.org/WAI/WCAG21/Understanding/reflow.html) about this requirement is quite extensive explaining the need for it and techniques to make apps meet this criteria. Our most common approach to fit the criteria is to either use CSS media queries to change component styling depending on screen size, or to use the `max-width` and `height` properties to restrict the size of the component.

To test this, use the built in browser zoom or use the Storybook zoom. Please note: using Storybook zoom does not tell you how zoomed in you are.

### Screen magnifier used with no issues

Similar to the 400% zoom requirement, this point on the checklist requires testing with a screen magnifier to ensure that content correctly overflows and doesn't require horizontal scrolling. There is more useful information in this [online guidance](https://abilitynet.org.uk/factsheets/screen-magnification) about the need for this requirement.

To ensure this requirement is met, the same approaches can be used as with zoom.

To test this:

For Windows, you can switch on the magnifier using the Windows key and ‘+’ and zoom in and out by pressing and holding the Windows key and tapping the ‘+’ or ‘-’ keys. You can switch off the magnifier by pressing the Windows key and ‘Esc’.

For macOS, you can find Zoom under the Accessibility options in ‘Settings’.

### Text resized to 200% with no loss of content

To conform to Level AA of WCAG 2.1, all text should be able to be resized up to 200% without any loss of content or functionality. More information can be found within [WCAG guidance](https://wcag.com/designers/1-4-4-resize-text/).

To ensure this functionality works, we use rem and em values over px in the majority of our sizing variables e.g. `--ic-space-sm`. In cases where our variables are not applicable, rem and em values are still encouraged.

To test, check [how to change font size](https://usability.yale.edu/web-accessibility/articles/zoom-resizing-text) for different browsers. Ensure there is no overlapping text, obscured text or horizontal scrolling.

### Text spacing increased with no loss of content

To conform to Level AA of WCAG 2.1, an app must allow the user to change the spacing of text content and it must still be readable once they have done so.

This involves, firstly, allowing any text spacing changes in a browser (such as via a plug-in) to actually override any existing spacing styling on text, and secondly, ensuring the text spacing changes do not result in loss of content or functionality (such as text being cut off or overflowing onto other elements).

The [W3C guidance](https://www.w3.org/WAI/WCAG21/Techniques/css/C36) for the text spacing requirement states that using the [Text Spacing Bookmarklet](http://www.html5accessibility.com/tests/tsbookmarklet.html) is a sufficient method for testing compliance.

To use this bookmarklet:

1. Go to the bookmarklet page / URL and follow the instructions on the page to save the Text Spacing bookmarklet javascript function as a bookmark on your browser
2. Go to the page on which you want to test the text spacing, e.g. a component story in Storybook
3. With that page open, go to your bookmarks and click on the bookmarklet.
   - Note: You have to do this in the same tab i.e. on Chrome, don't open your Bookmarks Manager page or go to it in a new tab - just click the three dots in the top right, go to Bookmarks and find the bookmarklet in the popover menu. Bookmarklets contain JavaScript code which is run when they are opened, so doing this will execute it on the right page.

Note: If you're using this bookmarklet to test components, it will have to be re-run each time you open a new page.

To ensure there is no loss of content when increasing line spacing, the containing elements of text can either be made:

- Large enough to accommodate for the increase in width and height
- Responsive so that they expand to the size of the text

## System modes

### Browser setting 'prefers reduced motion' tested

Prefers reduced motion is a setting that should turn off any unnecessary animations so that users are not harmed or distracted by motion.

To emulate `prefers-reduced-motion` without changing your operating system, you can utilise DevTools.

1. Open DevTools by right-clicking the webpage, and then selecting Inspect
2. In DevTools, open the Command Menu
   - Usually `Ctrl+Shift+P` or `Cmd+Shift+P`
3. Type `prefers-reduced-motion` and select the 'Emulate CSS prefers-reduced-motion' option

To ensure there is no loss of content when switching to reduced motion, CSS can be applied using the `prefers-reduced-motion` media query.

```css
@media (prefers-reduced-motion: reduce) {
    /* CSS for when motion is reduced */
}
```

### Windows High Contrast mode tested with no loss of content

Windows HCM uses the CSS media feature forced-colors.

Chrome provides the ability to enable / disable the forced-colors feature in the developer tools. There is some [online documentation](https://devtoolstips.org/tips/en/emulate-forced-colors/) which explains how to access these settings.

It is possible that some high contrast modes or dark modes use a different method to the forced-colors feature so it would be important to do some research to double-check this if you are using it to try and emulate Windows HCM for testing.

To ensure there is no loss of content when switching to Windows HCM, CSS can be applied using the `forced-colors` media query.

```css
@media (forced-colors: active) {
    /* CSS for when Windows HCM is enabled */
}
```

### System light and dark mode tested with no loss of content

Most devices provide the option to switch between a light and dark mode.

On some websites, enabling these modes may not actually make a difference to its appearance. This is because the website needs to inform the browser that in can render the site in these modes by using the color-scheme CSS property.

```css
:root {
  color-scheme: light dark;
}
```

An easy way to temporarily add this CSS to an app to allow for system light or dark modes would be to add it in the Styles section of your browser's DevTools.

To ensure there is no loss of content when switching to dark mode, CSS can be applied using the `prefers-color-scheme` media query.

```css
@media (prefers-color-scheme: dark) and (not (forced-colors: active)) {
  /* CSS for when the user's system dark mode is enabled */
}
```

Note: It is important to include the `(not (forced-colors: active))` in the media query to ensure that the CSS doesn't have any effect on elements when Windows High Contrast mode is enabled.

Content should be visible in both light and dark modes, and colour contrast should still meet accessibility standards.

### Browser support tested

We recommend checking any changes you've made to a component in Chrome, Safari, Firefox, and Edge. If you don't have access to some of these browsers, please leave a comment on your contribution and a member of the ICDS team will reach out.

We expect the functionality of the components to work the same across all of these browsers. Common things to check for include tabbing order, focus order and styling. If it isn't working as expected, it might be worth checking browser support for anything you've contributed.

## Testing content extremes

### Min/max content examples tested with no loss of content or overflow

This requirement is to ensure that all use cases of the components are covered.

An example of testing min content could be a button or link with just one letter for text.

An example of testing max content could be adding a long single word app title to side navigation or top navigation to ensure it breaks and overflows at the correct points for each screen size. To fix any issues, it's worth considering whether the content should overflow or truncate.

A Storybook example might want to be added for both min and max content to demonstrate the behaviour.

### All prop combinations work without issue

It's important that all props/slots work within a component without any loss of content or functionality. For example, you should be able to set the status and variant of an `ic-status-tag` and expect to see both props affect the styling of the component rather than just one or the other.

For some components, testing this functionality has been improved by having a Storybook playground to easily try out different prop combinations (e.g. `ic-button` and `ic-select`).

For other components, you can test this functionality by editing Storybook examples or by implementing a Storybook playground for them.

### Tested for FOUC in both SSR and SSG settings

FOUC (or flashing of unstyled content) is where an app or page briefly appears without the correctly styling due to rendering before all the information is received.

It is more likely that unwanted FOUC will appear in the Next.js storybook instance than the React or web components instances. Server-side rendering (SSR) is a key feature of Next.js, and this should more accurately represent a website that may experience FOUC.

When testing any changes, it's still important to check each Storybook for any flashes that may occur.

### Controlled and uncontrolled input components tested

In a controlled component, state handles all the form data. Whereas, in an uncontrolled component, the HTML form element data is managed by only the DOM.

To test this functionality, each input component should have a working useState example (to cover controlled components) and a useRef example (to cover uncontrolled components) in both the React storybook and also Cypress tests.
