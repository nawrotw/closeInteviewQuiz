import { Item } from "../../types/Item";

export interface UseSelectionProps<T> {
    items: T[];
    selectedItems: T[];
    onSelectedItemsChange: (items: T[]) => void;
}

export const useSelection = <T = Item>(props: UseSelectionProps<T>) => {

    const {items, selectedItems, onSelectedItemsChange} = props;

    const isSelected = (item: T) => selectedItems.some((selected) => selected.name === item.name);

    const toggleSelect = (item: T) => {
        onSelectedItemsChange(
            isSelected(item) ?
                selectedItems.filter((selectedItem) => selectedItem.name !== item.name) :
                [...selectedItems, item] // this will add item always to the end of the selected list
                // TODO: here selectedItems order is always the same as original items order, to discuss which version should be used
                // items.filter(sortedItem => sortedItem.name === item.name || isSelected(sortedItem))
        )
    };

    const clearAll = () => onSelectedItemsChange([]);
    const selectAll = () => onSelectedItemsChange([...items]);

    return {
        selectedItems,
        isSelected,
        toggleSelect,
        clearAll,
        selectAll,
    }
}
