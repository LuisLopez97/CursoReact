import React, { Component } from 'react';

class Navigation extends Component {
    render() {
        return <nav className="sidenav">
            <li className="nav-item"><a className="nav-link" href="/">
                Inicio</a>
            </li>
            <li className="nav-item"><a className="nav-link" href="/tweets">
                Tweets</a>
            </li>
            <li className="nav-item"><a className="nav-link" href="/grafica">
                Graficas</a>
            </li>
            <li className="nav-item"><a className="nav-link" href="/mapa">
                Mapa</a>
            </li>
        </nav>
    }
}

export default Navigation;