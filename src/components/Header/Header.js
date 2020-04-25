import React from 'react';
import { AppBar, Toolbar, Typography, useScrollTrigger, Slide } from '@material-ui/core';

import styles from './Header.module.css';

const Header = (props) => {
    const HideOnScroll = ({ children, window }) => {
        const trigger = useScrollTrigger({ target: window ? window() : undefined });

        return (
            <Slide appear={false} direction="down" in={!trigger}>
                {children}
            </Slide>
        );
    };

    return (
        <HideOnScroll {...props}>
            <AppBar className={styles.navbar}>
                <Toolbar>
                    <Typography variant="h5" className={styles.heading}>covidtrack-r</Typography>
                </Toolbar>
            </AppBar>
        </HideOnScroll>
    );
};

export default Header;