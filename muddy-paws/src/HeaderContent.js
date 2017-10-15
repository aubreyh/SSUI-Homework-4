import React, { Component } from 'react';

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

//import './App.css';
import './styles/index.css';

import logo from './images/logo.png';
import searchIcon from './images/icons/search_icon.png'
import cartIcon from './images/icons/cart.png'


class HeaderContent extends Component{
  render() {
    return (
      <div>
      <table id="main_content">
        <tbody>
          <tr> 
            <td>
              <div>
                <Link to="/">
                  <img id="logo" border="0" alt="logo" src={logo} />
                </Link>
              </div>
            </td>
            <td>
              <div id="search">
                <img id="search_icon" alt="search icon" src={searchIcon}/>
                <input id="search_field" type="text" placeholder="Search" />
              </div>
            </td>
            <td>
              <div>
                <Link to="/cart">
                  <img border="0" alt="cart" src={cartIcon} />
                  <div id="cart_items">0</div>
                </Link>
              </div>
            </td>
	      </tr>
        </tbody>
      </table>
      

      <Route exact path="/" component={Home}/>
      <Route path="/cart" component={Cart}/>
      </div>
      
    );
  }
}

 const Home = () => (
  <div>
    <h2>Home</h2>
  </div>
)

 const Cart = () => (
  <div>
    <h2>This is a test.</h2>
  </div>
)

export default HeaderContent;
