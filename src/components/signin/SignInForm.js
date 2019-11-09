import React from 'react';
import Auth from './Auth';

const SignInForm = ( { header, detail}) => {

    return (
        <React.Fragment>
            <div className="header-container">
                <h3>
                    {header}
                </h3>
                <h4>
                    {detail}
                </h4>
            </div>

            <Auth />
        </React.Fragment>
    );
}

export default SignInForm;