import React, { Component } from 'react';

import './styles/index.css';
import './styles/cart.css';


class CartPreview extends Component{
 
    renderEntry(){
        var product_images = [
            require("./images/products/product_0_1.png"),
            require("./images/products/product_1_1.png"),
            require("./images/products/product_2_1.png"),
            require("./images/products/product_3_1.png"),
            require("./images/products/product_4_1.png"),
            require("./images/products/product_5_1.png"),
            require("./images/products/product_6_1.png"),
            require("./images/products/product_7_1.png"),
            require("./images/products/product_8_1.png"),
            require("./images/products/product_9_1.png"),
            require("./images/products/product_10_1.png"),
            require("./images/products/product_11_1.png"),
        ];
        
        var temp_cart_items = localStorage.getItem("cart_items");
        if (temp_cart_items == null) {
            temp_cart_items = [];
        } else {
            temp_cart_items = JSON.parse(temp_cart_items);
        }

        const cart_items = temp_cart_items;
        
        return Object.entries(cart_items).map(([key, value], i) => {
            var color_swatch = "";
            
            switch(value.color) {
            case "strawberry":
                color_swatch = "product_color_1";
                break;
            case "fire orange":
                color_swatch = "product_color_2";
                break;
            case "night moon":
                color_swatch = "product_color_3";
                break;
            case "camouflage":
                color_swatch = "product_color_4";
                break;
            case "crazyberry":
                color_swatch = "product_color_5";
                break;
            default:
                color_swatch = "product_color_6";
            }
                 
            var class_name = "preview_color_swatch " + color_swatch;

			return (
                <tr className="preview_entry">
                  <td>
                    <div>
                      <table>
                        <tbody>
		                  <tr>
		                    <td>
			                  <img className="preview_thumbnail" src={product_images[value.product_id]} alt="product" />
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
			                          <div className={class_name}></div>
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
