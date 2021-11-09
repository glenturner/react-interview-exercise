import React, { useCallback } from 'react';
import { Flex } from '..';
import { ListItem } from './ListItem';
import { SearchField } from '..';
import { SubmitIcon } from 'src/Assets';
import { TabNavigationPanel } from './TabNavigationPanel';
import { ScaleFade } from '@chakra-ui/transition';
import { Button } from '..';
import style from './style.module.scss';

interface SchoolSearchProps {
    data?: any;
    value?: string;
    onChange?: any;
    onClick?: any;
    isLoading?: boolean;
    locations?: any;
    id?: string;
}

export const SchoolSearch = (props: SchoolSearchProps) => {
    const {
        data,
        value,
        onChange = () => { },
        onClick = () => { },
        isLoading,
        locations,
        id,
    } = props;

    const SchoolsCounter = useCallback((props: any) => {
        if (!data?.length) {
            return <h3 className={style.search_error}>
                {`${data.length} schools found`}
            </h3>
        }
        if (data?.length !== 1) {
            return <h3 className={style.num_schools}>
                {`${data.length} schools found`}
            </h3>
        }
        return <h3 className={style.num_schools}>
            {`${data.length} school found`}
        </h3>
    }, [data])

    return (
        <Flex
            center
            wrap
            className={style.school_list_wrapper}>
            <Flex center className={style.school_count}>
                <ScaleFade initialScale={0.9} in={!isLoading}>
                    <SchoolsCounter />
                </ScaleFade>
            </Flex>
            <Flex center className={style.search_wrapper}>
                <SearchField
                    placeholder="Search a school or city"
                    value={value}
                    onChange={onChange} />
                <Button
                    id={id}
                    isLoading={isLoading}
                    onClick={onClick}>
                    <img
                        draggable="false"
                        style={{ height: 30, width: 'auto' }}
                        alt="Search Icon"
                        src={SubmitIcon} />
                </Button>
            </Flex>
            <TabNavigationPanel
                children={data?.map((d: any) => { return <ListItem data={d} /> })}
                locations={locations} />
        </Flex >
    );
};
