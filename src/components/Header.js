import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {

    return (
        <>
            <nav className="navbar navbar-expand-sm bg-dark navbar-dar">
                <ul className="navbar-nav">
                    <Link to='/'>
                        <li className="nav-item nav-link text-white">Home</li>
                    </Link>
                    <Link to='/weather'>
                        <li className="nav-item nav-link text-white">WeatherApp</li>
                    </Link>
                    <Link to='/pagination'>
                        <li className="nav-item nav-link text-white">Pagintatin Page</li>
                    </Link>
                    <Link to='/infinite'>
                        <li className="nav-item nav-link text-white">Infinite Scrolling</li>
                    </Link>
                </ul>
            </nav>
        </>
    )
}

export default Header