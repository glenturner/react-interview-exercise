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
    isLoading?: boolean;
}

export const SchoolList = (props: SchoolListProps) => {
    const { data, value, onChange = () => { }, onClick = () => { }, isLoading = false } = props;
    return (
        <Flex center wrap className={style.school_list_wrapper}>
            <Flex center style={{ width: '100%' }}>
                {data?.length && <h3 className={style.num_schools}>{data.length} {data.length === 1 ? 'school' : 'schools'}  found</h3>}
            </Flex>
            <Flex center className={style.search_wrapper}>
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
