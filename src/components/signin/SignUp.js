import React from 'react';
import SignInForm from './SignInForm';

import './sheet.css';

const SignUp = () => {

    return (
        <div className="sheet-container">
            <SignInForm header="Sign Up" detail="One-click sign up" />
        </div>
    );
}

export default SignUp;