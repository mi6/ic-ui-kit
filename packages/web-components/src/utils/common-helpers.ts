import purifier from "dompurify";
import { IC_CUSTOM_ALLOWED_COMPONENTS } from "./constants";

/* istanbul ignore next */
const getCustomElementHandling = (allowICPrefix: boolean) => ({
  CUSTOM_ELEMENT_HANDLING: {
    tagNameCheck: (tagName: string) =>
      (allowICPrefix && tagName.startsWith("ic-")) ||
      IC_CUSTOM_ALLOWED_COMPONENTS.includes(tagName),
    attributeNameCheck: /.*/,
  },
});

export const sanitizeHTMLString = (html: string): string => {
  return purifier.sanitize(html, getCustomElementHandling(true));
};

export const sanitizeHTMLIconString = (html: string): string => {
  return purifier.sanitize(html, getCustomElementHandling(false));
};
