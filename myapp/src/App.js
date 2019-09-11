import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Cabecera from './components/Cabecera';
import Navigation from './components/Navigation';
import Contenido from './components/Contenido';
import Tweets from './components/Tweets';
import VistaGraficas from './components/vistGraficas';
import VistaMapa from './components/vistaMapa';

import data from './sample/Tweets.json';
// import '../node_modules/react-vis/dist/style.css';

class App extends React.Component {
    state = {
        data: data
    }

render() {
        return <div>
            <Router>
                <Route exact path="/" render={() => {
                    return <div>
                        <Navigation />
                        <Cabecera />
                        <Contenido data={this.state.data} />
                    </div>
                }}>
                </Route>
                <Route exact path="/tweets" component={Tweets}></Route>
                <Route exact path="/grafica" component={VistaGraficas}></Route>
                <Route exact path="/mapa" component={VistaMapa}></Route>
            </Router>
        </div>
    }
}
export default App;