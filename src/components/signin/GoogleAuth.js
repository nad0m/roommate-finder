import React from 'react';
import { connect } from 'react-redux';
import { signIn, signOut } from '../../actions';

class GoogleAuth extends React.Component {

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

    render() {
        return (
            <div>
                {this.renderAuthButton()}
            </div>
        );
    }

    onSignInClick = () => {
        this.auth.signIn();
    }

    onSignOutClick = () => {
        this.auth.signOut();
    }
    
    onAuthChange = (isSignedIn) => {
        if (isSignedIn) {
            const id = this.auth.currentUser.get().getId();
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
    return { isSignedIn: state.auth.isSignedIn, userId: state.auth.userId };
}

export default connect(mapStateToProps, { signIn, signOut })(GoogleAuth);