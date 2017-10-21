import React, { Component } from 'react';

import './styles/index.css';
import './styles/cart.css';

import cart_image_1 from './images/products/product_1_2.png'
import cart_image_2 from './images/products/product_3.png'
import cart_image_3 from './images/products/product_4_3.png'


class CartContents extends Component{
  render() {
    return (

<table id="preview">
<tbody>
<tr id="preview_entry_1" className="preview_entry">
	<td>
		<div>
		<table>
        <tbody>
		<tr>
		<td>
			<img className="preview_thumbnail" src={cart_image_1} alt="product" />
		</td>
		<td>
		<table>
        <tbody>
		<tr>
			<td className="preview_product_title"><h4>CAT HARNESS</h4></td>
			<td></td>
			<td><h4 align="right">$10.99</h4></td>
		</tr>
			<tr>
			<td>
			<h4>SIZE: S</h4>
			</td>
			<td></td>
			<td></td>
			</tr>
			
			<tr>
			<td>
			<h4>COLOR: CRAZYBERRY</h4>
			</td>
			<td>
			<div className="product_color_5 preview_color_swatch"></div>
			</td>
			<td></td>
			</tr>
			<tr>
			<td>
			<h4>QTY: 1</h4>
			</td>
			<td></td>
			<td></td>
			</tr>
			<tr>
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

<tr id="preview_entry_2" className="preview_product_entry">
	<td>
		<div>
		<table>
        <tbody>
		<tr>
		<td>
		<img className="preview_thumbnail" src={cart_image_2} alt="product" />
		</td>
		<td>
		<table>
        <tbody>
		<tr>
			<td className="product_title"><h4>WATER STORAGE ATTACHMENT</h4></td>
			<td></td>
			<td align="right"><h4>$7.99</h4></td>
		</tr>
			<tr>
			<td>
			<h4>SIZE: M</h4>
			</td>
			</tr>
			
			<tr>
			<td>
			<h4>COLOR: STRAWBERRY</h4>
			</td>
			<td>
			<div className="product_color_1 preview_color_swatch"></div>
			</td>
			</tr>
			<tr>
			<td>
			<h4>QTY: 1</h4>
			</td>
			</tr>
			<tr>
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

<tr id="preview_entry_3" className="preview_product_entry">
	<td>
		<div>
		<table>
        <tbody>
		<tr>
		<td>
		<img className="preview_thumbnail" src={cart_image_3} alt="product" />
		</td>
		<td>
		<table>
        <tbody>
		<tr>
			<td className="preview_product_title"><h4>GPS TRACKER COLLAR</h4></td>
			<td></td>
			<td align="right"><h4>$51.65</h4></td>
		</tr>
			<tr>
			<td>
			<h4>SIZE: S</h4>
			</td>
			</tr>
			
			<tr>
			<td>
			<h4>COLOR: BLACKBERRY</h4>
			</td>
			<td>
			<div className="product_color_6 preview_color_swatch"></div>
			</td>
			</tr>
			<tr>
			<td>
			<h4>QTY: 1</h4>
			</td>
			</tr>
			<tr>
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

    );
  }
}


export default CartContents;
