import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import Login from "./home/login";
import SignUp from './home/register';
import Home from './home/home';
import CreateIdea from './home/CreateIdea';
import "bootstrap-icons/font/bootstrap-icons.css";
import { Component } from 'react';
import FullApp from './FullApp';
import FullAppContext from './FullAppContext'

class ProtectedRoute extends Component {
  static contextType = FullAppContext;
  constructor(props) {
    super(props);
    this.state = {
      isAuthenticated: true
    };
  }

  render() {
    console.log(this.context);
    const { component: Component, ...props } = this.props
    console.log(this.state.isAuthenticated);
    return (
      <Route
        {...props}
        render={prop => (
          this.state.isAuthenticated ?
            <Component {...prop} /> :
            <Redirect to='/login' />
        )}
      />
    )
  }
}


function App() {
  return (
    <FullApp>
      <Router>
        <Switch>
          <ProtectedRoute exact path='/' component={Home} />
          <Route exact path='/' component={Home} />
          <ProtectedRoute exact path='/card' component={CreateIdea} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={SignUp} />
        </Switch>
      </Router>
    </FullApp>
  );
}

export default App;