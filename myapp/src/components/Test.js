import React, { Component } from 'react';

class Test extends Component {
    render(){
        console.log(this.props.data);
        return <div>
            <h1>Hola esta es otra vista</h1>
        </div>
    }
}

export default Test;