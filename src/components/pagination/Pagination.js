import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const Pagination = ({ postsPerPage, totalPosts, paginate, currentPage, setCurrentPage }) => {

    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
        pageNumbers.push(i);
    }

    function prevPage(currentPage) {
        currentPage -= 1;
        return currentPage;
    }
    function nextPage(currentPage) {
        currentPage += 1;
        return currentPage;
    }


    return (
        <div className="mt-5">
            <nav className="text-center">
                <ul className="pagination  mt-2">
                    <li className="page-item mr-3" onClick={() => { setCurrentPage(currentPage - 1); paginate(currentPage - 1) }} ><p className="page-link">Prev</p></li>
                    {pageNumbers.map(number => (
                        <li key={number} className="page-item" >
                            <Link to="/pagination">
                                <p onClick={() => paginate(number)} className="page-link" >{number}</p>
                            </Link>
                        </li>
                    ))}
                    <li className="page-item ml-3" onClick={() => { setCurrentPage(currentPage + 1); paginate(currentPage + 1) }}><p className="page-link ">Next</p></li>
                </ul>

            </nav>

        </div>
    )
}

export default Pagination