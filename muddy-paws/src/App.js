import React from 'react'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'

import './styles/index.css';

import Header from './Header.js';
import Home from './Home.js';
import Products from './Products.js';
import ProductDetail from './ProductDetail.js';
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
    main: () => <ProductDetail />
  }
]

const App = () => (
  <Router>
    <div>
      <div className="App">
        <div id="header">
          <Header />
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