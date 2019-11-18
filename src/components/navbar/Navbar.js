import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';

const Navbar = ({ isSignedIn, signOut }) => {

    const loginText = () => {
        return isSignedIn ? <i className="sign out alternate icon"></i> : "Login";
    }

    const loginComponent = () => {
        return (
            isSignedIn ? <Link to="/sign_in" onClick={signOut}>
                            {loginText()}
                        </Link> :
                        <Link to="/sign_in">
                            {loginText()}
                        </Link>

        )

    }

    return (
        <div className="navbar-container ui segment">
            <div className="navbar-title">
                <Link to="/">
                    Roommate Finder
                </Link>
            </div>

            <div className="navbar-tabs">
                <Link to="/profile">
                    Profile
                </Link>
            </div>

            <div className="navbar-login">
                {loginComponent()}
            </div>
        </div>
    );
}

export default Navbar;