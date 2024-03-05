import "./ListPicker.scss";
import { useSelection, UseSelectionProps } from "./useSelection";
import { useState } from "react";
import { FilterTextField } from "./searchField/FilterTextField";
import { ChipList } from "./chip/ChipList";
import { Item } from "../../types/Item";
import { ListItem } from "./ListItem";

export type ListProps = UseSelectionProps<Item>;

export const ListPicker = (props: ListProps) => {

    const { items, selectedItems } = props;

    const [filteredItems, setFilteredItems] = useState(items);
    const { toggleSelect, clearSelected, isSelected, clearAll, selectAll } = useSelection({
        ...props,
        items: filteredItems,
    });

    return (<div className="ListPicker">
        <div className='ListPicker__searchBar'>
            <FilterTextField<Item>
                items={items}
                onChange={setFilteredItems}
                getText={(item) => item.name}
            />
            <div className='ListPicker__counter'>{selectedItems.length}/{filteredItems.length}</div>
            <button onClick={selectAll}>Select all</button>
            <button onClick={clearAll}>Clear Selection</button>
        </div>
        <ChipList items={selectedItems} onItemDelete={clearSelected}/>
        <ul className="ListPicker__list">
            {filteredItems.map(item => (
                <ListItem key={item.name} item={item} isSelected={isSelected(item)} toggleSelect={toggleSelect}/>
            ))}
        </ul>
    </div>);
};
