import React, { Component } from 'react';

import './styles/index.css';
import './styles/home.css';

import main_image from './images/main_photo_1.png';

class Home extends Component{
    render() {
        return (
          <img className="main_photo" src={main_image} alt="main"/>
        );
    }
}


export default Home;
