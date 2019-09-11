import React, { Component } from 'react'

// const Pagination = ({ postPerPage, TotalPost, paginate }) => {

// }

class Pagination extends Component {
    render(){
        const pageNumbers = [];
        console.log(this.props.TotalPost);
        console.log(this.props.postPerPage);
        console.log(Math.ceil(this.props.TotalPost / this.props.postPerPage));
        for (let i = 1; i <= Math.ceil(this.props.TotalPost / this.props.postPerPage); i++) {
            pageNumbers.push(i);
        }
        return (
            <nav>
                <ul className="pagination">
                    {pageNumbers.map(number => (
                        <li key={number} className="page-item">
                            <a onClick={() => this.props.paginate(number)} href="/tweets#" className="page-link">
                                {number}
                            </a>
                        </li>
                    ))}
                </ul>
            </nav>
        )
    }

}
export default Pagination