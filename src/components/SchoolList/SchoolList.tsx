import React from 'react';
import { Flex } from '..';
import { ListItem } from './ListItem';
import { SearchField } from '..';
import style from './style.module.scss';

interface SchoolListProps {
    data?: any;
    value?: string;
    onChange?: any;
}

export const SchoolList = (props: SchoolListProps) => {
    const { data, value, onChange = () => { } } = props;
    return (
        <Flex center wrap className={style.school_list_wrapper}>

            <Flex center column style={{ width: '70%' }}>
                <h1 style={{ color: '#fff' }}>Locate Schools</h1>
                <SearchField
                    placeholder="Search a city or county"
                    value={value}
                    onChange={onChange} />
            </Flex>
            {data?.map((d: any) => { return <ListItem data={d} /> })}
        </Flex>
    );
};
