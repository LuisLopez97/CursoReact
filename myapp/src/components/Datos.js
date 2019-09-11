import React from 'react';

const Datos = ({posts, loading}) => {
    if(loading){
        return <h2>Loading...</h2>
    }

    return <div className="table-responsive">
        <table className="table table-hover">
            <thead>
                <tr>
                    <th>
                        Nombre
                    </th>
                    <th>
                        Sentimiento
                    </th>
                    <th>
                        Texto
                    </th>
                </tr>
            </thead>
            <tbdoy>
                {posts.map(post => (
                    <tr key={post.id}>
                        <td key={post.id}>
                            {post.name}
                        </td>
                        <td key={post.id}>
                            {post.sentiment}
                        </td>
                        <td key={post.id}>
                            {post.text}
                        </td>
                    </tr>
                    // <tr key={post.id}>
                    //     {post.sentiment}
                    // </tr>
                    // <tr key={post.id}>
                    //     {post.text}
                    // </tr>
                ))}
            </tbdoy>
        </table>
    </div>
};

export default Datos