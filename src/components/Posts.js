import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Pagination from './Pagination';

const Posts = () => {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [postPerPage, setPostPerPage] = useState(10);

    useEffect(() => {
        const fetchPost = async () => {
            setLoading(true);
            const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
            setPosts(res.data);
            setLoading(false);
        };
        fetchPost();
    }, []);

    if (loading) {
        return <p>Loading.....</p>
    };

    //Get Current posts
    const indexOfLastPost = currentPage * postPerPage;
    const indexOfFirstPost = indexOfLastPost - postPerPage;
    const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

    //Change Page
    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return (
        <div>
            <div style={{ display: "grid", gridTemplateColumns: "auto auto auto" }}>
                {
                    currentPosts.map(post => (
                        <li key={post.id} style={{ background: "darkcyan", color: "white", margin: "10px", padding: "20px", listStyle: "none", borderRadius: "10px" }}>
                            <h2>{post.title}</h2>
                            <p>{post.body}</p>
                        </li>
                    ))
                }
            </div>
            <Pagination postPerPage={postPerPage} totalPost={posts.length} paginate={paginate} />
        </div>
    );
};

export default Posts;