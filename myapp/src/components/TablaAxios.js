import React, { useState, useEffect } from 'react';
import Datos from './Datos';
import Pagination from './Pagination';
import axios from 'axios';


const TablaAxios = () => {
    const [posts, setPosts] = useState([]);
    const [headers,setHeaders] = useState([]);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [postPerPage] = useState(10);

    useEffect(() => {
        const fetchPosts = async () => {
            setLoading(true);
            const res = await axios.get('Tweets.json');
            setPosts(res.data);
            setHeaders(res.keys);
            setLoading(false);
        }
        fetchPosts();
    }, []);
    console.log(posts[0]);

    const indexOfLastPost = currentPage * postPerPage;
    const indexOfFirstPost = indexOfLastPost - postPerPage;
    const currentPost = posts.slice(indexOfFirstPost, indexOfLastPost);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);
    console.log(currentPost[0]);
    return (
        <div className='container mt-5'>
            <h1 className="text-primary mb-3">Tweets</h1>
            {/* <Datos posts={currentPost} loading={loading}/> */}
            <Datos posts={currentPost} loading={loading} />
            <Pagination postPerPage={postPerPage}
                        TotalPost={posts.length}
                        paginate={paginate} />
        </div>
    )
};

export default TablaAxios;