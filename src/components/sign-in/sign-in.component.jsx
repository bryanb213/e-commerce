import React, { Component } from 'react';
import './sign-in.style.scss';

import FormInput from '../form-input/form-input.component';
import FormButton from '../form-button/form-button.component';

import { signInWithGoogle } from '../../firebase/firebase.utils';

export class SignIn extends Component {
    constructor(props) {
        super(props)

        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = (event) => {
        //stops submit entil all fields are typed and clears it after
        event.preventDefault();
        //makes fields clear
        this.setState({
            email: '',
            password: ''
        })
    }

    handleChange = (event) => {
        //target  is the values
        const { value, name } = event.target;

        this.setState({ [name]: value });
    }

    render() {
        return (
            <div className="sign-in">
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput
                        type="email"
                        name="mail"
                        value={this.state.email}
                        handleChange={this.handleChange}
                        required
                        label="Email"
                    />

                    <FormInput
                        type="password"
                        name="password"
                        value={this.state.password}
                        required
                        handleChange={this.handleChange}
                        label="Password"
                    />

                    <div className='buttons'>
                        <FormButton type="submit">Sign In</FormButton> 
                        <FormButton onClick={signInWithGoogle} isGoogleSignIn >
                            {' '} sign in with Google {' '}
                        </FormButton>
                    </div>
                </form>
            </div>
        );
    }
}

export default SignIn;
