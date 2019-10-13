import React, { Component } from 'react';
import './sign-in-sign-up.style.scss';

import SignIn from '../../sign-in/sign-in.component';
import SignUp from '../../sign-up/sign-up.component';

export class SignInSignUp extends Component {
    render() {
        return (
            <div className="sign-in-sign-up">
                <SignIn />
                <SignUp />
            </div>
        );
    }
}

export default SignInSignUp;
