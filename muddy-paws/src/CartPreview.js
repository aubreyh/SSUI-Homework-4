import React, { Component } from 'react';

import './styles/index.css';
import './styles/cart.css';


class CartPreview extends Component{
 
    renderEntry(){
        var temp_cart_items = localStorage.getItem("cart_items");
        if (temp_cart_items == null) {
            temp_cart_items = [];
        } else {
            temp_cart_items = JSON.parse(temp_cart_items);
        }

        const cart_items = temp_cart_items;
        
        return Object.entries(cart_items).map(([key, value], i) => {
            var photo_string = "./images/products/product_1_1.png";
            //var photo = require({photo_string});
            //console.log(photo);
			return (
                <tr className="preview_entry">
                  <td>
                    <div>
                      <table>
                        <tbody>
		                  <tr>
		                    <td>
			                  <img className="preview_thumbnail" src={require("./images/products/product_1_1.png")} alt="product" />
		                    </td>
		                    <td>
		                      <table>
                                <tbody>
		                          <tr>
			                        <td className="preview_product_title"><h4>{value.title}</h4></td>
			                        <td></td>
			                        <td><h4 align="right">${value.price}</h4></td>
		                          </tr>
			                      <tr>
			                        <td>
			                          <h4>SIZE: {value.size}</h4>
			                        </td>
			                        <td></td>
			                        <td></td>
			                      </tr>
			                      <tr>
			                        <td>
			                          <h4>COLOR: {value.color.toUpperCase()}</h4>
			                        </td>
			                        <td>
			                          <div className="product_color_5 preview_color_swatch"></div>
			                        </td>
			                        <td></td>
			                      </tr>
			                      <tr>
			                        <td>
			                          <h4>QTY: {value.quantity}</h4>
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
			)
		})
	}
   
   
    render() {
        return (
          <table id="preview">
            <tbody>
              {this.renderEntry()}
            </tbody>
          </table>
    );
  }
}


export default CartPreview;
