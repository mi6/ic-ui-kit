import React, { FC } from "react";

const defaultProps = {
  xmlns: "http://www.w3.org/2000/svg",
};

function slot(name = "") {
  return { ref: (e: any) => (e ? e.setAttribute("slot", name) : null) };
}

export const SlottedSVG: FC<any> = ({
  path,
  slot: slotName,
  children,
  fill = "var(--ic-color-text-primary)",
  ...props
}) => (
  <svg {...slot(slotName)} {...props} {...defaultProps} fill={fill}>
    {!!path && <path d={path} />}
    {children}
  </svg>
);
