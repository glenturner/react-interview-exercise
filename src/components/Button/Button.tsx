import React from 'react';
import { Flex } from '..';
import { Spinner } from '@chakra-ui/spinner';
import style from './style.module.scss';

interface ButtonProps {
    children: any;
    onClick?: () => void;
    isLoading?: boolean;
    id?: string;
}

export const Button = (props: ButtonProps) => {
    const { onClick = () => { }, children, isLoading = false, id } = props;
    const handleClick = (e: any) => {
        e.preventDefault()
        onClick()
    }

    return (
        <Flex center className={style.search_button_wrapper}>
            <button id={id} onClick={handleClick}>{!isLoading ? children : <Spinner />}</button>
        </Flex>
    );
};
