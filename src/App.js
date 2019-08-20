import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './App.css';
import SuperLogin from "./Component/SuperAdmin/superLogin";
import CreateUser  from "./Component/SuperAdmin/createUser";


class App extends Component {
  state = {  }
  render() { 
    return (  
       <Router>
      <div className="App" 
      style={{backgroundColor:"#fcfcfc", marginBottom:"30px"}}>
      
      <div className= "container">
      <Switch>
           <Route exact path="/" component={SuperLogin}/>
           <Route exact path="/create-user" component={CreateUser}/>
           </Switch>
        </div>
      </div>
      </Router>
    );
  }
}
 
export default App;