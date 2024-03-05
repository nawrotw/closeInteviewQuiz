import "./Chip.scss"
import { DeleteIcon } from "../../../alreadyInProject/icons/DeleteIcon";
import { Item } from "../../../types/Item";
import { memo } from "react";

export interface ChipProps {
    item: Item;
    onDelete: (item: Item) => void;
}

export const ChipItem = memo((props: ChipProps) => {

    const { item, onDelete } = props;
    const handleDeleteClick = () => {
        onDelete(item);
    }

    return (<div className={`Chip__item ${item.color} border--${item.color}`}>
        <div className='Chip__item--text'>{item.name}</div>
        <DeleteIcon className='Chip__deleteIcon' onClick={handleDeleteClick}/>
    </div>)
});
