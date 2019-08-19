import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './App.css';
import Login from './Component/User/login';


class App extends Component {
  state = {  }
  render() { 
    return (  
       <Router>
      <div className="App" 
      style={{backgroundColor:"#fcfcfc", marginBottom:"30px"}}>
      
      <div className= "container">
      <Switch>
           <Route exact path="/login" component={Login}/>
           </Switch>
        </div>
      </div>
      </Router>
    );
  }
}
 
export default App;