import { IcStatusVariants } from "../../utils/types";

export type IcBadgeTypes = "dot" | "text" | "icon";

export type IcBadgePositions = "far" | "near" | "inline";

export type IcBadgeVariants = IcStatusVariants | "light" | "custom";

type RGB = `rgb(${string})`;
type RGBA = `rgba(${string})`;
type HEX = `#${string}`;

export type IcColor = RGB | RGBA | HEX;
