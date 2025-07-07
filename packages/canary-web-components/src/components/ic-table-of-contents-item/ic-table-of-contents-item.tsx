import { FunctionalComponent, h } from "@stencil/core";

interface IcTableOfContentsItemElement {
  label: string;
  target: string;
  variant: string;
  selected: number;
  position: number;
  updateSelected: (position: number) => void;
  setItemLevelOffset: (variant: string) => string;
  size?: string;
  truncate?: boolean;
  monochrome?: boolean;
}

interface TOCItemProps {
  variant: string;
  label: string;
  target: string;
  selected: number;
  position: number;
  updateSelected: (position: number) => void;
  size?: string;
  truncate?: boolean;
  monochrome?: boolean;
}

const ItemHook = () => {
  // adds offset to the item based on its variant
  // e.g. h2 = 4 + (8*(2-2)) = 4px
  // h3 = 4 + (8*(3-2)) = 12px
  const setItemLevelOffset = (variant: string): string => {
    return `${4 + 8 * (parseInt(variant.split("")[1]) - 2)}px`;
  };

  return { setItemLevelOffset };
};

const ItemComponent: FunctionalComponent<IcTableOfContentsItemElement> = (
  itemProps
) => {
  const {
    label,
    target,
    selected,
    truncate,
    variant,
    position,
    size,
    monochrome,
    updateSelected,
    setItemLevelOffset,
  } = itemProps;

  return (
    <div
      class={`table-of-contents-item  ${
        monochrome && "table-of-contents-item-monochrome"
      }`}
    >
      <a
        id={`${target}-table-of-contents-item-content`}
        onClick={() => updateSelected(position)}
        class={`${selected && "table-of-contents-item-content-selected"}
        ${
          size === "large"
            ? `table-of-contents-item-content-large`
            : `table-of-contents-item-content-default`
        }
        table-of-contents-item-content
       `}
        href={`#${target}`}
      >
        <ic-typography
          id={`${target}-table-of-contents-item-label`}
          bold={selected === position}
          class={`${truncate && "truncated-item-text"}  ${
            size && `table-of-contents-item-content-${size}`
          }`}
          style={{
            paddingLeft: setItemLevelOffset(variant),
          }}
        >
          {label}
        </ic-typography>
      </a>
    </div>
  );
};

export const TableOfContentsItem = (props: TOCItemProps) => {
  const innerProps = ItemHook();
  return <ItemComponent {...props} {...innerProps} />;
};
