import React from "react";
import { Router, Switch, Route } from "react-router-dom";
import { Login } from "./components/Login.jsx";
import { Home } from "./components/Home.jsx";
import { TaskDetails } from "./components/TaskDetails.jsx";
import { Create } from "./components/Create.jsx";
import "./App.css";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Login />
        </Route>
        <Route exact path="/home">
          <Home />
        </Route>
        <Route exact path="/create">
          <Create />
        </Route>
        <Route path="/task/:taskId">
          <TaskDetails />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
