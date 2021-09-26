import React, { useState, useEffect } from 'react'
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
import { db } from '../../firebase';


const EmailList = () => {

    const [emails, setEmails] = useState([]);

    // Run this piece of code when the emaillist compnt running once
    useEffect(() => {
        db.collection('emails').orderBy('timestamp', 'desc').onSnapshot((snapshot) => setEmails(
            snapshot.docs.map((doc) => ({
                id: doc.id,
                data: doc.data(),
            }))
        )
        )
    }, []);

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
                {emails.map(({ id, data: { to, subject, message, timestamp } }) => (
                    <EmailRow
                        id={id}
                        key={id}
                        title={to}
                        subject={subject}
                        description={message}
                        time={new Date(timestamp?.seconds * 1000).toUTCString()}
                    />
                ))}

                <EmailRow
                    title="Adrian Zamora"
                    subject="Compose your message and enjoy"
                    description="Hope you enjoy my demo"
                    time="04:11 a.m."
                />
            </div>
        </div>
    )
}

export default EmailList
