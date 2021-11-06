import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { Waypoint } from 'src/Assets';
import style from './style.module.scss';

interface GooglePointProps {
    isHovered?: boolean;
    lat?: number;
    lng?: number;
    text?: string;
}

export const GooglePoint = (props: GooglePointProps) => {
    return (
        <img src={Waypoint} className={style.waypoint} style={{ height: '2rem', width: '2rem' }} />
    );
};
