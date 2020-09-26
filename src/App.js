import React, {useState} from "react";
import Sidebar from "./components/SideBar";
import "./App.css";
import Chat from "./components/Chat";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from './components/Login'
import { useStateValue } from './StateProvider'

function App() {

  const [{ user }, dispatch] = useStateValue()

  //const [user, setUser] = useState(null)

  return (
    <div className="app">

{!user ? (
  <Login />
): (
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
)}


      
    </div>
  );
}

export default App;
