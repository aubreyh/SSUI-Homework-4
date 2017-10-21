import React from 'react'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'

import './styles/index.css';

import Header from './Header.js';
import Home from './Home.js';
import Products from './Products.js';
import ShoppingCart from './ShoppingCart.js';


const routes = [
  { path: '/',
    exact: true,
    main: () => <Home />
  },
  { path: '/cart',
    main: () => <ShoppingCart />
  },
  { path: '/browse',
    main: () => <Products />
  },
  
  { path: '/detail',
    main: () => <h2>Detail</h2>
  }
]

const App = () => (
  <Router>
    <div>
      <div className="App">
        <div id="header">
          <Header cart_quantity="1"/>
          {routes.map((route, index) => (
            <Route
              key={index}
              path={route.path}
              exact={route.exact}
              component={route.main}
            />
          ))}
        </div>
      </div>
    </div>
  </Router>
)

export default App