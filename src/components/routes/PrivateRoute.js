import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({component: Component, authed, ...rest }) => {

    return (
        <Route
            {...rest}
            render={(props) => {
                console.log(props);
                return authed === true ? <Component {...props} {...rest.newProps} /> : <Redirect to={{pathname: '/sign_in', state: {from: props.location}}} />
            }}
        />

    );
}

export default PrivateRoute;