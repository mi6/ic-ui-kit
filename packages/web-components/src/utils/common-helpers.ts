import purifier from "dompurify";
import { IC_ALL_COMPONENTS } from "./constants";

export const sanitizeHTMLString = (html: string): string => {
  return purifier.sanitize(html, {
    ADD_TAGS: IC_ALL_COMPONENTS,
  }) as unknown as string;
};
