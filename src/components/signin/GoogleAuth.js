import React from 'react';
import { connect } from 'react-redux';
import { signIn, signOut } from '../../actions';

class GoogleAuth extends React.Component {

    componentDidMount() {
        
    }

    render() {
        return (
            <div>
                {this.renderAuthButton()}
            </div>
        );
    }

    onSignInClick = () => {
        this.props.authInstance.signIn();
    }

    onSignOutClick = () => {
        this.props.authInstance.signOut();
    }
    
    onAuthChange = (isSignedIn) => {
        if (isSignedIn) {
            const id = this.props.authInstance.currentUser.get().getId();
            this.props.signIn(id);
        } else {
            this.props.signOut();
        }
    }

    renderAuthButton() {
        if (this.props.isSignedIn === null) {
            return null;
        } else if (this.props.isSignedIn) {
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
    return { isSignedIn: state.auth.isSignedIn, userId: state.auth.userId, authInstance: state.auth.authInstance };
}

export default connect(mapStateToProps, { signIn, signOut })(GoogleAuth);