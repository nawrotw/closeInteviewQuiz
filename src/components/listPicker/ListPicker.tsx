import "./ListPicker.scss";
import { useSelection } from "./useSelection";
import { useState } from "react";
import { FilterTextField } from "./searchField/FilterTextField";
import { ChipList } from "./chip/ChipList";
import { Item } from "../../types/Item";
import { ListItem } from "./ListItem";

export interface ListProps {
    items: Item[];
}

export const ListPicker = ({ items }: ListProps) => {

    const [filteredItems, setFilteredItems] = useState(items);
    const { selectedItems, toggleSelect, clearSelected, isSelected, clearAll, selectAll } = useSelection({ items: filteredItems });

    return (<div className="ListPicker">
        <div className='ListPicker__searchBar'>
            <div className='ListPicker__textField'>
                <FilterTextField<Item>
                    items={items}
                    onChange={setFilteredItems}
                    getText={(item) => item.name}
                />
                <div className='ListPicker__counter'>{selectedItems.length}/{filteredItems.length}</div>
            </div>
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
