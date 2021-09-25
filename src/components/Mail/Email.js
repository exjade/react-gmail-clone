import React from 'react'
import { IconButton } from '@material-ui/core'
import { useHistory } from 'react-router'
import ArrowBackIcon from '@material-ui/icons/ArrowBack'
import ArchiveIcon from '@material-ui/icons/Archive'
import ErrorIcon from '@material-ui/icons/Error'
import DeleteIcon from '@material-ui/icons/Delete'
import MarkAsUnreadIcon from '@material-ui/icons/MarkunreadSharp'
import WatchLaterIcon from '@material-ui/icons/WatchLater'
import CheckCircleIcon from '@material-ui/icons/CheckCircle'
import LabelImportantIcon from '@material-ui/icons/LabelImportant'
import MoreVertIcon from '@material-ui/icons/MoreVert'
import UnfoldMoreIcon from '@material-ui/icons/UnfoldMore'
import PrintIcon from '@material-ui/icons/Print'
import OpenInNewIcon from '@material-ui/icons/OpenInNew'
import './Email.css'

const Email = () => {

    const history = useHistory();

    return (
        <div className="mail">
            <div className="mail__tools">
                <div className="mail__toolsLeft">
                    <IconButton onClick={() => history.push("/")}>
                        <ArrowBackIcon />
                    </IconButton>
                    <IconButton>
                        <ArchiveIcon />
                    </IconButton>
                    <IconButton>
                        <ErrorIcon />
                    </IconButton>
                    <IconButton>
                        <DeleteIcon />
                    </IconButton>
                    <IconButton>
                        <MarkAsUnreadIcon />
                    </IconButton>
                    <IconButton>
                        <WatchLaterIcon />
                    </IconButton>
                    <IconButton>
                        <CheckCircleIcon />
                    </IconButton>
                    <IconButton>
                        <LabelImportantIcon />
                    </IconButton>
                    <IconButton>
                        <MoreVertIcon />
                    </IconButton>
                </div>
                <div className="mail__toolsRight">
                    <IconButton>
                        <UnfoldMoreIcon />
                    </IconButton>
                    <IconButton>
                        <PrintIcon />
                    </IconButton>
                    <IconButton>
                        <OpenInNewIcon />
                    </IconButton>
                </div>
               
            </div>
            <div className="mail__body">
                
                <div className="mail__bodyHeader">
                    <h2>Henry Pentagono</h2>
                    <LabelImportantIcon className="mail__important"/>
                    <p className="title">Ausente</p>
                    <p className="mail__time">06:00 a.m</p>
                </div>
                <div className="mail__message">
                    <p>Nos estamos quedando sin compañeros!</p>
                </div>
            </div>
        </div>
    )
}

export default Email

