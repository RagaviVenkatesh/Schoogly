import React from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import Home from "./views/Home";
import Announcements from "./Announcements/Announcements";
import Meeting from "./Meeting/Meeting";


function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/Announcements" component={Announcements} />
        <Route path="/Meeting" component={Meeting} />
      </Switch>
    </div>
  );
}

export default App;
