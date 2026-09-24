import purifier from "dompurify";
import { IC_CUSTOM_ALLOWED_COMPONENTS } from "./constants";

/* istanbul ignore next */
const getCustomElementHandling = (allowICPrefix: boolean) => ({
  CUSTOM_ELEMENT_HANDLING: {
    tagNameCheck: (tagName: string) =>
      (allowICPrefix && tagName.startsWith("ic-")) ||
      IC_CUSTOM_ALLOWED_COMPONENTS.includes(tagName),
    attributeNameCheck: /^(?!on).+$/i,
  },
});

export const sanitizeHTMLString = (html: string): string => {
  return purifier.sanitize(html, getCustomElementHandling(true));
};

export const sanitizeHTMLIconString = (html: string): string => {
  return purifier.sanitize(html, {
    ALLOWED_TAGS: [
      "svg",
      "path",
      "g",
      "circle",
      "rect",
      "polygon",
      "polyline",
      "line",
      "ellipse",
    ],
    ALLOWED_ATTR: [
      "xmlns",
      "viewBox",
      "width",
      "height",
      "fill",
      "stroke",
      "stroke-width",
      "stroke-linecap",
      "stroke-linejoin",
      "d",
      "cx",
      "cy",
      "r",
      "rx",
      "ry",
      "x",
      "y",
      "points",
      "transform",
      "opacity",
      "aria-hidden",
      "class",
    ],
  });
};
