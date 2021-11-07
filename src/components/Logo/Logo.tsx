import React from 'react'
import Logo from '../../header_logo.png';
import { Flex } from '..';

export const AppLogo = () => {

    return (
        <Flex style={{ padding: '20px' }}>
            <img
                onClick={() => window.open('https://characterstrong.com', '_blank')}
                draggable="false"
                style={{ height: 50, width: 'auto' }}
                alt="CharacterStrong Logo"
                src={Logo} />
        </Flex>
    )
}