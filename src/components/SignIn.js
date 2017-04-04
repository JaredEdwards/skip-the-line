import React, { Component } from 'react';
import { auth, googleAuthProvider } from '../firebase';

class SignIn extends Component {
  render() {
    return (
      <div className="SignIn btn-padded">
        <button
          className="btn btn-lg btn-block"
          onClick={() =>
            auth.signInWithPopup(googleAuthProvider)} >
        Sign In
        </button>
      </div>
    );
  }
}

export default SignIn;
