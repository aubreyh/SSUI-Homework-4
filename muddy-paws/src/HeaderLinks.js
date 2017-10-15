import React, { Component } from 'react';
//import './App.css';
import './styles/index.css';

import chevronDown from './images/icons/chevron_down.png';



class HeaderLinks extends Component{
  render() {
    return (
      <table id="header_links">
        <tr>
          <td><div id="sign_in"><a href="">Sign In</a></div></td>
	      <td><div id="my_account"><a href="">My Account</a></div></td>
	      <td><div><img src={chevronDown} className="header_icon" alt="chevron" /></div></td>
        </tr>
      </table>
    );
  }
}


export default HeaderLinks;
