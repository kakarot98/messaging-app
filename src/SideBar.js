import React from "react";
import { Avatar, IconButton } from "@material-ui/core";
import "./SideBar.css";
import ChatRoundedIcon from "@material-ui/icons/ChatRounded";
import DonutLargeRoundedIcon from "@material-ui/icons/DonutLargeRounded";
import MoreVertRoundedIcon from "@material-ui/icons/MoreVertRounded";
import SearchIcon from '@material-ui/icons/Search';

const SideBar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <Avatar />
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
        <input type="text" placeholder="Search or start new..."/>
        </div>
      </div>

      <div className="sidebar-chats"></div>
    </div>
  );
};

export default SideBar;
