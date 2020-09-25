import React, { useState, useEffect } from "react";
import { Avatar, IconButton } from "@material-ui/core";
import { useParams } from "react-router-dom";
import "./Chat.css";
import SearchIcon from "@material-ui/icons/Search";
import AttachFileIcon from "@material-ui/icons/AttachFile";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import MicIcon from "@material-ui/icons/Mic";
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";
//import SendIcon from '@material-ui/icons/Send';
import db from "../firebase";

const Chat = () => {
  const [seed, setSeed] = useState("");
  const [typedMessage, setTypedMessage] = useState("");
  const { roomId } = useParams();
  const [roomName, setRoomName] = useState("");

  useEffect(() => {
    db.collection("rooms")
      .doc(roomId)
      .onSnapshot((snapshot) => setRoomName(snapshot.data().name));
  }, [roomId]);

  const sendMessage = (e) => {
    e.preventDefault();
    //kconsole.log("you typed the following message ->>>", typedMessage)
    setTypedMessage("");
  };

  useEffect(() => {
    setSeed(Math.floor(Math.random() * 5000));
  }, [roomId]);

  return (
    <div className="chat">
      <div className="chat-header">
        <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />

        <div className="chat-header-info">
          <h2>{roomName}</h2>
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
        <p className={`chat-body-message ${true && "chat-receiver"}`}>
          <span className="chat-body-message-name">Carrot</span>Hello
          <span className="chat-body-message-timestamp">7:30PM</span>
        </p>
      </div>

      <div className="chat-footer">
        <IconButton>
          <InsertEmoticonIcon />
        </IconButton>
        <form>
          <input
            value={typedMessage}
            onChange={(e) => setTypedMessage(e.target.value)}
            type="text"
            placeholder="Type your message..."
          />
          <button onClick={sendMessage} onSubmit="submit">
            Send Message
          </button>
        </form>
        <IconButton>
          <MicIcon />
        </IconButton>
      </div>
    </div>
  );
};

export default Chat;
