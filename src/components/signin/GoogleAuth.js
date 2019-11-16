import React from 'react';
import { connect } from 'react-redux';
import { signIn, signOut } from '../../actions';

class GoogleAuth extends React.Component {

    render() {
        return (
            <div>
                {this.renderAuthButton()}
            </div>
        );
    }

    onSignInClick = () => {
        const provider = new this.props.firebase.auth.GoogleAuthProvider();
        this.props.firebase.auth().signInWithPopup(provider).then(function(result) {
            console.log("sign in successful");
        }).catch(function(error) {
            console.log(error);
        });
    }

    onSignOutClick = () => {
        this.props.firebase.auth().signOut().then(function() {
            console.log("sign out successful");
        }).catch(function(error) {
            console.log(error);
        });
    }

    renderAuthButton() {
        const instance = this.props.firebase;
        if (instance === null) {
            return null;
        } else if (instance.auth().currentUser) {
            
            return(
                <div className="google-btn" onClick={this.onSignOutClick}>
                    <div className="google-icon-wrapper">
                        <img className="google-icon-svg" alt="google" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"/>
                    </div>
                    <p className="btn-text"><b>Sign out</b></p>
                </div>   
            );
        } else {
            return(
                <div className="google-btn" onClick={this.onSignInClick}>
                    <div className="google-icon-wrapper">
                        <img className="google-icon-svg" alt="google" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"/>
                    </div>
                    <p className="btn-text"><b>Sign in with Google</b></p>
                </div>
            );
        }
    }
}

const mapStateToProps = (state) => {
    return { isSignedIn: state.auth.isSignedIn, userId: state.auth.userId, firebase: state.db.firebase };
}

export default connect(mapStateToProps, { signIn, signOut })(GoogleAuth);