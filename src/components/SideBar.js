import React, { useState, useEffect } from "react";
import { Avatar, IconButton } from "@material-ui/core";
import "./SideBar.css";
import ChatRoundedIcon from "@material-ui/icons/ChatRounded";
import DonutLargeRoundedIcon from "@material-ui/icons/DonutLargeRounded";
import MoreVertRoundedIcon from "@material-ui/icons/MoreVertRounded";
import SearchIcon from "@material-ui/icons/Search";
import SideChats from "./SideChats";
import db from "../firebase";
import {useStateValue} from '../StateProvider'

const SideBar = () => {
  const [rooms, setRooms] = useState([]);
  const [{user}, dispatch] = useStateValue()

  useEffect(() => {
    const unsubscribe = db.collection("rooms").onSnapshot((snapshots) => {
      setRooms(
        snapshots.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      );
    });

    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <Avatar src={user?.photoURL}/>
        <div className="sidebar-headerIcons">
          <IconButton>
            <ChatRoundedIcon />
          </IconButton>
          <IconButton>
            <DonutLargeRoundedIcon />
          </IconButton>
          <IconButton>
            <MoreVertRoundedIcon />
          </IconButton>
        </div>
      </div>

      <div className="sidebar-search">
        <div className="sidebar-search-container">
          <IconButton>
            <SearchIcon />
          </IconButton>
          <input type="text" placeholder="Search or start new..." />
        </div>
      </div>

      <div className="sidebar-chats">
        <SideChats addNewChat />
        {rooms.map((room) => (
          <SideChats key={room.id} id={room.id} name={room.data.name} />
        ))}
      </div>
    </div>
  );
};

export default SideBar;
