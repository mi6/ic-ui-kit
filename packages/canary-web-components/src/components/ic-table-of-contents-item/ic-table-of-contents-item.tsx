import { FunctionalComponent, h } from "@stencil/core";

interface IcTableOfContentsItemElement {
  label: string;
  target: string;
  variant: string;
  selected: boolean;
  position: number;
  updateSelected: (position: number) => void;
  setItemLevelOffset: (variant: string) => string;
  size?: string;
  truncate?: boolean;
}

interface TOCItemProps {
  variant: string;
  label: string;
  target: string;
  selected: boolean;
  position: number;
  updateSelected: (position: number) => void;
  size?: string;
  truncate?: boolean;
}

const ItemHook = () => {
  const setItemLevelOffset = (variant: string): string => {
    //4 12 20 28
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
    updateSelected,
    setItemLevelOffset,
  } = itemProps;
  console.log(size);

  return (
    <div class={`table-of-contents-item table-of-contents-item-content-large`}>
      <a
        onClick={() => updateSelected(position)}
        class={`${
          selected && "table-of-contents-item-content-selected"
        } table-of-contents-item-content`}
        href={`#${target}`}
        onFocus={() => console.log("focus")}
      >
        {/* <ic-tooltip
          target="table-of-contents-item-label"
          id={`table-of-contents-item-tooltip`}
          label={"test"}
          placement="left"
          style={{ width: "320px" }}
        > */}
        <ic-typography
          id={"table-of-contents-item-label"}
          bold={selected}
          variant={"h5"}
          class={`${truncate && "truncated-item-text"}  ${
            size && `table-of-contents-item-content-${size}`
          }`}
          style={{
            paddingLeft: setItemLevelOffset(variant),
          }}
        >
          {label}
        </ic-typography>
        {/* </ic-tooltip> */}
      </a>
    </div>
  );
};

export const TableOfContentsItem = (props: TOCItemProps) => {
  const innerProps = ItemHook();
  return <ItemComponent {...props} {...innerProps} />;
};
