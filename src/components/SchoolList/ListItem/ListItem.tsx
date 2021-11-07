import React from 'react';
import { Flex } from '@components/Flex';
import style from './style.module.scss';

interface ListItemProps {
    data?: any;
}

export const ListItem = (props: ListItemProps) => {
    const { data } = props;
    return (
        <Flex center column className={style.list_item_wrapper}>
            <span className={style.school_name}>{data?.NAME}</span>
            <span className={style.location}>{data?.STREET}</span>
            <span className={style.location}>{`${data?.CITY}, ${data?.STATE} ${data?.ZIP}`}</span>
        </Flex>
    );
};
