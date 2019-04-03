import React, { Component } from 'react';
import Home from './Home'
import LogIn from './LogIn'
import SignUp from './SignUp'
import NotPageFound from './NotPageFound'
import Review from './Review'
import {Route,  Switch } from 'react-router-dom'

class RouteFile extends Component {
  render() {
    return (

          <Switch>
            <Route exact path="/" component={LogIn}></Route>
            <Route exact path="/signup" component={SignUp}></Route>
            <Route exact path="/home" component={Home}></Route>
            <Route exact path="/home/review" component={Review}></Route>
            <Route component={NotPageFound} ></Route>
          </Switch>
    );
  }
}

export default RouteFile;
