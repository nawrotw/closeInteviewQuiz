import { Item } from "../../types/Item";
import { useCallback, useState } from "react";

export interface UseSelectionProps<T> {
    items: T[];
}

export const useSelection = <T extends Item = Item>(props: UseSelectionProps<T>) => {

    const { items } = props;
    const [selectedItems, setSelectedItems] = useState<T[]>([]);

    const isSelected = (item: T) => selectedItems.includes(item);

    const toggleSelect = useCallback((item: T) => {
        setSelectedItems(selectedItems =>
            selectedItems.includes(item) ?
                selectedItems.filter((selectedItem) => selectedItem !== item) :
                [...selectedItems, item] // this will add item always to the end of the selected list
        )
    }, []);

    const clearSelected = useCallback((item: T) => {
        setSelectedItems(selectedItems => selectedItems.filter((selectedItem) => selectedItem !== item))
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
