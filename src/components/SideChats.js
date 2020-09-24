import React, { useState, useEffect } from "react";
import "./SideChats.css";
import { Avatar } from "@material-ui/core";
import db from '../firebase'

const SideChats = ({ id, name, addNewChat }) => {
  const [seed, setSeed] = useState("");

  useEffect(() => {
    setSeed(Math.floor(Math.random() * 5000));
    console.log(name);
  }, []);

  const createChat = () => {
    const roomName = prompt("Please enter the name of chat room");

    if (roomName) {
      db.collection("rooms").add({
        name: roomName,
      });
    }
  };

  return !addNewChat ? (
    <div className="side-chat">
      <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />
      <div className="side-chat-info">
        <h2>{name}</h2>
        <p>Last message...</p>
      </div>
    </div>
  ) : (
    <div onClick={createChat} className="side-chat">
      <h2>Add New Chat</h2>
    </div>
  );
};

export default SideChats;
