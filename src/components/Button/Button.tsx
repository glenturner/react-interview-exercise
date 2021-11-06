import React from 'react';

interface ButtonProps {
    onClick?: any;
    children?: any;
}

export const Button = (props: ButtonProps) => {

    const handleClick = (e: any) => {
        e.preventDefault()
        props.onClick()
    }

    return (
        <button onClick={handleClick}>{props.children}</button>
    );
};
