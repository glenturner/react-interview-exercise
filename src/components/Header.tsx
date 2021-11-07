import React from "react";
import { Box } from '@chakra-ui/react';
import Logo from '../header_logo.png';
import Glob from "./design/Glob";
import { Header as Navbar } from ".";
import { theme } from '@theme/index';


export const Header: React.FC = ({ children }) => {

    return (
        <>
            <Navbar />
            {/* <Box overflow="hidden" className="globParent" position="absolute" width="100vw" height="100%" minHeight="100vh">
               This Glob is beautiful but seems to hurt performance -- added by Glen Turner.
                <Glob size={["60%", "60%"]} speed={30} globSizes={[[60, 65], [70, 80], [30, 75]]} left="0%" top="10%" opacity={0.5} color={theme.colors.brand.green} />
            <Glob size={["600px", "600px"]} left="-50px" top="-20px" color={theme.colors.brand.green} />
            </Box>
            <Box className="cs-header" position="absolute" top="0" right="0" left="0" width="100vw" height="80px">
                <a href="https://characterstrong.com">
                    <img className="header-img" src={Logo} alt="CharacterStrong Logo" />
                </a>
                {children}
            </Box> */}
        </>
    )
}
