import { Item } from "../../types/Item";
import { useEffect, useCallback, useState } from "react";

export interface UseSelectionProps<T extends Item> {
    items: T[];
    selectedItems: T[];
    onSelectedItemsChange: (items: T[]) => void;
}

export const useSelection = <T extends Item = Item>(props: UseSelectionProps<T>) => {

    const { items, selectedItems: initiallySelected, onSelectedItemsChange } = props;
    const [selectedItems, setSelectedItems] = useState<T[]>(initiallySelected);

    useEffect(() => {
        onSelectedItemsChange(selectedItems);
    }, [selectedItems, onSelectedItemsChange]);

    const isSelected = (item: T) => selectedItems.includes(item);

    const toggleSelect = useCallback((item: T) => {
        setSelectedItems(selectedItems =>
            selectedItems.includes(item) ?
                selectedItems.filter((selectedItem) => selectedItem.name !== item.name) :
                [...selectedItems, item] // this will add item always to the end of the selected list
        )
    }, []);

    const clearSelected = useCallback((item: T) => {
        setSelectedItems(selectedItems => selectedItems.filter((selectedItem) => selectedItem.name !== item.name))
    }, []);

    const clearAll = () => setSelectedItems([]);
    const selectAll = () => setSelectedItems([...items]);

    return {
        selectedItems,
        isSelected,
        toggleSelect,
        clearSelected,
        clearAll,
        selectAll,
    }
}
