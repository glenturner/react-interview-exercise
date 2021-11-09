import React, { useEffect } from 'react';
import { Flex } from '..';
import SR from 'scrollreveal';
import { SearchPoints } from 'src/Assets';
import style from './style.module.scss';

export const LandingSection = () => {

    useEffect(() => {
        SR().reveal('#landing_copy', { opacity: 0.2, viewFactor: 0.3, scale: 0.9, delay: 0, reset: false, distance: '50px', origin: 'left' });
        SR().reveal('#landing_image', { opacity: 0.2, viewFactor: 0.3, scale: 0.9, delay: 0, reset: false, distance: '50px', origin: 'right' });
    }, [])

    return (
        <Flex justify="space-evenly" className={style.landing_wrapper}>
            <Flex
                id="landing_copy"
                className={style.copy_section}
                center
                column>
                <h1>Find a school that <br /> <b>transforms people.</b></h1>
                <div className={style.accent} />
                <span className={style.grabber}>
                    CharacterStrong aims to provide resources for professional learning services that positively impact lives.
                </span>
            </Flex>
            <Flex
                className={style.image_section}
                id="landing_image"
                center
                style={{ flex: 1 }}>
                <img
                    draggable="false"
                    alt='Landing Search Points'
                    src={SearchPoints}
                />
            </Flex>
        </Flex>
    );
};
