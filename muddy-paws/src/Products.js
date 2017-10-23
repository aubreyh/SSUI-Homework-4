import React, {Component} from 'react'
import {
  Link
} from 'react-router-dom'

import './styles/index.css';
import './styles/browse.css';

import Item from './Item.js';

//Load JSON file
var product_details = require('./data.json'); 

    class Products extends Component{

    render() {
      return (
        <div>   
          <div id="columns">
            <div id="browse_left_panel">
              <h3>CAT'S</h3>
              <hr />
              <div className="nav_link"><a href="">Accessories</a></div>
              <div className="nav_link"><a href="">Collar</a></div>
              <div className="nav_link"><a href="">Harness</a></div>

              <div className="section">
                <h3>SIZE</h3>
                <hr />

	            <table id="sizes">
                  <tbody>
                    <tr>
	                  <td><div className="size_option">XS</div></td>
	                  <td><div className="size_option">S</div></td>
	                  <td><div className="size_option">M</div></td>
	                  <td><div className="size_option">L</div></td>
                    </tr>
                  </tbody>
                </table>
              </div>
              
              <div className="section">
                <h3>COLOR</h3>
                <hr />

                <table id="colors">
                  <tbody>
                    <tr>
	                  <td><div className="product_color_1 color_swatch"></div></td>
	                  <td><div className="product_color_2 color_swatch"></div></td>
	                  <td><div className="product_color_3 color_swatch"></div></td>
	                  <td><div className="product_color_4 color_swatch"></div></td>
                    </tr>
                    <tr>
	                  <td><div className="product_color_5 color_swatch"></div></td>
	                  <td><div className="product_color_6 color_swatch"></div></td>
                    </tr>
                  </tbody>
                </table>          
              </div> 
            </div>
          
            <div id="browse_right_panel">

            <table id="product">
              <tbody>
                <tr>
                  <td>
                    <Link to={'/detail/'+0}>
                      <Item
                        title={product_details[0].title.toUpperCase()}
                        price={product_details[0].price}
                        description={product_details[0].description}
                        image={require("./images/products/product_0_1.png")}
                        quantity={product_details[0].quantity}
                        altText="product"
                      />
                    </Link>
                  </td>
                  <td>     
                    <Link to={'/detail/'+1}>
                      <Item
                        title={product_details[1].title.toUpperCase()}
                        price={product_details[1].price}
                        description={product_details[1].description}
                        image={require("./images/products/product_1_1.png")}
                        quantity={product_details[1].quantity}
                        altText="product"
                      />
                    </Link>
                  </td>
                  <td>
                    <Link to={'/detail/'+2}>
                      <Item
                        title={product_details[2].title.toUpperCase()}
                        price={product_details[2].price}
                        description={product_details[2].description}
                        image={require("./images/products/product_2_1.png")}
                        quantity={product_details[2].quantity}
                        altText="product"
                      />
                    </Link>
                  </td>

                  <td>
                    <Link to={'/detail/'+3}>
                      <Item
                        title={product_details[3].title.toUpperCase()}
                        price={product_details[3].price}
                        description={product_details[3].description}
                        image={require("./images/products/product_3_1.png")}
                        quantity={product_details[3].quantity}
                        altText="product"
                      />
                    </Link>
                  </td>
                </tr>
                <tr>
                  <td>
                    <Link to={'/detail/'+4}>
                      <Item
                        title={product_details[4].title.toUpperCase()}
                        price={product_details[4].price}
                        description={product_details[4].description}
                        image={require("./images/products/product_4_1.png")}
                        quantity={product_details[4].quantity}
                        altText="product"
                      />
                    </Link>
                  </td>

                  <td>
                    <Link to={'/detail/'+5}>
                      <Item
                        title={product_details[5].title.toUpperCase()}
                        price={product_details[5].price}
                        description={product_details[5].description}
                        image={require("./images/products/product_5_1.png")}
                        quantity={product_details[5].quantity}
                        altText="product"
                      />
                    </Link>
                  </td>
                  <td>
                    <Link to={'/detail/'+6}>
                      <Item
                        title={product_details[6].title.toUpperCase()}
                        price={product_details[6].price}
                        description={product_details[6].description}
                        image={require("./images/products/product_6_1.png")}
                        quantity={product_details[6].quantity}
                        altText="product"
                      />
                    </Link>
                  </td>
                  <td>
                    <Link to={'/detail/'+7}>
                      <Item
                        title={product_details[7].title.toUpperCase()}
                        price={product_details[7].price}
                        description={product_details[7].description}
                        image={require("./images/products/product_7_1.png")}
                        quantity={product_details[7].quantity}
                        altText="product"
                      />
                    </Link>
                  </td>
                </tr>
                <tr>
                  <td>
                    <Link to={'/detail/'+8}>
                      <Item
                        title={product_details[8].title.toUpperCase()}
                        price={product_details[8].price}
                        description={product_details[8].description}
                        image={require("./images/products/product_8_1.png")}
                        quantity={product_details[8].quantity}
                        altText="product"
                      />
                    </Link>
                  </td>
                  <td>
                    <Link to={'/detail/'+9}>
                      <Item
                        title={product_details[9].title.toUpperCase()}
                        price={product_details[9].price}
                        description={product_details[9].description}
                        image={require("./images/products/product_9_1.png")}
                        quantity={product_details[9].quantity}
                        altText="product"
                      />
                    </Link>
                  </td>
                  <td>
                    <Link to={'/detail/'+10}>
                      <Item
                        title={product_details[10].title.toUpperCase()}
                        price={product_details[10].price}
                        description={product_details[10].description}
                        image={require("./images/products/product_10_1.png")}
                        quantity={product_details[10].quantity}
                        altText="product"
                      />
                    </Link>
                  </td>
                  <td>
                    <Link to={'/detail/'+11}>
                      <Item
                        title={product_details[11].title.toUpperCase()}
                        price={product_details[11].price}
                        description={product_details[11].description}
                        image={require("./images/products/product_11_1.png")}
                        quantity={product_details[11].quantity}
                        altText="product"
                      />
                    </Link>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}


export default Products
