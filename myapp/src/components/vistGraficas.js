import React, { Component } from 'react';

import Navigation from './Navigation';
import Cabecera from './Cabecera';
import Grafica from './Grafica';
import '../App.css';

import data from '../sample/Tweets.json';

class VistaGraficas extends Component {
    state = {
        data: data
    }
    render(){
        return(
            <div>
                <Navigation />
                <Cabecera />
                <div className="contenido">
                    <div className="grind">
                        <Grafica data={this.state.data}/>
                    </div>
                </div>
            </div>
        )
    }
}

export default VistaGraficas;