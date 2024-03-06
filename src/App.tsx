import { ListPicker } from "./components/listPicker/ListPicker";
import { items } from "./ListData";
import { useState } from "react";
import { Item } from "./types/Item";

export const App = () => {

    const [selectedItems, setSelectedItems] = useState<Item[]>([]);

    return (
        <div className='App'>
{/*
            <ListPicker
                items={items}
                selectedItems={selectedItems}
                onSelectedItemsChange={setSelectedItems}/>
*/}
        </div>
    );
}
