import React, { Component } from 'react';

import './styles/index.css';
import './styles/detail.css';

import chevronLeft from './images/icons/left_chevron.png';
import chevronRight from './images/icons/right_chevron.png';
import thumbnail_1 from './images/products/product_2.png';
import main_image from './images/products/product_2.png';
import filled_star from './images/icons/filled_star.png';
import empty_star from './images/icons/empty_star.png';


//Load JSON file
var product_details = require('./data.json'); 

class ProductDetail extends Component{
  constructor(props) {
   super(props);
   
  this.state = {
      product_id: -1,
  };
  }


  render() {
      var temp = window.location.href.split("/");
      temp = temp[temp.length-1];
      var product_id = parseInt(temp)
      this.state.product_id = product_id;
    return (
    <div>
    <div>
<table id="page_nav">
<tbody>
<tr>
<td>
<ul className="breadcrumb">
  <li><a href="">Cat</a></li>
  <li><a href="">Accessories</a></li>
  <li id="breadcrumb_product_name">{product_details[this.state.product_id].title}</li>
</ul>
</td>
<td id="prev_next"><img src={chevronLeft} alt="left chevron" className="icon" /></td>
<td><div className="nav_link"><a href="">Prev</a></div></td>
<td>|</td>
<td><div className="nav_link"><a href="">Next</a></div></td>
<td><img src={chevronRight} alt="right chevron" className="icon" /></td>
</tr>
</tbody>
</table>
</div>
<div id="columns">
<div id="detail_left_panel">
	<div className="product_detail_thumbnail"><img id="thumb_1" className="product_detail_thumbnail" alt="thumbnail" src={thumbnail_1} /></div>
	<div className="product_detail_thumbnail"><img id="thumb_2" className="product_detail_thumbnail" alt="thumbnail" src={thumbnail_1} /></div>
	<div className="product_detail_thumbnail"><img id="thumb_3" className="product_detail_thumbnail" alt="thumbnail" src={thumbnail_1} /></div>
</div>
<div id="detail_center_panel">
	<img id="main_image" alt="product" src={main_image} />
</div>
<div id="detail_right_panel">
	<h2 id="product_name">{product_details[this.state.product_id].title}</h2>
	<h3 id="price">{product_details[this.state.product_id].price}</h3>
	
	<table>
    <tbody>
<tr>
	<td><img src={filled_star} alt="star" /></td>
	<td><img src={filled_star} alt="star" /></td>
	<td><img src={filled_star} alt="star" /></td>
	<td><img src={filled_star} alt="star" /></td>
	<td><img src={empty_star} alt="star" /></td>
    <td id="rating">4.0</td>
    <td><div><a id="reviews_link" href="">206</a></div></td>
</tr>
</tbody>
</table>

<p id="color_string">COLOR: STRAWBERRY</p>

	<table id="colors">
    <tbody>
<tr>
	<td><div value="strawberry" className="product_color_1 active_color color_swatch"></div></td>
	<td><div value="fire orange" className="product_color_2 color_swatch"></div></td>
	<td><div value="night moon" className="product_color_3 color_swatch"></div></td>
	<td><div value="camouflage" className="product_color_4 color_swatch"></div></td>
	<td><div value="crazyberry" className="product_color_5 color_swatch"></div></td>
	<td><div value="blackberry" className="product_color_6 color_swatch"></div></td>
</tr>
</tbody>
</table>

<p id="size_string">SIZE: S (In Stock)</p>

	<table id="sizes">
    <tbody>
<tr>
	<td><div id="size_1" value="XS" className="active_size size_option">XS</div></td>
	<td><div id="size_2" value="S" className="size_option">S</div></td>
	<td><div id="size_3" value="M" className="size_option">M</div></td>
	<td><div id="size_4" value="L" className="size_option">L</div></td>
</tr>
   </tbody>
</table>

<table id="quantity">
    <tbody>
<tr>
	<td><p>SELECT QUANTITY: </p></td>
	<td><input id="qty" type="number" min="1" max="5" /></td>
</tr>
    </tbody>
</table>

<div className="add_button" id="add_to_cart"><input type="submit" name="" value="" /></div>


	<table id="info">
        <tbody>
<tr>

    <td><div><a href="" className="info_links">DESCRIPTION | </a></div></td>
    <td><div><a href="" className="info_links">MORE DETAILS</a></div></td>
</tr>
    </tbody>
</table>

<p id="product_description">{product_details[this.state.product_id].description}</p>

</div> 
</div> 
</div>
    );
  }
}


export default ProductDetail;
