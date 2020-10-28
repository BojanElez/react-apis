/***************************************************************************/
/**Basics imports**/
/***************************************************************************/
import React, { useState, useEffect } from 'react';
import axios from 'axios';
//import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

/***************************************************************************/
/**Component imports**/
/***************************************************************************/
import Posts from './Posts';
import Pagination from './Pagination';
import Dropdowns from './Dropdowns';
import Search from './Search';


const PaginationPage = () => {
    /***************************************************************************/
    /**States**/
    /***************************************************************************/
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage, setPostsPerPage] = useState(6);
    const [search, setSearch] = useState("");
    const [filteredPosts, setFilteredPosts] = useState([]);

    /***************************************************************************/
    /**Variables**/
    /***************************************************************************/
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);
    const pagDropdown = (itemsPerPage) => setPostsPerPage(itemsPerPage);
    const dropdownApis = ['posts', 'todos']
    /***************************************************************************/
    /**Efects**/
    /***************************************************************************/
    useEffect(() => {
        setLoading(true);
        axios
            .get(`https://jsonplaceholder.typicode.com/posts`)
            .then((res) => {
                setPosts(res.data);
                setLoading(false);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    useEffect(() => {
        if (search.length > 2) {
            filteredSearch();
        } else {
            notFilteredSearch();
        }
    }, [search, posts, postsPerPage]);

    /***************************************************************************/
    /**Functions**/
    /***************************************************************************/
    const filteredSearch = () => {
        setFilteredPosts(
            posts.filter((post) =>
                post.title.toLowerCase().includes(search.toLowerCase())
            )
        );
    }

    const notFilteredSearch = () => {
        setFilteredPosts(
            posts.filter((post) =>
                post.title
            )
        );
    }
    /***************************************************************************/
    /**Conditions**/
    /***************************************************************************/

    let searchWarning;
    if (search.length > 2) {
        searchWarning = '';
    } else if (search.length > 0) {
        searchWarning = <p>you must enter at lest three characters</p>
    } else {
        searchWarning = '';
    }

    if (loading) {
        return <p>Loading countries...</p>;
    }

    let domPosts;
    if (currentPosts.length !== 0) {
        domPosts = <ul className="list-group">
            {currentPosts.map((post, idx) => (
                <Posts key={idx} {...post} />
            ))}
        </ul>
    } else if (search.length > 2) {
        domPosts = <p>searched post doesn't exist</p>
    }

    let domPagination;
    if (postsPerPage < filteredPosts.length) {
        domPagination = <Pagination
            postsPerPage={postsPerPage}
            totalPosts={filteredPosts.length}
            paginate={paginate}
            setCurrentPage={setCurrentPage}
            currentPage={currentPage} />
    } else {
        domPagination = '';
    }

    return (
        <div className="header">
            <div className="container">
                <h1 className="text-primary mb-4">My Posts</h1>
                <Search setSearch={setSearch} search={search} />
                {searchWarning}
                <Dropdowns pagDropdown={pagDropdown} postsPerPage={postsPerPage} />
                {domPosts}
                {domPagination}
            </div>
        </div>
    )
}

export default PaginationPage