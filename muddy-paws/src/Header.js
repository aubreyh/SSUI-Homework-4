import React, {Component} from 'react'
import {
  Link
} from 'react-router-dom'


import './styles/index.css';

import CartContents from './CartContents.js';

import logo from './images/logo.png';
import searchIcon from './images/icons/search_icon.png'
import cartIcon from './images/icons/cart.png'
import chevronDown from './images/icons/chevron_down.png';



class Header extends Component{  
  constructor(props) {
    super(props);
    
  this.state = {
      display: "none",
  };
  this.mouseEnter = this.mouseEnter.bind(this);
  this.mouseLeave = this.mouseLeave.bind(this);
}
  
mouseEnter() {
    this.setState({display: "block"})
}

mouseLeave() {
    this.setState({display: "none"})
}

  render() {
    return (
    <div>
      <table id="header_links">
        <tbody>
          <tr>
            <td><div id="sign_in"><a href="">Sign In</a></div></td>
	        <td><div id="my_account"><a href="">My Account</a></div></td>
	        <td><div><img src={chevronDown} className="header_icon" alt="chevron" /></div></td>
          </tr>
        </tbody>
      </table>
      
      <div id="header_content">
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
                  <img onMouseEnter={this.mouseEnter} onMouseLeave={this.mouseLeave} border="0" alt="cart" src={cartIcon} />
                  <div id="cart_items">{this.props.cart_quantity}</div>
                </Link>
                <div id="cart_preview" style={{display: this.state.display}}>
                  <CartContents />
                </div>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div>
    
       
      <table id="nav_bar">
    <tbody>
     <tr>
       <td><div className="nav_link"><a href="">Camp</a></div></td>
       <td><div className="nav_link"><a href="">Hike</a></div></td>
       <td><div className="nav_link"><a href="">Cycle</a></div></td>
       <td><div className="nav_link"><a href="">Run</a></div></td>
       <td><div className="nav_link"><a href="">Snow</a></div></td>
       <td><div className="nav_link"><a href="">Travel</a></div></td>
       <td><div className="nav_link"><Link to="/browse">Cat</Link></div></td>
       <td><div className="nav_link"><a href="">Dog</a></div></td>
     </tr>
   </tbody>
   </table>
   </div>        
   </div> 
            
    );
  }
}


export default Header;
