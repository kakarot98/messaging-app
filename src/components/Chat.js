import React, {useState,useEffect} from 'react'
import { Avatar,IconButton } from "@material-ui/core"
import "./Chat.css"
import SearchIcon from '@material-ui/icons/Search';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import MoreVertIcon from '@material-ui/icons/MoreVert';



const Chat = () => {
    const [seed, setSeed] = useState('')

    useEffect(()=>{
        setSeed(Math.floor(Math.random() * 5000))
    },[])

    return (
        <div className="chat">
            <div className="chat-header">
                <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`}/>

                <div className="chat-header-info">
                    <h2>Room name</h2>
                    <p>Last Seen...</p>
                </div>

                <div className="chat-header-right-icons">
                    <IconButton>
                        <SearchIcon />
                    </IconButton>
                    <IconButton>
                        <AttachFileIcon />
                    </IconButton>
                    <IconButton>
                        <MoreVertIcon />
                    </IconButton>
                </div>
            </div>

            <div className="chat-body">
                
                <p className={`chat-body-message ${true && "chat-receiver"}`}><span className="chat-body-message-name">Carrot</span>Hello

                <span className="chat-body-message-timestamp">7:30PM</span>
                </p>
            </div>

            <div className="chat-footer"></div>
        </div>
    )
}

export default Chat
