import { Item } from "../../types/Item";
import { memo, useRef } from "react";

interface ListItemProps {
  item: Item;
  isSelected: boolean;
  toggleSelect: (item: Item) => void;
}

export const ListItem = memo((props: ListItemProps) => {

  const { item, isSelected, toggleSelect } = props;

  const renderRef = useRef(0);

  // i = i+1;
  renderRef.current = renderRef.current + 1;
  console.log('[ListItem] render', item.name, renderRef.current/*, i*/);
  if (item.name === 'tiny blue apple') {
    // i = i+1;
    // console.log('[ListItem] render', renderRef.current, i);
  }
  return (
    <li key={item.name}
      className={`ListPicker__item ListPicker__item--${item.color}${isSelected ? ' ListPicker__item--selected' : ''}`}
      onClick={() => toggleSelect(item)}
    >
      [{renderRef.current}] {item.name}
    </li>
  )
});

ListItem.displayName ='ListItem'; // useful for react profiler
