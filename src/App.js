import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import SuperLogin from "./Component/SuperAdmin/superLogin";
import CreateUser from "./Component/SuperAdmin/createUser";
import UpdateUserSearch from "./Component/SuperAdmin/updateUserSearch";
import UpdateUserForm from "./Component/SuperAdmin/updateUserForm";
import Dashboard from "./Component/SuperAdmin/dashboard";
import GetAll from "./Component/SuperAdmin/getAll";

class App extends Component {
  state = {};
  render() {
    return (
      <Router>
        <div
          className="App"
          style={{ backgroundColor: "#fcfcfc", marginBottom: "30px" }}
        >
          <Switch>
            <Route exact path="/" component={SuperLogin} />
            <Route exact path="/create-user" component={CreateUser} />
            <Route exact path="/get-user" component={UpdateUserSearch} />
            <Route exact path="/update-user" component={UpdateUserForm} />
            <Route exact path="/dashboard" component={Dashboard} />
            <Route exact path="/get-all" component={GetAll} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
