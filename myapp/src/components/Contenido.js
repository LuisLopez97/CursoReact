import React, { Component } from 'react';
import Tabla from './TablaP';
import Grafica from './Grafica';


class Contenido extends Component {
    render (){
        return <div className="contenido" id="contenido">
            <div className="row">
                <div className="columna Izq">
                    <Tabla data={this.props.data.slice(0,10)}/>
                </div>
                <div className="columna Der">
                    <Grafica data={this.props.data}/>
                    </div>
            </div>
            <div className="card text-center">
                <div className="card-header">
                    REACT-BOOTSTRAP
                </div>
                <div className="card-body">
                    <h5 className="card-title">Cambiar de fondo</h5>
                    <p id="objetivo" className="card-text">Seleccione el boton que desee para cambiar color del fondo</p>
                    <button className="btn btn-secondary">Gris</button>
                    <button className="btn btn-light">Blanco</button>
                    <button className="btn btn-dark">Oscuro</button>
                </div>
                <div className="card-footer text-muted">
                    6 de septiembre de 2019
                </div>
            </div>
            {/* <div className="footer">
                <p>Cambiar color del fondo:
                    <button>Gris</button>
                    <button>Blanco</button>
                    <button>Negro</button>
                </p>
            </div> */}
        </div>
    }
}

export default Contenido;