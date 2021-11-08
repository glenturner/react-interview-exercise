import React, { useEffect } from 'react';
import { Flex } from '@components/Flex';
import { NCESSchoolFeatureAttributes } from '@utils/nces';
import SR from 'scrollreveal';
import style from './style.module.scss';

interface ListItemProps {
    data?: NCESSchoolFeatureAttributes;
}

export const ListItem = (props: ListItemProps) => {
    const { data } = props;

    useEffect(() => {
        SR().reveal('#school_list_item', { opacity: 0.2, viewFactor: 0.3, scale: 0.9, delay: 0, reset: false, distance: '50px', origin: 'left' });
    }, [])

    return (
        <Flex id="school_list_item" center column className={style.list_item_wrapper}>
            <span className={style.school_name}>{data?.NAME}</span>
            <span className={style.location}>{data?.STREET}</span>
            <span className={style.location}>{`${data?.CITY}, ${data?.STATE} ${data?.ZIP}`}</span>
            <Flex className={style.school_type_wrapper}>
                <span
                    className={style.school_type}
                    style={{ background: data?.private ? `#9997FC` : '#2DA7CB' }}>
                    {data?.private ? `Private` : `Public`}
                </span>
            </Flex>
        </Flex>
    );
};
