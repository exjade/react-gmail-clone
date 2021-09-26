import React from 'react';
import './Sidebar.css';
import SidebarOptionList from './SidebarOptionList/SidebarOptionList';
import { Button, IconButton } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import InboxIcon from '@material-ui/icons/Inbox';
import StarIcon from '@material-ui/icons/Star';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import LabelImportantIcon from '@material-ui/icons/LabelImportant';
import SendIcon from '@material-ui/icons/Send';
import LabelIcon from '@material-ui/icons/Label';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import InsertDriveFileIcon from '@material-ui/icons/InsertDriveFile';
import PersonIcon from '@material-ui/icons/Person';
import PhoneIcon from '@material-ui/icons/Phone';
import DuoIcon from '@material-ui/icons/Duo';
import { useDispatch } from 'react-redux'
import { openSendMessage } from '../../features/mailSlice';

const Sidebar = () => {

    const dispatch = useDispatch()

    return (
        <div className="sidebar">
            <Button
                startIcon={<AddIcon fontSize="large" />}
                className="sidebar__compose"
                onClick={() => dispatch(openSendMessage())}
                >
                Compose
            </Button>
            <SidebarOptionList
                Icon={InboxIcon}
                title="Inbox"
                number={530}
                selected={true}
            />
            <SidebarOptionList
                Icon={StarIcon}
                title="Starred"
                number={130}
            />
            <SidebarOptionList
                Icon={AccessTimeIcon}
                title="Snoozed"
                number={50}
            />
            <SidebarOptionList
                Icon={LabelImportantIcon}
                title="Important"
                number={35}
            />
            <SidebarOptionList
                Icon={SendIcon}
                title="Sent"
                number={15}
            />
            <SidebarOptionList
                Icon={InsertDriveFileIcon}
                title="Drafts"
                number={40}
            />
            <SidebarOptionList
                Icon={LabelIcon}
                title="Categories"
                number={10}
            />
            <SidebarOptionList
                Icon={LabelIcon}
                title="To do"
                number={0}
            />
            <SidebarOptionList
                Icon={KeyboardArrowDownIcon}
                title="More"
                number={0}
            />

            <div className="sidebar__footer">
                <div className="sidebar__footerIcons">
                <IconButton>
                    <PersonIcon />
                </IconButton>
                <IconButton>
                    <DuoIcon />
                </IconButton> 
                <IconButton>
                    <PhoneIcon />
                </IconButton>
                </div>
            </div>
        </div>
    )
}

export default Sidebar
