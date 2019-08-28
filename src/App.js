import React, { Component } from "react";
import {HashRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import "./App.css";
import SuperLogin from "./Component/SuperAdmin/superLogin";
import CreateUser from "./Component/SuperAdmin/createUser";
//import UpdateUserSearch from "./Component/SuperAdmin/updateUserSearch";
//import UpdateUserForm from "./Component/SuperAdmin/updateUserForm";
import Dashboard from "./Component/SuperAdmin/dashboard";
import GetAll from "./Component/SuperAdmin/getAll";
import UpdateUser from "./Component/SuperAdmin/UpdateUser";
import NotFound from "./Component/SuperAdmin/NotFound";
import ProtectRoute from './Component/SuperAdmin/ProtectedRoute/Protected';

class App extends Component {
  state = {};
  render() {
    return (
      <Router>
        <div
          className="App"
          style={{ backgroundColor: "#ffffff", marginBottom: "30px" }}
        >
          <Switch>
            <Route exact path="/" component={SuperLogin} />
            <ProtectRoute exact path="/create-user" component={CreateUser} />
            <Route exact path="/get-user" component={UpdateUser} />
            {/* <Route exact path="/update-user" component={UpdateUserForm} /> */}
            <Route exact path="/dashboard" component={Dashboard} />
            <Route exact path="/get-all" component={GetAll} />
            <Route exact path="/notfound" component={NotFound} />
            <Redirect to="notfound"/>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
