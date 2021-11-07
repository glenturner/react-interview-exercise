import React from 'react';
import { Flex } from '..';
import { ListItem } from './ListItem';
import { SearchField } from '..';
import { SearchIcon, SubmitIcon } from 'src/Assets';
import { Button } from '..';
import style from './style.module.scss';

interface SchoolListProps {
    data?: any;
    value?: string;
    onChange?: any;
    onClick?: any;
}

export const SchoolList = (props: SchoolListProps) => {
    const { data, value, onChange = () => { }, onClick = () => { } } = props;
    return (
        <Flex center wrap className={style.school_list_wrapper}>
            <Flex center className={style.search_wrapper}>
                {/* <h2 className={style.search_header}>School Finder</h2> */}
                <SearchField
                    placeholder="Search a city or county"
                    value={value}
                    onChange={onChange} />
                <Button onClick={onClick}>
                    <img
                        draggable="false"
                        style={{ height: 30, width: 'auto' }}
                        alt="Search Icon"
                        src={SubmitIcon} />
                </Button>
            </Flex>
            {data?.map((d: any) => { return <ListItem data={d} /> })}
        </Flex>
    );
};
