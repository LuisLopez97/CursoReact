import React, { Component } from 'react';
import Navigation from './Navigation';
import Cabecera from './Cabecera';
import Axios from './Axios';
import '../App.css';

import data from '../sample/Tweets.json';


class Tweets extends Component {
    state = {
        data: data
    }
    render() {
        return <div>
            <Navigation />
            <Cabecera />
            <div className="contenido">
                <div className="grind">
                    {/* <Tabla data={this.state.data.slice(0,10)}/> */}
                    <Axios />
                </div>
            </div>
        </div>
    }
}

export default Tweets;