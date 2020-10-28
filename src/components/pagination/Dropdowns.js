import React from 'react';

const Dropdowns = ({ pagDropdown, postsPerPage }) => {
    const itemsPerPages = [5, 10, 20, 25, 50];

    return (
        <div>
            <div className="dropdown float-right">
                <button className="btn btn-primary dropdown-toggle" type="button" data-toggle="dropdown">{postsPerPage}
                    <span className="caret"></span></button>
                <ul className="dropdown-menu">
                    {itemsPerPages.map(num => (
                        <li
                            className="dropdown-item"
                            onClick={() => pagDropdown(num)}
                            value={num}
                            key={num}>
                            {num}
                        </li>
                    ))}
                </ul>
            </div>
            <div style={{ clear: 'both ' }} ></div>
        </div>
    )
}

export default Dropdowns
