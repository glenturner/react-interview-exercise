import React from 'react';
import { Flex } from '..';
import { SearchPoints } from 'src/Assets';
import style from './style.module.scss';

export const LandingSection = () => {
    return (
        <Flex justify="space-evenly" className={style.landing_wrapper}>
            <Flex center className={style.copy_section}>
                <h1>Create a school that <br /> <b>transforms people.</b></h1>
            </Flex>
            <Flex center className={style.image_section} style={{ flex: 1 }}>
                <img
                    draggable="false"
                    // style={{ width: '30rem', height: '30rem' }}
                    alt='empty'
                    src={SearchPoints}
                />
            </Flex>
        </Flex>
    );
};
