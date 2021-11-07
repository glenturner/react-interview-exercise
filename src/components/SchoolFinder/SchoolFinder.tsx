import React from 'react';
import { Flex } from '..';
import { SearchBgImage } from 'src/Assets';
import style from './style.module.scss';

export const SchoolFinder = (props: any) => {
    return (
        <Flex className={style.school_finder_wrapper} style={{ backgroundImage: `url(${SearchBgImage}` }}>
            <Flex center column style={{ width: '30%', padding: '50px' }}> {props.children}</Flex>
        </Flex>
    );
};
