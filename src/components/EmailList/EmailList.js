import React from 'react'
import { Checkbox, IconButton } from '@material-ui/core';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown'
import ReplayIcon from '@material-ui/icons/Replay'
import MoreVertIcon from '@material-ui/icons/MoreVert'
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft'
import ChevronRightIcon from '@material-ui/icons/ChevronRight'
import KeyboardHideIcon from '@material-ui/icons/KeyboardHide'
import SettingsIcon from '@material-ui/icons/Settings'
import InboxIcon from '@material-ui/icons/Inbox'
import PeopleIcon from '@material-ui/icons/People'
import LocalOfferIcon from '@material-ui/icons/LocalOffer'
import Section from './Section/Section'
import EmailRow from './EmailRow/EmailRow'
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
                        <ReplayIcon />
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
            </div>
            <div className="emailList_sections">
                <Section
                    Icon={InboxIcon}
                    title="Primary"
                    color="red"
                    selected
                />
                <Section
                    Icon={PeopleIcon}
                    title="Social"
                    color="#1A73E8"
                />
                <Section
                    Icon={LocalOfferIcon}
                    title="Promotions"
                    color="green"
                />
            </div>
            <div className="emailList__list">
                <EmailRow
                    title="Google"
                    subject="This website looks amazing!"
                    description="voluptate deserunt."
                    time="04:11 a.m."
                />
                <EmailRow
                    title="Google"
                    subject="This website looks amazing!"
                    description="testing"
                    time="04:11 a.m."
                />
                <EmailRow
                    title="Google"
                    subject="the website looks amazing!"
                    description="testing"
                    time="04:11 a.m."
                />
                <EmailRow
                    title="Google"
                    subject="the website looks amazing!"
                    description="testing"
                    time="04:11 a.m."
                />
            </div>
        </div>
    )
}

export default EmailList
