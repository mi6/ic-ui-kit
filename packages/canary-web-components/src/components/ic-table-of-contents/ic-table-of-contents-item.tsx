import { FunctionalComponent, h } from "@stencil/core";

interface IcTableOfContentsItemElement {
  id: string;
  className: string;
  label: string;
  target: string;
  variant: string;
  selected: number;
  position: number;
  size?: string;
  truncate?: boolean;
  updateSelected: (position: number) => void;
  setItemLevelOffset: (variant: string) => string;
}

interface TOCItemProps {
  id: string;
  className: string;
  variant: string;
  label: string;
  target: string;
  selected: number;
  position: number;
  size?: string;
  truncate?: boolean;
  updateSelected: (position: number) => void;
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
    id,
    className,
    label,
    target,
    selected,
    truncate,
    variant,
    position,
    size,
    updateSelected,
    setItemLevelOffset,
  } = itemProps;

  return (
    <a
      id={id}
      onClick={() => updateSelected(position)}
      class={`${selected && "table-of-contents-item-content-selected"}
        ${
          size === "large"
            ? `table-of-contents-item-content-large`
            : `table-of-contents-item-content-default`
        }
        ${className}
       `}
      href={`#${target}`}
    >
      <ic-typography
        id={`${id}-label`}
        bold={selected === position}
        class={`${truncate && "truncated-item-text"}  ${
          size && `table-of-contents-item-content-${size}`
        }
          table-of-contents-item-label
          `}
        style={{
          paddingLeft: setItemLevelOffset(variant),
        }}
      >
        {label}
      </ic-typography>
    </a>
  );
};

export const TableOfContentsItem = (props: TOCItemProps) => {
  const innerProps = ItemHook();
  return <ItemComponent {...props} {...innerProps} />;
};
