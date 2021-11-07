import React, { ChangeEvent, useState } from "react";
import { Flex } from "..";
import { SearchIcon } from "src/Assets";
import style from "./style.module.scss";

interface InputFieldProps {
    onChange?: any;
    value?: string;
    placeholder?: string;
    label?: string;
    errorMessage?: string;
}

export const SearchField = (props: InputFieldProps) => {
    const {
        onChange = () => { },
        value,
        placeholder,
        errorMessage, // add error message if needed -- added by Glen Turner.
    } = props;

    const onInputChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
        const { value } = target;
        onChange(value);
    };


    return (
        <Flex center
            className={style.input_wrapper}
        >
            <img
                draggable="false"
                style={{ height: 20, width: 'auto', padding: '0 15px' }}
                alt="Search Icon"
                src={SearchIcon} />
            <input
                id="input_box"
                type="search"
                className={style.input_box}
                placeholder={placeholder}
                value={value}
                onChange={onInputChange}
            />
            {/* add error message if needed -- added by Glen Turner.*/}
            {/* {!!errorMessage && <ErrorMessage>This field is required.</ErrorMessage>} */}
        </Flex>
    );
};

