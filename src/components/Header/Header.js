import React from 'react';
import './Header.css';
import { IconButton, Avatar } from '@material-ui/core';
import Menu from '@material-ui/icons/Menu';
import Search from '@material-ui/icons/Search';
import ArrowDropDown from '@material-ui/icons/ArrowDropDown';
import HelpOutline from '@material-ui/icons/HelpOutline';
import Settings from '@material-ui/icons/Settings';
import Apps from '@material-ui/icons/Apps';
import { useSelector } from 'react-redux';
import { selectUser } from './../../features/userSlice';

const Header = () => {
    const user = useSelector(selectUser);
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
                <ArrowDropDown className="header_input" />
            </div>
            <div className="header__right">
                <IconButton>
                    <HelpOutline />
                </IconButton>
                <IconButton>
                    <Settings />
                </IconButton>
                <IconButton>
                    <Apps />
                </IconButton>
                <Avatar src={user?.photoURL}/>
              
            </div>
        </div>
    )
}

export default Header
