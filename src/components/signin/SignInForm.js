import React from 'react';
import Auth from './Auth';

const SignInForm = ( { header, detail}) => {

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
                <Auth />
            </div>
        </div>
    );
}

export default SignInForm;