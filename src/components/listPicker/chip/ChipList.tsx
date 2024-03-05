import { ChipItem } from "./ChipItem";
import { Item } from "../../../types/Item";

export interface ChipListProps {
    items: Item[];
    onItemDelete: (item: Item) => void;
}

export const ChipList = (props: ChipListProps) => {

    const { items, onItemDelete } = props;

    return (
        <div className='Chip__container'>
            {items.map(item =>
                <ChipItem key={item.name} item={item} onDelete={onItemDelete}/>
            )}
        </div>

    )
}
