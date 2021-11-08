import React from 'react';
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react"
import { GoogleMap } from '@components/GoogleMap';
import style from './style.module.scss';

interface TabNavigationPanelProps {
    children?: any;
    locations?: any;
}

export const TabNavigationPanel = (props: TabNavigationPanelProps) => {
    const { children, locations } = props;
    return (
        <Tabs
            className={style.tabs}
            isLazy
            variant="soft-rounded"
            colorScheme="cyan">
            <TabList className={style.tab_list}>
                <Tab>
                    <span className={style.tab}>
                        List View
                    </span>
                </Tab>
                <Tab>
                    <span className={style.tab}>
                        Map View
                    </span>
                </Tab>
            </TabList>
            <TabPanels>
                {/* initially mounted -- added by Glen Turner.*/}
                <TabPanel
                    style={{
                        width: '100vw',
                        display: 'flex',
                        flexWrap: 'wrap',
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}>
                    {children}
                </TabPanel>
                {/* initially not mounted -- added by Glen Turner.*/}
                <TabPanel style={{ width: '100vw' }}>
                    <GoogleMap
                        zoom={4}
                        center={{ lat: 39.06718, lng: -94.588878 }}
                        locations={locations} />
                </TabPanel>
            </TabPanels>
        </Tabs>
    );
};
