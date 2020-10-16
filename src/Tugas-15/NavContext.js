import React, { useState, createContext } from 'react';

export const NavContext = createContext();

export const NavProvider = props => {
    const [theme, setTheme] = useState(0);
    const [color, setColor] = useState('#6200EE');
    const [bodyColor, setBodyColor] = useState('#F5F5F5');
    const [fontColor, setFontColor] = useState('black');

    return (
        <NavContext.Provider value={{
            themeState: [theme, setTheme],
            colorState: [color, setColor],
            bodyColorState: [bodyColor, setBodyColor],
            fontColorState: [fontColor, setFontColor]
        }}>
            {props.children}
        </NavContext.Provider>
    );
}