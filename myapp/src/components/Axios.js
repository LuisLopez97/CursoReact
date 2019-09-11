import React, { Component } from 'react';


import Pagination from './Pagination';
import Table from './Tabla';
import axios from 'axios';


class Axios extends Component {

    constructor(props){
        super(props);
        this.state = {
            datos: []
            };
        this.currentPage = 1;
        this.postPerPage = 15;
    }

    componentDidMount(){
        axios.get('./Tweets.json')
        .then(response => {
            this.setState({ datos: response.data});
        })
        .catch(function (error){
            console.log(error);
        })
    }
    render(){
        const paginate = (pageNumber) => (this.currentPage=pageNumber);
        var indexOfLastPost = this.currentPage * this.postPerPage;
        var indexOfFirstPost = indexOfLastPost - this.postPerPage;
        var currentPost = this.state.datos.slice(indexOfFirstPost, indexOfLastPost);
        return(
            <div>
                <Table datos={currentPost} />
                <Pagination postPerPage={this.postPerPage}
                            TotalPost={this.state.datos.length}
                            paginate={paginate}
                            />
            </div>
        )
    }
}
export default Axios;