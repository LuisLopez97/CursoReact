import React, { Component } from 'react';

class TableRow extends Component {
    render(){
        return (
            <tr>
                <td>
                    {this.props.obj.sentiment}
                </td>
                <td>
                    {this.props.obj.name}
                </td>
                <td>
                    {this.props.obj.text}
                </td>
            </tr>
        )
    }
}

export default TableRow;