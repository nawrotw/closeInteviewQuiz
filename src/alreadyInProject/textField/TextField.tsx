import * as React from "react";

export interface TextFieldProps {
    value: string;
    onChange: (value: string) => void;
}

export const TextField = (props: TextFieldProps) => {

    const { value, onChange } = props;

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        onChange(e.target.value);
    }

    return (
        <input value={value} onChange={handleChange}/>
    )
}
