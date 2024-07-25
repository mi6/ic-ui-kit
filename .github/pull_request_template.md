<!-- 🙏 Thank you for your contribution, it is greatly appreciated! -->

## Summary of the changes
Tell us, in a few words, what the changes are.

## Related issue
Tell us the issue number. If suggesting an improvement or component, please discuss it with us in an issue first.

## Checklist

### General 

- [ ] Changes to docs package checked and committed.
- [ ] All acceptance criteria reviewed and met. 

### Testing

- [ ] Relevant unit tests and visual regression tests added. 
- [ ] Visual testing against Figma component specification completed. 
- [ ] Playground stories in React Storybook up to date, with any prop changes and additions addressed. 
- [ ] Compare performance of modified components against develop using Performance addon in React Storybook.

### Accessibility 

- [ ] Accessibility Insights FastPass performed.
- [ ] A11y unit test added and yields no issues.
- [ ] A11y plug-in on Storybook yields no issues. 
- [ ] Manual screen reader testing performed using NVDA and VoiceOver. 
- [ ] Manual keyboard testing for keyboard controls and logical focus order. 
- [ ] Correct roles used and ARIA attributes used correctly where required. 
- [ ] Logical heading structure is maintained, and the HTML elements used for headings can be changed to fit within the wider page structure. 

### Resize/zoom behaviour 

- [ ] Page can be zoomed to 400% with no loss of content. 
- [ ] Screen magnifier used with no issues. 
- [ ] Text resized to 200% with no loss of content.
- [ ] Text spacing increased as per the [WCAG 1.4.12 success criterion](https://www.w3.org/TR/WCAG21/#text-spacing) with no loss of content.

### System modes

- [ ] Browser setting 'prefers reduced motion' tested. No animations or motion visible whilst this setting is on. 
- [ ] Windows High Contrast mode tested with no loss of content.
- [ ] System light and dark mode tested with no loss of content.
- [ ] Browser support tested (Chrome, Safari, Firefox and Edge). 

### Testing content extremes

- [ ] Min/max content examples tested with no loss of content or overflow. 
- [ ] All prop combinations work without issue. 
- [ ] Tested for FOUC (Flash of Unstyled Content) in both SSR (Server-Side Rendering) and SSG (Static Site Generation) settings.
- [ ] Controlled and uncontrolled input components tested.
- [ ] Props/slots can be updated after initial render.