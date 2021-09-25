import React from 'react'
import { useHistory } from 'react-router'
import { Checkbox, IconButton } from '@material-ui/core'
import StarOutlineIcon from '@material-ui/icons/StarOutline'
import LabelImportantIcon from '@material-ui/icons/LabelImportant'
import './EmailRow.css'

const EmailRow = ({ id, title, subject, description, time }) => {

    const history = useHistory()

    return (
        <div onClick={() => history.push("/mail")} className="emailRow">
            <div className="emailRow__options">
                <Checkbox />
                <IconButton>
                    <StarOutlineIcon />
                </IconButton>
                <IconButton>
                    <LabelImportantIcon />
                </IconButton>
            </div>
            <h3 className="emailRow__title">
                {title}
            </h3>
            <div className="emailRow__message">
                <h4>{subject} 
                <span className="emailRow__description">- {description}
                </span>
                </h4>
            </div>
            <p className="emailRow__time">{time}</p>
        </div>
    )
}

export default EmailRow
