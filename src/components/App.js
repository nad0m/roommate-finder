import React from 'react';
import { Router, Route } from 'react-router-dom';
import history from '../history';

import Navbar from './navbar/Navbar';
import LandingPage from './routes/LandingPage';
import SignInPage from './routes/SignInPage';
import ProfilePage from './routes/ProfilePage';

const App = () => {

    return (
        <div className="ui container">
            <Router history={history}>
                <div>
                    <Navbar />
                    <Route path="/" exact component={LandingPage} />
                    <Route path="/sign_in" exact component={SignInPage} />
                    <Route path="/profile" exact component={ProfilePage} />
                </div>
            </Router>
        </div>
    )
}

export default App;

