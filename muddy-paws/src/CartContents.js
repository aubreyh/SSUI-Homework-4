import React, { Component } from 'react';

import './styles/index.css';
import './styles/cart.css';


class CartContents extends Component{


    
  render() {
   var temp_cart_items = localStorage.getItem("cart_items");
        if (temp_cart_items == null) {
      temp_cart_items = [];
    } else {
      temp_cart_items = JSON.parse(temp_cart_items);
      console.log(temp_cart_items)
    }

    while (temp_cart_items.length < 3){
      temp_cart_items.push({
      product_id: "",
      title: "",
      price: "",
      size: "",
      color: "",
      photo: "./images/products/no_product.png",
      quantity: ""
    });  
    }
    const cart_items = temp_cart_items;
    //this.setState({cart_items: cart_items});

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
			<img className="preview_thumbnail" src={require("./images/products/product_2_1.png")} alt="product" />
		</td>
		<td>
		<table>
        <tbody>
		<tr>
			<td className="preview_product_title"><h4>{cart_items[0].title}</h4></td>
			<td></td>
			<td><h4 align="right">{cart_items[0].price}</h4></td>
		</tr>
			<tr>
			<td>
			<h4>SIZE: {cart_items[0].size}</h4>
			</td>
			<td></td>
			<td></td>
			</tr>
			
			<tr>
			<td>
			<h4>COLOR: {cart_items[0].color}</h4>
			</td>
			<td>
			<div className="product_color_5 preview_color_swatch"></div>
			</td>
			<td></td>
			</tr>
			<tr>
			<td>
			<h4>QTY: {cart_items[0].quantity}</h4>
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
		<img className="preview_thumbnail" src={require("./images/products/product_2_1.png")} alt="product" />
		</td>
		<td>
		<table>
        <tbody>
		<tr>
			<td className="product_title"><h4>{cart_items[1].title}</h4></td>
			<td></td>
			<td align="right"><h4>{cart_items[1].price}</h4></td>
		</tr>
			<tr>
			<td>
			<h4>SIZE: {cart_items[1].size}</h4>
			</td>
			</tr>
			
			<tr>
			<td>
			<h4>COLOR: {cart_items[1].color}</h4>
			</td>
			<td>
			<div className="product_color_1 preview_color_swatch"></div>
			</td>
			</tr>
			<tr>
			<td>
			<h4>QTY: {cart_items[1].quantity}</h4>
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
		<img className="preview_thumbnail" src={require("./images/products/product_2_1.png")} alt="product" />
		</td>
		<td>
		<table>
        <tbody>
		<tr>
			<td className="preview_product_title"><h4>{cart_items[2].title}</h4></td>
			<td></td>
			<td align="right"><h4>{cart_items[2].price}</h4></td>
		</tr>
			<tr>
			<td>
			<h4>SIZE: S</h4>
			</td>
			</tr>
			
			<tr>
			<td>
			<h4>COLOR: {cart_items[2].color}</h4>
			</td>
			<td>
			<div className="product_color_6 preview_color_swatch"></div>
			</td>
			</tr>
			<tr>
			<td>
			<h4>QTY: {cart_items[2].quantity}</h4>
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
