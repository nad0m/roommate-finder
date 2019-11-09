import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';

const Navbar = () => {

    return (
        <div className="navbar-container ui segment">
            <div className="navbar-title">
                <Link to="/">
                    Roommate Finder
                </Link>
            </div>

            <div className="navbar-login">
                <Link to="/sign_in">
                    Login
                </Link>
            </div>
        </div>
    );
}

export default Navbar;