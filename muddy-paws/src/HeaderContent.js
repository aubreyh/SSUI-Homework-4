import React, { Component } from 'react';
//import './App.css';
import './styles/index.css';

import logo from './images/logo.png';
import searchIcon from './images/icons/search_icon.png'
import cartIcon from './images/icons/cart.png'


class HeaderContent extends Component{
  render() {
    return (
      <table id="main_content">
        <tr> 
          <td>
            <p>
              <a href="index.html">
                <img id="logo" border="0" alt="logo" src={logo} />
              </a>
            </p>
          </td>
          <td>
            <div id="search">
              <img id="search_icon" src={searchIcon}/>
              <input id="search_field" type="text" placeholder="Search" />
            </div>
          </td>
          <td>
            <p>
              <a href="cart.html">
                <img border="0" alt="cart" src={cartIcon} />
                <div id="cart_items">0</div>
              </a>
            </p>
          </td>
	    </tr>
      </table>
    );
  }
}


export default HeaderContent;
