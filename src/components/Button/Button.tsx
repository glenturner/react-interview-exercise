import { styled } from '@chakra-ui/system';
import React from 'react';
import { Flex } from '..';
import style from './style.module.scss';

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
        <Flex center className={style.search_button_wrapper}>
            <button onClick={handleClick}>{props.children}</button>
        </Flex>
    );
};
