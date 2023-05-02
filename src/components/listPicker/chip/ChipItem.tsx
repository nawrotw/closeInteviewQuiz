import "./Chip.scss"
import { DeleteIcon } from "../../../alreadyInProject/icons/DeleteIcon";
import { Item } from "../../../types/Item";

export interface ChipProps {
    item: Item;
    onClick: (item: Item) => void;
}

export const ChipItem = (props: ChipProps) => {

    const { item, onClick } = props;

    const handleItemClick = () => {
        onClick(item);
    }

    return (<div className={`Chip__item ${item.color} border--${item.color}`}>
        <div className='Chip__item--text'>{item.name}</div>
        <DeleteIcon className='Chip__deleteIcon' onClick={handleItemClick}/>
    </div>)
}
