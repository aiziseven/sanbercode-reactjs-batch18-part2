import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { NavContext } from './NavContext';
import './NavRoute.css';

const NavRoute = () => {
    const { themeState, colorState, bodyColorState, fontColorState } = useContext(NavContext);

    const [theme, setTheme] = themeState;
    const [color, setColor] = colorState;
    const [bodyColor, setBodyColor] = bodyColorState;
    const [fontColor, setFontColor] = fontColorState;

    const handleClick = () => {
        if (theme % 2 == 0) {
            setColor('black');
            setBodyColor('#757575');
            setFontColor('#E0E0E0');
        } else {
            setColor('#6200EE')
            setBodyColor('#F5F5F5');
            setFontColor('black');
        }
        setTheme(theme + 1);
    }

    useEffect(() => {
        document.body.style.backgroundColor = bodyColor;
        document.body.style.color = fontColor;
    }, [theme])

    return (
        <>
            <div
                className="navbar"
                style={{ backgroundColor: color }}>
                <Link to='/tugas9'>Tugas-9</Link>
                <Link to='/tugas10'>Tugas-10</Link>
                <Link to='/tugas11'>Tugas-11</Link>
                <Link to='/tugas12'>Tugas-12</Link>
                <Link to='/tugas13'>Tugas-13</Link>
                <Link to='/tugas14'>Tugas-14</Link>
            </div>
            <div style={{
                paddingTop: '70px',
                paddingLeft: '30px'
            }}
            >
                <button
                    className='btn-styled'
                    onClick={handleClick}>
                    Change Theme
                </button>
                <h2>{color != 'black' ? 'Light' : 'Dark'}</h2>
            </div>
        </>
    );
}

export default NavRoute;