import React, { Component } from 'react';

import './styles/index.css';
import './styles/home.css';

import photo_1 from './images/main_photo_1.png';
//import photo_2 from './images/main_photo_2.png';
//import photo_3 from './images/main_photo_3.png';


class Home extends Component{
    render() {
        return (
          //<div id="photo_container">
          //<div className="photos fade">
          <img className="main_photo" src={photo_1} alt="main"/>
          //</div>
          //<div className="photos fade">
          //  <img className="main_photo" src={photo_2} />
          //</div>
          //<div class="photos fade">
          //  <img className="main_photo" src={photo_3} />
          //</div>
          //</div>
        );
    }
}


export default Home;
