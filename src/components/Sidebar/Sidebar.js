import { Button } from '@material-ui/core'
import AddIcon from '@material-ui/icons/Add'
import React from 'react'
import './Sidebar.css'


const Sidebar = () => {
    return (
        <div className="sidebar">
            <Button startIcon={<AddIcon fontSize="large" className="sidebar__compose"/>}>Compose</Button>
        </div>
    )
}

export default Sidebar
