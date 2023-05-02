import "./ListPicker.scss";
import { useSelection, UseSelectionProps } from "./useSelection";
import { useState } from "react";
import { FilterTextField } from "./searchField/FilterTextField";
import { ChipList } from "./chip/ChipList";
import { Item } from "../../types/Item";

export type ListProps = UseSelectionProps<Item>;

// At the moment when ListPicker component would be used for picking something other than an Item,
// I would like to do a refactor which would decouple ListPicker and all its components from Item
// and create LP generic version easy to be used in the future.
export const ListPicker = (props: ListProps) => {
    console.log('render'); // left for performance check
    
    const { items, selectedItems } = props;
    const [filteredItems, setFilteredItems] = useState(items);
    const { isSelected, toggleSelect, clearAll, selectAll } = useSelection({
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
            <button onClick={clearAll}>Remove all</button>
        </div>
        <ChipList items={selectedItems} onItemClick={toggleSelect} onClearAll={clearAll}/>
        <ul className="ListPicker__list">
            {filteredItems.map(item => (
                <li key={item.name}
                    className={`ListPicker__item ListPicker__item--${item.color}${isSelected(item) ? ' ListPicker__item--selected' : ''}`}
                    onClick={() => toggleSelect(item)}
                >
                    {item.name}
                </li>
            ))}
        </ul>
    </div>);
};
