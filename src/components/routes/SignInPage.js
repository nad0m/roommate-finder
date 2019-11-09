import React from 'react';
import SignUp from '../signin/SignUp';
import Login from '../signin/Login';

class SignInPage extends React.PureComponent {
    
    state = {
        isLoginTab: this.props.isLogin
    }

    active(tab) {
        switch (tab) {
            case 'login':
                return this.state.isLoginTab ? 'active' : '';
            case 'signup':
                return this.state.isLoginTab ? '' : 'active';
            default:
                break;
        }

        return '';
    }

    handleClick(isLoginTab) {
        this.setState({ isLoginTab });
    }

    render() {
        return (
            <div>
                <div className="ui top attached tabular menu">
                    <div className={`item ${this.active('signup')}`} data-tab="signup" onClick={() => this.handleClick(false)}>Sign Up</div>
                    <div className={`item ${this.active('login')}`} data-tab="login" onClick={() => this.handleClick(true)}>Login</div>
                </div>
                <div className={`ui bottom attached tab segment ${this.active('signup')}`} data-tab="signup">
                    <SignUp />
                </div>
                <div className={`ui bottom attached tab segment ${this.active('login')}`} data-tab="login">
                    <Login />
                </div>
            </div>
        )
    }
    
}

export default SignInPage;