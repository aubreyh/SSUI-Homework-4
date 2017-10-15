import React, { Component } from 'react';
//import './styles/App.css';
import './styles/index.css';

import HeaderLinks from './HeaderLinks.js';
import HeaderContent from './HeaderContent.js';
import NavBar from './NavBar.js';
import Home from './Home.js';


class App extends Component {
  render() {
    return (
      <div className="App">
        <div>
          <header className="App-header">
            <div id="header">
               <HeaderLinks/>
               <HeaderContent/>
               <NavBar/>
            </div>
          </header>
          <Home />
        </div>
      </div>
    );
  }
}

export default App;
