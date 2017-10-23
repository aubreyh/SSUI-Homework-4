import React, { Component } from 'react';

import './styles/index.css';
import './styles/detail.css';

import chevronLeft from './images/icons/left_chevron.png';
import chevronRight from './images/icons/right_chevron.png';
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


    /*Update the number of items in the cart with the quantity of items selected*/
    updateCart(){  
    
        //increment quantity 
        var previous_count = document.getElementById('cart_quantity').innerHTML;
        var quantity = document.getElementById('qty').value;
        var new_value = parseInt(previous_count, 10) + parseInt(quantity, 10);
        document.getElementById('cart_quantity').innerHTML = new_value;
        localStorage.setItem('cart_quantity', new_value);
    
        //add product
        var title = document.getElementById('product_name').innerHTML;
        var price = document.getElementById('price').innerHTML;
        var size = document.getElementsByClassName('active_size')[0].getAttribute('value');
        var color = document.getElementsByClassName('active_color')[0].getAttribute('value');

        var temp = window.location.href.split("/");
        temp = temp[temp.length-1];
        var product_id = parseInt(temp, 10);
        var photo = "./images/products/product_" + product_id + "_1.png"

        var items = localStorage.getItem("cart_items");
        if (items == null) {
            items = [];
        } 
        else {
            items = JSON.parse(items);
      
        }
    
        items.push({
            product_id: product_id,
            title: title,
            price: price,
            size: size,
            color: color,
            photo: photo,
            quantity: quantity
        });
    
        localStorage.setItem('cart_items', JSON.stringify(items));
    }

    
    addColorListener(event, type){
        console.log("add color listener")
        var class_name = "active_" + type;
        
        //remove active class
        var previous_item_id = document.getElementsByClassName(class_name)[0].id;
        var old_item = document.getElementById(previous_item_id);
        old_item.classList.remove(class_name);
        
        //add active class
        var new_item_id = event.target.id;
        var new_item = document.getElementById(new_item_id);
        new_item.classList.add(class_name); 
        
        //update text
        var string_id = type + "_string";
        var content = type + ": " + new_item.getAttribute('value');
        content = content.toUpperCase();
        
        if(type === "size"){
            content += " (In Stock)";
        }
        
        var text_element = document.getElementById(string_id);
        text_element.innerHTML = content;
    }
 
    render() {
      
        var temp = window.location.href.split("/");
        temp = temp[temp.length-1];
        var product_id = parseInt(temp, 10);
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
	            <div className="product_detail_thumbnail"><img id="thumb_1" className="product_detail_thumbnail" alt="thumbnail" src={require("./images/products/product_" + this.state.product_id + "_1.png")} /></div>
	            <div className="product_detail_thumbnail"><img id="thumb_2" className="product_detail_thumbnail" alt="thumbnail" src={require("./images/products/product_" + this.state.product_id + "_2.png")} /></div>
	            <div className="product_detail_thumbnail"><img id="thumb_3" className="product_detail_thumbnail" alt="thumbnail" src={require("./images/products/product_" + this.state.product_id + "_3.png")} /></div>
              </div>
              <div id="detail_center_panel">
	            <img id="main_image" alt="product" src={require("./images/products/product_" + this.state.product_id + ".png")} />
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
                      <td><div><a id="reviews_link" href="">{product_details[this.state.product_id].reviews} reviews</a></div></td>
                    </tr>
                  </tbody>
                </table>

                <p id="color_string">COLOR: STRAWBERRY</p>

	            <table id="colors">
                  <tbody>
                    <tr>
	                  <td><div id="color_1" value="strawberry" className="product_color_1 active_color color_swatch" onClick={(e) => this.addColorListener(e, "color")}></div></td>
	                  <td><div id="color_2" value="fire orange" className="product_color_2 color_swatch" onClick={(e) => this.addColorListener(e, "color")}></div></td>
	                  <td><div id="color_3" value="night moon" className="product_color_3 color_swatch" onClick={(e) => this.addColorListener(e, "color")}></div></td>
	                  <td><div id="color_4" value="camouflage" className="product_color_4 color_swatch" onClick={(e) => this.addColorListener(e, "color")}></div></td>
	                  <td><div id="color_5" value="crazyberry" className="product_color_5 color_swatch" onClick={(e) => this.addColorListener(e, "color")}></div></td>
	                  <td><div id="color_6" value="blackberry" className="product_color_6 color_swatch" onClick={(e) => this.addColorListener(e, "color")}></div></td>
                    </tr>
                  </tbody>
                </table>

                <p id="size_string">SIZE: S (In Stock)</p>

	            <table id="sizes">
                  <tbody>
                    <tr>
	                  <td><div id="size_1" value="XS" className="active_size size_option" onClick={(e) => this.addColorListener(e, "size")}>XS</div></td>
	                  <td><div id="size_2" value="S" className="size_option" onClick={(e) => this.addColorListener(e, "size")}>S</div></td>
	                  <td><div id="size_3" value="M" className="size_option" onClick={(e) => this.addColorListener(e, "size")}>M</div></td>
	                  <td><div id="size_4" value="L" className="size_option" onClick={(e) => this.addColorListener(e, "size")}>L</div></td>
                    </tr>
                  </tbody>
                </table>

                <table id="quantity">
                  <tbody>
                    <tr>
	                  <td><p>SELECT QUANTITY: </p></td>
	                  <td><input id="qty" type="number" min="1" max="5" defaultValue="1" /></td>
                    </tr>
                  </tbody>
                </table>

                <div className="add_button" id="add_to_cart"><input type="submit" name="" value="" onClick={this.updateCart} /></div>

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
