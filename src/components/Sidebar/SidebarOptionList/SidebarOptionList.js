import React from 'react'
import './SidebarOptionList.css'

const SidebarOptionList = ({ Icon, title, number, selected }) => {
    return (
        <div className={`sidebarOptionList ${selected && 'sidebarOptionList--active'}`}>
            <Icon />
            <h3>{title}</h3>
            <p>{number}</p>
        </div>
    )
}

export default SidebarOptionList
