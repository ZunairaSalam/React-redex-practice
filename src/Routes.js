import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Login from "./components/Login";
import Register from './components/Register';
import Home from './components/Home';
// import Dashboard from './components/Dashboard/Dashboard';

export default function Routes() {
 
  return (
    <BrowserRouter>
    <Switch>
    <Route exact path="/">
        <Register type='Register'/>
      </Route>

      <Route exact path="/login">
        <Login type='Login'/>
      </Route>

      <Route exact path="/register">
        <Register type='Register'/>
      </Route>
      <Route exact path="/home">
        <Home />
      </Route>
    </Switch>
    </BrowserRouter>
  );
}
