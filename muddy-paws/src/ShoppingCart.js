import React, { Component } from 'react';

import './styles/index.css';
import './styles/cart.css';

import plus_icon from './images/icons/plus.png'


class ShoppingCart extends Component{

    checkout(){
        localStorage.clear();
        console.log("localStorage erased")
        document.getElementById("cart_quantity").innerHTML = 0;
        var items = document.getElementById("items");
        items.innerHTML = "";
        document.getElementById("subtotal").innerHTML = "$0.00";
        document.getElementById("total_cost").innerHTML = "$0.00";
    }
    
    calculateTotal(){
        var total = 0;
        var prices = document.getElementsByClassName("product_price");
        var quantities = document.getElementsByClassName("product_quantity");
        for (var i=0; i < prices.length; i++){
            var p = prices[i].innerHTML;
            var q = quantities[i].innerHTML;
            console.log(q)
            total += (parseFloat(p, 10) * parseInt(q, 10));
        }
        total = total.toFixed(2);
        document.getElementById("subtotal").innerHTML = "$" + total;
        document.getElementById("total_cost").innerHTML = "$" + total;
    }

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
              <tr className="product_entry">
                <td>
		          <div className="thumbnail">
		            <table>
                      <tbody>
		                <tr>
		                  <td>
			                <img src={product_images[value.product_id]} alt="product" />
		                  </td>
		                  <td>
		                    <table>
                              <tbody>
		                        <tr>
			                      <td className="product_title"><h3>{value.title}</h3></td>
			                        <td></td>
			                        <td><p align="right">$<span className="product_price">{value.price}</span></p></td>
		                        </tr>
			                    <tr>
			                      <td>
			                        <p>SIZE: {value.size}</p>
			                      </td>
			                      <td></td>
			                      <td></td>
			                    </tr>
			                    <tr>
			                      <td>
			                        <p>COLOR: {value.color.toUpperCase()}</p>
			                      </td>
			                      <td>
			                        <div className={class_name}></div>
			                      </td>
			                      <td></td>
			                    </tr>
			                    <tr>
			                      <td>
			                        <p>QTY: <span className="product_quantity">{value.quantity}</span></p>
			                      </td>
			                      <td></td>
			                      <td></td>
			                    </tr>
			                    <tr></tr>
			                    <tr>
			                      <td></td>
			                      <td></td>
				                  <td>
                                    <button id="edit_1" value="1" className="edit" type="submit">EDIT</button>
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
			)
		})
	}

    
    render() {   
        return (
          <div id="columns">
            <div id="left_column" className="left">
              <h2>MY CART</h2>
                <table id="items">
                  <tbody>
                    {this.renderEntry()}
                  </tbody>
                </table>
              </div> 
              <div id="right_column" className="left">
                <div id="order_summary" onLoad={this.calculateTotal}>
                  <table id="order_table" frame="box">
                    <tbody>
                      <tr>
	                    <td colSpan="2" align="center"><h2>ORDER SUMMARY</h2></td>
                      </tr>
                      <tr>
                        <td><p>Subtotal</p></td>
                        <td><p id="subtotal" align="right">$0.00</p></td>
                      </tr>
                      <tr>
                        <td><p>Discount</p></td>
                        <td><p align="right">$0.00</p></td>
                      </tr>
                      <tr>
                        <td><p>Shipping</p></td>
                        <td><p align="right">$0.00</p></td>
                      </tr>
                      <tr><td><br /></td></tr>
                      <tr className="border_bottom">
                        <td><h3>Total</h3></td>
                        <td><h3 id="total_cost" align="right">$0.00</h3><br /></td>
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
                      <div className="checkout_button" id="checkout"><input type="submit" name="" value="" onClick={this.checkout}/></div>
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
