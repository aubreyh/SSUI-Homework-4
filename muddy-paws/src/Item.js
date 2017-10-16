import React, { Component } from 'react';

class Item extends Component{
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <div className="thumbnail">
        <h4>{this.props.title}</h4>
        <h5>{this.props.price}</h5>
        <img src={this.props.image} alt={this.props.altText} />
            <div className="view_text"><h4>VIEW</h4></div>
        </div>
    );
  }
}


export default Item;
