import React from 'react';
import { connect } from 'react-redux';
import { Router, Route } from 'react-router-dom';
import history from '../history';

import Navbar from './navbar/Navbar';
import LandingPage from './routes/LandingPage';
import SignInPage from './routes/SignInPage';
import ProfilePage from './routes/ProfilePage';
import { signIn, signOut } from '../actions';

class App extends React.Component {
    componentDidMount() {
        window.gapi.load('client:auth2', () => {
            window.gapi.client.init({
                clientId: '1074283388516-23f5ml9apt4psohnm4r7vp1chs55jdf4.apps.googleusercontent.com',
                scope: 'email'
            }).then(() => {
                this.auth = window.gapi.auth2.getAuthInstance();
                this.onAuthChange(this.auth.isSignedIn.get());
                this.auth.isSignedIn.listen(this.onAuthChange);
            });
        });

    }

    onAuthChange = (isSignedIn) => {
        if (isSignedIn) {
            const id = this.auth.currentUser.get().getId();
            this.props.signIn(id);
        } else {
            this.props.signOut();
        }
    }

    render() {
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
    
}

const mapStateToProps = (state) => {
    return { isSignedIn: state.auth.isSignedIn, userId: state.auth.userId };
}

export default connect(mapStateToProps, { signIn, signOut })(App);

