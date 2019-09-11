import React, { Component } from 'react';
import TableRow from './TableRow';

class Tabla extends Component{

    tabRow() {
        return this.props.datos.map(function (object, i) {
            return <TableRow obj={object} key={i} />;
        })
    }

    render(){
        return(
            <div className="container">
                <table className=" table-active table-sm table table-hover table-striped table-dark table-responsive">
                    <thead className="thead-dark">
                        <tr>
                            <td>Sentimiento</td>
                            <td>Nombre</td>
                            <td>Texto</td>
                        </tr>
                    </thead>
                    <tbody>
                        {this.tabRow()}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default Tabla;