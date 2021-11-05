import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from "react-router-dom";
import Login from "./home/login";
import SignUp from './home/register';
import Home from './home/home';
import CreateIdea from './home/CreateIdea';
import "bootstrap-icons/font/bootstrap-icons.css";
import { Component } from 'react';

class ProtectedRoute extends Component {
  isAuthenticated = false;
  componentDidMount(){
    this.isAuthenticated = localStorage.getItem("userToken") !== undefined;
  }
  
  render() {
    console.log(this.isAuthenticated);
    const { component: Component, ...props } = this.props
    return (
      <Route 
        {...props} 
        render={props => (
          this.isAuthenticated ?
            <Component {...props} /> :
            <Redirect to='/login' />
        )} 
      />
    )
  }
}


function App() {
  return (
    <Router>
      <Switch>
        <ProtectedRoute exact path='/' component={Home} />
        {/* <Route exact path='/' component={Home} /> */}
        <ProtectedRoute exact path='/card' component={CreateIdea}/>
        <Route path="/login" component={Login} />
        <Route path="/register" component={SignUp} />
      </Switch>
    </Router>
  );
}

export default App;