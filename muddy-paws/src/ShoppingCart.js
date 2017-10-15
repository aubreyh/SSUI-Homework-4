import React, { Component } from 'react';

import './styles/index.css';
import './styles/cart.css';

import plus_icon from './images/icons/plus.png'
import cart_image_1 from './images/products/product_1_2.png'
import cart_image_2 from './images/products/product_3.png'
import cart_image_3 from './images/products/product_4_3.png'


class ShoppingCart extends Component{
  render() {
    return (
<div id="columns">
<div id="left_column" className="left">
<h2>MY CART</h2>

<table id="items">
<tbody>
<tr id="entry_1" className="product_entry">
	<td>
		<div className="thumbnail">
		<table>
        <tbody>
		<tr>
		<td>
			<img src={cart_image_1} alt="product" />
		</td>
		<td>
		<table>
        <tbody>
		<tr>
			<td className="product_title"><h4>CAT HARNESS</h4></td>
			<td></td>
			<td><p align="right">$10.99</p></td>
		</tr>
			<tr>
			<td>
			<p>SIZE: S</p>
			</td>
			<td></td>
			<td></td>
			</tr>
			
			<tr>
			<td>
			<p>COLOR: CRAZYBERRY</p>
			</td>
			<td>
			<div className="product_color_5 color_swatch"></div>
			</td>
			<td></td>
			</tr>
			<tr>
			<td>
			<p>QTY: 1</p>
			</td>
			<td></td>
			<td></td>
			</tr>
			<tr>
			</tr>
			<tr>
			    <td></td>
			    <td></td>
				<td><button id="edit_1" value="1" className="edit" type="submit">EDIT</button>
				<button id="remove_1" value="1" className="remove" type="submit">REMOVE</button>
				</td>
				
			</tr>
            </tbody>
			</table>
		</td>
		</tr>
          </tbody>
			</table>
		</div>
	</td>
</tr> 

<tr id="entry_2" className="product_entry">
	<td>
		<div className="thumbnail">
		<table>
        <tbody>
		<tr>
		<td>
		<img src={cart_image_2} alt="product" />
		</td>
		<td>
		<table>
        <tbody>
		<tr>
			<td className="product_title"><h4>WATER STORAGE ATTACHMENT</h4></td>
			<td></td>
			<td align="right"><p>$7.99</p></td>
		</tr>
			<tr>
			<td>
			<p>SIZE: M</p>
			</td>
			</tr>
			
			<tr>
			<td>
			<p>COLOR: STRAWBERRY</p>
			</td>
			<td>
			<div className="product_color_1 color_swatch"></div>
			</td>
			</tr>
			<tr>
			<td>
			<p>QTY: 1</p>
			</td>
			</tr>
			<tr>
			</tr>
			<tr>
			    <td></td>
			    <td></td>
				<td><button id="edit_2" value="2" className="edit" type="submit">EDIT</button>
				<button id="remove_2" value="2" className="remove" type="submit">REMOVE</button>
				</td>
				
			</tr>
            </tbody>
			</table>
		</td>
		</tr>
          </tbody>
			</table>
		</div>
	</td>
</tr> 

<tr id="entry_3" className="product_entry">
	<td>
		<div className="thumbnail">
		<table>
        <tbody>
		<tr>
		<td>
		<img src={cart_image_3} alt="product" />
		</td>
		<td>
		<table>
        <tbody>
		<tr>
			<td className="product_title"><h4>GPS TRACKER COLLAR</h4></td>
			<td></td>
			<td align="right"><p>$51.65</p></td>
		</tr>
			<tr>
			<td>
			<p>SIZE: S</p>
			</td>
			</tr>
			
			<tr>
			<td>
			<p>COLOR: BLACKBERRY</p>
			</td>
			<td>
			<div className="product_color_6 color_swatch"></div>
			</td>
			</tr>
			<tr>
			<td>
			<p>QTY: 1</p>
			</td>
			</tr>
			<tr>
			</tr>
			<tr>
			    <td></td>
			    <td></td>
				<td><button id="edit_3" value="3" className="edit" type="submit">EDIT</button>
				<button id="remove_3" value="3" className="remove" type="submit">REMOVE</button>
				</td>
				
			</tr>
            </tbody>
			</table>
		</td>
		</tr>
<tr></tr>
</tbody>
			</table>
		</div>
	</td>
</tr> 

</tbody>
</table>



</div> 
<div id="right_column" className="center">
<div id="order_summary">
<table frame="box">
<tbody>
<tr>
	<td align="center"><h2>ORDER SUMMARY</h2></td>
</tr>
<tr>
<td><p>Subtotal</p></td>
<td><p>$81.62</p></td>
</tr>
<tr>
<td><p>Discount</p></td>
<td><p align="right">$0.00</p></td>
</tr>
<tr>
<td><p>Shipping</p></td>
<td><p align="right">$0.00</p></td>
</tr>
<tr className="border_bottom">
<td><h3>Total</h3></td>
<td><h3>$87.61</h3></td>
</tr>
<tr>
<td><h3>PROMOTION CODE</h3></td>
<td align="right"><img src={plus_icon} alt="Add promotion code" /></td>
</tr>
<tr></tr>
<tr></tr>
</tbody>
</table>
	</div>

<table>
<tbody>
<tr>
<td>
<div className="checkout_button" id="checkout"><input type="submit" name="" value="" /></div>
</td>
</tr>
<tr>
<td>
<div className="guest_checkout_button" id="guest_checkout"><input type="submit" name="" value="" /></div>
</td>
</tr>
</tbody>
</table>

</div>

</div> 
    );
  }
}


export default ShoppingCart;
