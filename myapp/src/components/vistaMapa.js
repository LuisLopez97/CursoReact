import React, { Component } from 'react';
import Navigation from './Navigation';
import Cabecera from './Cabecera';
import '../App.css';
import img from '../img/mapa.webp';

class VistaMapa extends Component {
    render(){
        return(
            <div>
                <Navigation />
                <Cabecera />
                <div className="contenido">
                    <div className="grind">
                        <img src={img} alt="Mapa de los continentes del mundo"/>
                    </div>
                </div>
            </div>
        )
    }
}

export default VistaMapa;