import React, { Component } from 'react';

import './styles/index.css';
import './styles/browse.css';

import Item from './Item.js';

import product_0 from './images/products/product_1.png'
import product_1 from './images/products/product_2.png'
import product_2 from './images/products/product_3.png'
import product_3 from './images/products/product_4.png'
import product_4 from './images/products/product_5.png'
import product_5 from './images/products/product_6.png'
import product_6 from './images/products/product_7.png'
import product_7 from './images/products/product_8.png'
import product_8 from './images/products/product_9.png'
import product_9 from './images/products/product_10.png'
import product_10 from './images/products/product_11.png'
import product_11 from './images/products/product_12.png'

//Load JSON file
var product_details = require('./data.json'); //with path

class Products extends Component{
  constructor(props) {
    super(props);
  }

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
<div id="browse_right_panel">

<table id="product">
  <tbody>
<tr>

<td>
     <Item
     title={product_details[0].title.toUpperCase()}
     price={product_details[0].price}
     description={product_details[0].description}
     image={product_0}
     quantity={product_details[0].quantity}
     altText="product"
     />
</td>

<td>
     <Item
     title={product_details[1].title.toUpperCase()}
     price={product_details[1].price}
     description={product_details[1].description}
     image={product_1}
     quantity={product_details[1].quantity}
     altText="product"
     />
</td>

<td>
     <Item
     title={product_details[2].title.toUpperCase()}
     price={product_details[2].price}
     description={product_details[2].description}
     image={product_2}
     quantity={product_details[2].quantity}
     altText="product"
     />
</td>

<td>
     <Item
     title={product_details[3].title.toUpperCase()}
     price={product_details[3].price}
     description={product_details[3].description}
     image={product_3}
     quantity={product_details[3].quantity}
     altText="product"
     />
</td>

</tr>
<tr>


<td>
     <Item
     title={product_details[4].title.toUpperCase()}
     price={product_details[4].price}
     description={product_details[4].description}
     image={product_4}
     quantity={product_details[4].quantity}
     altText="product"
     />
</td>

<td>
     <Item
     title={product_details[5].title.toUpperCase()}
     price={product_details[5].price}
     description={product_details[5].description}
     image={product_5}
     quantity={product_details[5].quantity}
     altText="product"
     />
</td>

<td>
     <Item
     title={product_details[6].title.toUpperCase()}
     price={product_details[6].price}
     description={product_details[6].description}
     image={product_6}
     quantity={product_details[6].quantity}
     altText="product"
     />
</td>

<td>
     <Item
     title={product_details[7].title.toUpperCase()}
     price={product_details[7].price}
     description={product_details[7].description}
     image={product_7}
     quantity={product_details[7].quantity}
     altText="product"
     />
</td>


</tr>
<tr>


<td>
     <Item
     title={product_details[8].title.toUpperCase()}
     price={product_details[8].price}
     description={product_details[8].description}
     image={product_8}
     quantity={product_details[8].quantity}
     altText="product"
     />
</td>

<td>
     <Item
     title={product_details[9].title.toUpperCase()}
     price={product_details[9].price}
     description={product_details[9].description}
     image={product_9}
     quantity={product_details[9].quantity}
     altText="product"
     />
</td>

<td>
     <Item
     title={product_details[10].title.toUpperCase()}
     price={product_details[10].price}
     description={product_details[10].description}
     image={product_10}
     quantity={product_details[10].quantity}
     altText="product"
     />
</td>

<td>
     <Item
     title={product_details[11].title.toUpperCase()}
     price={product_details[11].price}
     description={product_details[11].description}
     image={product_11}
     quantity={product_details[11].quantity}
     altText="product"
     />
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