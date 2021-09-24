import React from 'react';
import './Header.css';
import { IconButton } from '@material-ui/core';
import Menu from '@material-ui/icons/Menu';

const Header = () => {
    return (
        <div className="header">
            <div className="header__left">
                <IconButton>
                    <Menu />
                </IconButton>
                <img src="https://clientes.rcymedia.eu/media/Gmail/d74e6036cb5b6e80d87b0a3fc77176c0.png" alt="mail logo" />
            </div>
            <div className="header__middle">

            </div>
            <div className="header__right">

            </div>
        </div>
    )
}

export default Header
