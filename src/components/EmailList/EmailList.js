import React from 'react'
import { Checkbox, IconButton } from '@material-ui/core';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown'
import RedoIcon from '@material-ui/icons/Redo'
import MoreVertIcon from '@material-ui/icons/MoreVert'
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft'
import ChevronRightIcon from '@material-ui/icons/ChevronRight'
import KeyboardHideIcon from '@material-ui/icons/KeyboardHide'
import SettingsIcon from '@material-ui/icons/Settings'
import InboxIcon from '@material-ui/icons/Inbox'
import Section from './Section/Section'
import './EmailList.css'


const EmailList = () => {
    return (
        <div className="emailList">
            <div className="emailList__settings">
                <div className="emailList__settingsLeft">
                    <Checkbox />
                    <IconButton>
                        <ArrowDropDownIcon />
                    </IconButton>
                    <IconButton>
                        <RedoIcon />
                    </IconButton>
                    <IconButton>
                        <MoreVertIcon />
                    </IconButton>
                </div>
                <div className="emailList__settingsRight">
                    <IconButton>
                        <ChevronLeftIcon />
                    </IconButton>
                    <IconButton>
                        <ChevronRightIcon />
                    </IconButton>
                    <IconButton>
                        <KeyboardHideIcon />
                    </IconButton>
                    <IconButton>
                        <SettingsIcon />
                    </IconButton>
                </div>
                
                <div className="emailList_sections">
                    <Section 
                    Icon={InboxIcon}
                    title="primary"
                    color="red"
                    selected={true}
                    />
                </div>

            </div>
        </div>
    )
}

export default EmailList
