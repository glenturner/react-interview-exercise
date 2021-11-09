import React, { useEffect } from 'react';
import { Flex } from '@components/Flex';
import { NCESSchoolFeatureAttributes } from '@utils/nces';
import SR from 'scrollreveal';
import { StringOrDefault } from '@utils/stringOrDefault';
import style from './style.module.scss';

interface ListItemProps {
    data?: NCESSchoolFeatureAttributes;
}

export const ListItem = React.memo((props: ListItemProps) => {
    const { data } = props;

    useEffect(() => {
        SR().reveal('#school_list_item', { opacity: 0.2, viewFactor: 0.3, scale: 0.9, delay: 0, reset: false, distance: '50px', origin: 'left' });
    }, [])

    return (
        <Flex
            id="school_list_item"
            className={style.list_item_wrapper}
            center
            column>
            <span className={style.school_name}>{StringOrDefault(data?.NAME)}</span>
            <span className={style.location}>{StringOrDefault(data?.STREET)}</span>
            <span className={style.location}>
                {`${StringOrDefault(data?.CITY)}, ${StringOrDefault(data?.STATE)} ${StringOrDefault(data?.ZIP)}`}
            </span>
            <Flex className={style.school_type_wrapper}>
                <span
                    className={style.school_type}
                    style={{ background: data?.private ? `#EB72A2` : '#2DA7CB' }}>
                    {data?.private ? `Private` : `Public`}
                </span>
            </Flex>
        </Flex>
    );
})
