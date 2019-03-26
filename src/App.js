import React, { Component } from 'react';
import './App.css';
import Header from './components/Header'
import MainBody from './components/MainBody'
import Footer from './components/Footer'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <Header />
        </header>
        <div>
          <MainBody />
        </div>
        <footer>
          <Footer />
        </footer>
      </div>
    );
  }
}

export default App;
