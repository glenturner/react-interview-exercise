import React, { ChangeEvent, useState } from "react";
import { Flex } from "..";
import { SearchIcon } from "src/Assets";
import style from "./style.module.scss";

interface InputFieldProps {
    onChange?: any;
    value?: string;
    placeholder?: string;
    label?: string;
}

export const SearchField = (props: InputFieldProps) => {
    const {
        onChange = () => { },
        value,
        placeholder,
    } = props;

    const onInputChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
        const { value } = target;
        onChange(value);
    };

    return (
        <Flex center className={style.input_wrapper}>
            <img
                draggable="false"
                style={{ height: 20, width: 'auto', padding: '0 15px' }}
                alt="Search Icon"
                src={SearchIcon} />
            <input
                type="search"
                className={style.input_box}
                placeholder={placeholder}
                value={value}
                onChange={onInputChange}
            />
        </Flex>
    );
};

