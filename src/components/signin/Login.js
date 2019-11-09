import React from 'react';
import SignInForm from './SignInForm';

import './sheet.css';

const Login = () => {

    return (
        <div className="sheet-container">
            <SignInForm header="Log in" detail="One-click login" />
        </div>
    );
}

export default Login;