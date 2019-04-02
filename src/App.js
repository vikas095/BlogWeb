import React, { Component } from 'react';
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './components/Home'
import LogIn from './components/LogIn'
import SignUp from './components/SignUp'
import NotPageFound from './components/NotPageFound'
import Review from './components/Review'
import RegisteredSuccessful from './components/RegisteredSuccessful'

import { BrowserRouter, Route,  Switch } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <BrowserRouter >
        <div >
          <Header />
          <Switch className="bckgrdImg">
            <Route exact path="/" component={LogIn}/>
            <Route exact path="/signup" component={SignUp}/>
            <Route exact path="/home" component={Home}/>
            <Route exact path="/home/review" component={Review}/>
            <Route exact path="/signup/registered" component={RegisteredSuccessful}/>
            <Route component={NotPageFound} />
          </Switch>
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
