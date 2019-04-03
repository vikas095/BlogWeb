import React, { Component } from 'react';
import Header from './components/Header'
import RouteFile from './components/RouteFile'
import Footer from './components/Footer'
import { BrowserRouter} from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div >
          <Header />
          <RouteFile />
          <Footer />
        </div>
        </BrowserRouter>

    );
  }
}

export default App;
