import React, { ChangeEvent, useState } from "react";
import style from "./style.module.scss";

interface InputFieldProps {
    onChange?: any;
    value?: string;
    placeholder?: string;
    label?: string;
    errorMessage?: string;
}

export const InputField = (props: InputFieldProps) => {
    const {
        onChange = () => { },
        value,
        placeholder,
        label,
        errorMessage, // add error message if needed -- added by Glen Turner.
    } = props;

    const onInputChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
        const { value } = target;
        onChange(value);
    };


    return (
        <div
            className={style.inputWrapper}
        >
            <span className={style.label}>{label}</span>
            <input
                className={style.inputBox}
                placeholder={placeholder}
                value={value}
                onChange={onInputChange}
            />
            {/* add error message if needed -- added by Glen Turner.*/}
            {/* {!!errorMessage && <ErrorMessage>This field is required.</ErrorMessage>} */}
        </div>
    );
};

