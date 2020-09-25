import React from "react";
import Sidebar from "./components/SideBar";
import "./App.css";
import Chat from "./components/Chat";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="app">
      <div className="app-body">
        <Router>
        <Sidebar />
          <Switch>
            <Route exact path="/">            
              {/* {<Chat />} */}
            </Route>
            <Route path="/rooms/:roomId">
              <Chat />
            </Route>
            
            </Switch>          
        </Router>
      </div>
    </div>
  );
}

export default App;
