import { IcMenuOption } from "./types";

const getOptionIdFromValue = (listboxId: string, value: string) => {
        return `${listboxId}-${value}`;
    };

export const getAriaActivedescendant = (listboxId: string, el: HTMLIcSelectNewElement | HTMLIcComboboxElement, activedescendantIndex: number | null): string => {
    const value = getValueFromActivedescendantIndex(el, listboxId, activedescendantIndex);
    return value
        ? getOptionIdFromValue(listboxId, value)
        : ""
};

export const getValueFromActivedescendantIndex = (el: HTMLIcSelectNewElement | HTMLIcComboboxElement, listboxId: string, activedescendantIndex: number | null) => {
    const descendants: (HTMLLIElement | HTMLIcButtonElement)[] = Array.from(el.shadowRoot?.querySelectorAll('[role="option"]') || []);
    const selectAllBtn = el.shadowRoot?.querySelector<HTMLIcButtonElement>(`#${getOptionIdFromValue(listboxId, "select-all")}`);
    if (selectAllBtn) descendants.unshift(selectAllBtn);

    return activedescendantIndex !== null
    ? descendants[activedescendantIndex]?.dataset.value || null
    : null
};

export const getLabelsFromValues = (valueArr: string[], flattenedOptions: IcMenuOption[]): string => {
    return valueArr.map(value => {
        return flattenedOptions.find(option => option.value === value)?.label
    }).join(", ");
};

/**
 * 
 * @returns the index of the first option that is in valueArr, otherwise 0
 */
export const getFirstSelectedOptionIndex = (flattenedOptions: IcMenuOption[], valueArr: string[]) => {
    const firstSelectedOption = flattenedOptions.find(option => {
        return valueArr.includes(option.value)
    });
    return firstSelectedOption ? flattenedOptions.indexOf(firstSelectedOption) : 0;
};

export const getDeduplicatedOptions = (options: IcMenuOption[], comboboxLabel: string): IcMenuOption[] => {
    const uniqueValues: string[] = [];
    const dedupedOptions: IcMenuOption[] = [];

    options.forEach((option) => {
        if (!option.disabled) {
            if (option.children) {
                //If an option has children, we will loop through them
                const dedupedChildren: IcMenuOption[] = [];
                option.children.forEach((child) => {
                    if (uniqueValues.includes(child.value)) {
                    console.warn(
                        `ic-select with label ${comboboxLabel} was populated with duplicate option (value: ${child.value}) which has been removed.`
                    );
                    } else {
                    uniqueValues.push(child.value);
                    dedupedChildren.push(child);
                    }
                });
                // construct a modified option, inserting the deduplicated children alongside the original information
                dedupedOptions.push({
                    ...option,
                    children: dedupedChildren,
                });
            } else {
                // If an option does not have children, assess to see if it's value has been included already
                if (uniqueValues.includes(option.value)) {
                    console.warn(
                    `ic-select with label ${comboboxLabel} was populated with duplicate option (value: ${option.value}) which has been removed.`
                    );
                } else {
                    uniqueValues.push(option.value);
                    dedupedOptions.push(option);
                }
            }
        }
    });

    return dedupedOptions;
};

export const getSortedOptions = (options: IcMenuOption[]): IcMenuOption[] => {
    let sorted: IcMenuOption[] = [];
    if (options.sort) {
        sorted = options.sort((optionA, optionB) =>
            optionA.recommended && !optionB.recommended ? -1 : 0
        );
    }
    return sorted;
};

export const getFlattenedOptions = (groupedOptions: IcMenuOption[]) => {
    const flattenedOptions: IcMenuOption[] = [];

    if (groupedOptions.length > 0) {
        groupedOptions.map((option) => {
            if (option.children) {
                option.children.map(
                    (option) => flattenedOptions.push(option)
                );
            } else {
                flattenedOptions.push(option);
            }
        });
    };
    return flattenedOptions;
};