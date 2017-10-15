import React, { Component } from 'react';

import './styles/index.css';
import './styles/detail.css';

import chevronLeft from './images/icons/left_chevron.png';
import chevronRight from './images/icons/right_chevron.png';
import thumbnail_1 from './images/products/product_2.png';
import main_image from './images/products/product_2.png';
import filled_star from './images/icons/filled_star.png';
import empty_star from './images/icons/empty_star.png';

class Detail extends Component{
  render() {
    return (
    <div>
    <div>
<table id="page_nav">
<tbody>
<tr>
<td>
<ul className="breadcrumb">
  <li><a href="#">Cat</a></li>
  <li><a href="#">Accessories</a></li>
  <li id="breadcrumb_product_name">WATER STORAGE ATTACHMENT</li>
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
<div id="left_column" className="left">
	<div className="thumbnail"><img id="thumb_1" className="thumbnail" alt="thumbnail" src={thumbnail_1} /></div>
	<div className="thumbnail"><img id="thumb_2" className="thumbnail" alt="thumbnail" src={thumbnail_1} /></div>
	<div className="thumbnail"><img id="thumb_3" className="thumbnail" alt="thumbnail" src={thumbnail_1} /></div>
</div>
<div id="center_column" className="center">
	<img id="main_image" alt="product" src={main_image} />
</div>
<div id="right_column" className="right">
	<h2 id="product_name">WATER STORAGE ATTACHMENT</h2>
	<h3 id="price">$0.00</h3>
	
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
	<td><input id="qty" type="number" value="1" min="1" max="5" /></td>
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

<p id="product_description">Portable pet cat water bottle dispenser.</p>

</div> 
</div> 
</div>
    );
  }
}


export default Detail;
