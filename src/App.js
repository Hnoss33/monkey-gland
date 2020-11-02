import React from "react";
import "./App.css";
import Header from "./Components/Header";
import Sidebar from "./Components/Sidebar";
import Chat from "./Components/Chat";
import Login from "./Components/Login"
// import Login from "./Login";
import { useStateValue } from "./StateProvider";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import PopularG from './Components/PopularG'

function App() {
  const [{ user }, dispatch] = useStateValue();


  return (
    <div className="app">
      <Router>
        {!user ? (
          <Login />
        ) : (
          <>
            <Header />
            <div className="app__body">
              <Sidebar />
              <Switch>
                <Route path="/room/:roomId">
                  <Chat />
                </Route>
                <Route path="/">
                  <PopularG/>
                </Route>
              </Switch>
            </div>
          </>
        )}
      </Router>
    </div>
  );
}

export default App;
