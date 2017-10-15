import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

import HeaderLinks from './HeaderLinks.js';

import logo from './images/logo.png';
import searchIcon from './images/icons/search_icon.png'
import cartIcon from './images/icons/cart.png'

const App = () => (
    <div id="header">
      <HeaderLinks/>
          <Router>
            <div >
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
                          <img border="0" alt="cart" src={cartIcon} />
                          <div id="cart_items">0</div>
                        </Link>
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
             <Route exact path="/" component={Home}/>
             <Route path="/browse" component={Browse}/>
             <Route path="/cart" component={Cart}/>
           </div>
         </Router>
    </div> //end header
)

const Home = () => (
  <div>
    <h2>Home</h2>
  </div>
)

const Browse = () => (
  <div>
    <h2>Browse</h2>
  </div>
)

const Cart = () => (
  <div>
    <h2>Cart</h2>
  </div>
)




export default App