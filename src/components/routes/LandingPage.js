import React from 'react';
import { connect } from 'react-redux';


const LandingPage = (props) => {
    console.log(props)
    return (
        <div>
            LandingPage
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        currentUserId: state.auth.userId,
        isSignedIn: state.auth.isSignedIn
    }
}

export default connect(mapStateToProps)(LandingPage);