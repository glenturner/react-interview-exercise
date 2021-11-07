import React, { useEffect, useState } from "react";
// import { NavLink } from "./NavLink";
import { Flex } from "../Flex";
import style from "./style.module.scss";
import { AppLogo } from "..";
// import { useHistory } from "react-router-dom";
// import { Hamburger } from "../Hamburger";

export const Header = (props: any) => {
    // const history = useHistory();
    // const dispatch = useDispatch();
    const [selectedRoute, setSelectedRoute] = useState<any>(null);

    const isInViewport = (el: any) => {
        const rect = el?.getBoundingClientRect();
        return (
            rect && rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }


    return (
        <Flex id="app-header" row className={style.header_wrapper} align="center" justify="space-between">
            <AppLogo />
            <Flex justify="flex-end" style={{ alignSelf: 'flex-start', flex: 1 }}>
                <Flex className={style.navSection} align="center" style={{
                    transition: '200ms',
                    padding: '20px', marginLeft: 80, alignSelf: 'center'
                }}>
                    <Flex style={{ marginRight: '20px' }}>
                        {/* <NavLink route="#landing" text={"Landing"} selected={selectedRoute === '#landing'} />
                        <NavLink route="#about" text={"About"} selected={selectedRoute === '#about'} />
                        <NavLink route="#projects" text={"Projects"} selected={selectedRoute === '#projects'} />
                        <NavLink route="#testimonials" text={"Testimonials"} selected={selectedRoute === '#testimonials'} /> */}
                    </Flex>
                </Flex>
            </Flex>
            {/* <Hamburger /> */}
        </Flex>
    );
};
