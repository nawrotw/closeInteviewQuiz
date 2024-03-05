import "./FilterTextField.scss"
import { TextField } from "../../../alreadyInProject/textField/TextField";
import { useState } from "react";
import { SearchIcon } from "../../../alreadyInProject/icons/SearchIcon";

export interface SearchFieldProps<T> {
    items: T[];
    onChange: (items: T[]) => void;
    getText: (item: T) => string;
}

export const FilterTextField = <T, >(props: SearchFieldProps<T>) => {

    const { items, getText, onChange } = props;
    const [searchTerm, setSearchTerm] = useState('');

    const handleChange = (searchTerm: string) => {
        setSearchTerm(searchTerm);
        const searchStringLowerCase = searchTerm.toLowerCase();
        const filteredItems = searchTerm ?
            items.filter((item) => getText(item).toLowerCase().includes(searchStringLowerCase)) :
            [...items];
        onChange(filteredItems);
    }

    return (<div className='TextField__container'>
        <SearchIcon className={'TextField__searchIcon'}/>
        <TextField value={searchTerm} onChange={handleChange}/>
    </div>)
}
