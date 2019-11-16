import React from 'react';
import GoogleAuth from './GoogleAuth';

const SignInForm = ( { header, detail} ) => {

    return (
        <div className="sheet-container">
            <div>
                <h3>
                    {header}
                </h3>
                <h4>
                    {detail}
                </h4>
            </div>

            <div className="auth-container">
                <GoogleAuth />
            </div>
        </div>
    );
}

export default SignInForm;