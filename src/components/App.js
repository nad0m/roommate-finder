import React from 'react';
import { connect } from 'react-redux';
import { Router, Route } from 'react-router-dom';
import PrivateRoute from './routes/PrivateRoute';
import history from '../history';

import Navbar from './navbar/Navbar';
import LandingPage from './routes/LandingPage';
import SignInPage from './routes/SignInPage';
import ProfilePage from './routes/ProfilePage';
import { signIn, signOut, saveFirebaseInstance, saveAuthProfile } from '../actions';

import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/firestore';
import { FIREBASE_CONFIG } from '../configs/config';
import { addNewUser, getUser } from '../db/firestore';

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

    onNewUserSignUp = (userIsNew) => {
        if (userIsNew) {
            addNewUser(firebase.firestore(), this.props.authProfile);
        }
    }

    onAuthChange = (user) => {
        if (user) {
            const { uid, displayName, email, photoURL, emailVerified } = user;
            getUser(firebase.firestore(), uid, this.onNewUserSignUp);
            this.props.saveAuthProfile({ uid, displayName, email, photoURL, emailVerified });
            this.props.signIn(uid);
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

export default connect(mapStateToProps, { signIn, signOut, saveFirebaseInstance, saveAuthProfile })(App);

