import { Item } from "../../types/Item";
import { memo } from "react";

interface ListItemProps {
  item: Item;
  isSelected: boolean;
  toggleSelect: (item: Item) => void;
}

export const ListItem = memo((props: ListItemProps) => {

  const { item, isSelected, toggleSelect } = props;

  return (
    <li key={item.name}
      className={`ListPicker__item ListPicker__item--${item.color}${isSelected ? ' ListPicker__item--selected' : ''}`}
      onClick={() => toggleSelect(item)}
    >
      {item.name}
    </li>
  )
});

ListItem.displayName ='ListItem'; // useful for react profiler
