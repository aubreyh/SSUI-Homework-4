import React, { Component } from 'react';
//import './App.css';
import './styles/index.css';
import './styles/browse.css';

import product_1 from './images/products/product_1.png'
import product_2 from './images/products/product_2.png'
import product_3 from './images/products/product_3.png'
import product_4 from './images/products/product_4.png'
import product_5 from './images/products/product_5.png'
import product_6 from './images/products/product_6.png'
import product_7 from './images/products/product_7.png'
import product_8 from './images/products/product_8.png'
import product_9 from './images/products/product_9.png'
import product_10 from './images/products/product_10.png'
import product_11 from './images/products/product_11.png'
import product_12 from './images/products/product_12.png'



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
<td><div className="thumbnail">
<h4>CAT HARNESS</h4>
<h5>$10.99</h5>
<img src={product_1} alt="product" />
	<div className="view_text"><h4>VIEW</h4></div>
</div></td>

<td><div className="thumbnail">
<h4>CAT HARNESS</h4>
<h5>$13.00</h5>
<img src={product_2} alt="product" />
	<div className="view_text"><h4>VIEW</h4></div>
</div></td>

<td><div className="thumbnail">
<h4>WATER ATTACHMENT</h4>
<h5>$7.99</h5>
<img src={product_3} alt="product" />
	<div className="view_text"><h4>VIEW</h4></div>
</div></td>

<td><div className="thumbnail">
<h4>GPS TRACKER COLLAR</h4>
<h5>$51.65</h5>
<img src={product_4} alt="product" />
	<div className="view_text"><h4>VIEW</h4></div>
</div></td>
</tr>
<tr>
<td><div className="thumbnail">
<h4>CAT HARNESS</h4>
<h5>$14.99</h5>
<img src={product_5} alt="product" />
	<div className="view_text"><h4>VIEW</h4></div>
</div></td>

<td><div className="thumbnail">
<h4>GPS TRACKER COLLAR</h4>
<h5>$32.80</h5>
<img src={product_6} alt="product" />
	<div className="view_text"><h4>VIEW</h4></div>
</div></td>

<td><div className="thumbnail">
<h4>CAT HARNESS</h4>
<h5>$7.00</h5>
<img src={product_7} alt="product" />
	<div className="view_text"><h4>VIEW</h4></div>
</div></td>

<td><div className="thumbnail">
<h4>WATER ATTACHMENT</h4>
<h5>$4.25</h5>
<img src={product_8} alt="product" />
	<div className="view_text"><h4>VIEW</h4></div>
</div></td>
</tr>
<tr>
<td><div className="thumbnail">
<h4>WATER ATTACHMENT</h4>
<h5>$5.85</h5>
<img src={product_9} alt="product" />
	<div className="view_text"><h4>VIEW</h4></div>
</div></td>

<td><div className="thumbnail">
<h4>CAT HARNESS</h4>
<h5>$19.99</h5>
<img src={product_10} alt="product" />
	<div className="view_text"><h4>VIEW</h4></div>
</div></td>

<td><div className="thumbnail">
<h4>CAT HARNESS</h4>
<h5>$24.95</h5>
<img src={product_11} alt="product" />
	<div className="view_text"><h4>VIEW</h4></div>
</div></td>

<td><div className="thumbnail">
<h4>GPS TRACKER COLLAR</h4>
<h5>$26.99</h5>
<img src={product_12} alt="product" />
	<div className="view_text"><h4>VIEW</h4></div>
</div></td>
</tr>
  </tbody>
</table>
</div>

</div>

      </div>
    );
  }
}


export default Products;
