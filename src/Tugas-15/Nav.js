import React from 'react';
import NavRoute from './NavRoute';
import { NavProvider } from './NavContext';

const Nav = () => {
    return (
        <NavProvider>
            <NavRoute />
        </NavProvider>
    );
}

export default Nav;