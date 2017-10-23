import React, { Component } from 'react';

import './styles/index.css';
import './styles/home.css';

class Home extends Component{
    render() {
        return (
          <img className="main_photo" src={require('./images/main_photo_1.png')} alt="main"/>
        );
    }
}


export default Home;
