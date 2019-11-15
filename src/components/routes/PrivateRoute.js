import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({component: Component, authed, ...rest}) => {

    console.log(authed);
    return (
        <Route
            {...rest}
            render={(props) => (
                authed === true ? <Component {...props} /> : <Redirect to={{pathname: '/sign_in', state: {from: props.location}}} />
            )}
        />

    );
}

export default PrivateRoute;