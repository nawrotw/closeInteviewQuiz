import { ChipItem } from "./ChipItem";
import { Item } from "../../../types/Item";

export interface ChipListProps {
    items: Item[];
    onItemClick: (item: Item) => void;
    onClearAll: () => void;
}

export const ChipList = (props: ChipListProps) => {

    const { items, onItemClick, onClearAll } = props;

    return (
        <div className='Chip__container'>
            {items.map(item =>
                <ChipItem key={item.name} item={item} onClick={onItemClick}/>
            )}
        </div>

    )
}
