import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './App.css';
import SuperLogin from "./Component/SuperAdmin/superLogin";
import CreateUser  from "./Component/SuperAdmin/createUser";
import UpdateUserSearch from './Component/SuperAdmin/updateUserSearch';


class App extends Component {
  state = {  }
  render() { 
    return (  
       <Router>
      <div className="App" 
      style={{backgroundColor:"#fcfcfc", marginBottom:"30px"}}>
      
      
      <Switch>
           <Route exact path="/" component={SuperLogin}/>
           <Route exact path="/create-user" component={CreateUser}/>
           <Route exact path="/get-user" component={UpdateUserSearch}/>
           </Switch>
        
      </div>
      </Router>
    );
  }
}
 
export default App;