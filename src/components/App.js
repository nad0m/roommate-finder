import React from 'react';
import { connect } from 'react-redux';
import { Router, Route } from 'react-router-dom';
import PrivateRoute from './routes/PrivateRoute';
import history from '../history';

import Navbar from './navbar/Navbar';
import LandingPage from './routes/LandingPage';
import SignInPage from './routes/SignInPage';
import ProfilePage from './routes/ProfilePage';
import { signIn, signOut, saveFirebaseInstance, saveAuthProfile, saveCurrentUser } from '../actions';

import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/firestore';
import { FIREBASE_CONFIG } from '../configs/config';

class App extends React.Component {

    state = {
        isSignedIn: null
    }

    constructor(props) {
        super(props);

        if (!firebase.apps.length) {
            firebase.initializeApp(FIREBASE_CONFIG);
        }

        firebase.auth().onAuthStateChanged(this.onAuthChange);
        this.props.saveFirebaseInstance(firebase);
    }

    onAuthChange = (user) => {
        if (user) {
            const { uid, displayName, email, photoURL, emailVerified } = user;
            const data = { uid, displayName, email, photoURL, emailVerified };
            this.props.saveAuthProfile(data);
            this.props.signIn(data.uid);
            this.props.saveCurrentUser(data);
        } else {
            this.props.signOut();
        }

        this.setState({ isSignedIn: this.props.isSignedIn });
    }

    renderRoutes() {
        if (this.state.isSignedIn !== null) {
            return (
                <React.Fragment>
                    <Route path="/" exact component={LandingPage} />
                    <Route path="/sign_in" exact component={SignInPage} />
                    <PrivateRoute authed={this.state.isSignedIn} path="/profile" component={ProfilePage} />
                </React.Fragment>
            );
        }
    }

    render() {
        return (
            <div className="ui container">
                <Router history={history}>
                    <div>
                        <Navbar />
                        {this.renderRoutes()}
                    </div>
                </Router>
            </div>
        );
    }
    
}

const mapStateToProps = (state) => {
    return { isSignedIn: state.auth.isSignedIn, userId: state.auth.userId, authProfile: state.auth.authProfile };
}

export default connect(mapStateToProps, { signIn, signOut, saveFirebaseInstance, saveAuthProfile, saveCurrentUser })(App);

