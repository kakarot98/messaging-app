import React from "react";
import Sidebar from "./components/SideBar";
import "./App.css";
import Chat from "./components/Chat"

function App() {
  return (
    <div className="app">
      
      <div className="app-body">
        <Sidebar />
        <Chat />
      </div>
    </div>
  );
}

export default App;
