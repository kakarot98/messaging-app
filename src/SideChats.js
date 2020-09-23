import React from 'react'
import './SideChats.css'
import { Avatar } from '@material-ui/core'

const SideChats = () => {
    return (
        <div className="side-chat">
           <Avatar src="https://avatars.dicebear.com/api/human/123.svg"/>
            <div className="sidebar-chat-info">
                <h2>Room name</h2>
                <p>Last message...</p>
            </div>
        </div>
    )
}

export default SideChats
