import React from 'react';
import './Header.css';
import { IconButton } from '@material-ui/core';
import Menu from '@material-ui/icons/Menu';
import Search from '@material-ui/icons/Search';
import ArrowDropDown from '@material-ui/icons/ArrowDropDown';

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
                <Search />
                <input type="text" placeholder="Search mail" />
                <ArrowDropDown className="header_inputCaret"/>
            </div>
            <div className="header__right">

            </div>
        </div>
    )
}

export default Header
