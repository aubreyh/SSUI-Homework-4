import React, { Component } from 'react';
//import './App.css';
import './styles/index.css';

import chevronDown from './images/icons/chevron_down.png';



class NavBar extends Component{
  render() {
    return (
      <table id="nav_bar">
        <tr>
          <td><div className="nav_link"><a href="">Camp</a></div></td>
          <td><div className="nav_link"><a href="">Hike</a></div></td>
          <td><div className="nav_link"><a href="">Cycle</a></div></td>
          <td><div className="nav_link"><a href="">Run</a></div></td>
          <td><div className="nav_link"><a href="">Snow</a></div></td>
          <td><div className="nav_link"><a href="">Travel</a></div></td>
          <td><div className="nav_link"><a href="browse.html">Cat</a></div></td>
          <td><div className="nav_link"><a href="">Dog</a></div></td>
        </tr>
      </table>
    );
  }
}


export default NavBar;
