import React, { Component } from 'react';
import './sign-in.style.scss';

import FormInput from '../form-input/form-input.component';
import FormButton from '../form-button/form-button.component';

import { auth, signInWithGoogle } from '../../firebase/firebase.utils';

class SignIn extends Component {
    constructor(props) {
        super(props)

        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = async event => {
        //stops submit entil all fields are typed and clears it after
        event.preventDefault();

        const { email, password } = this.state;

        try {
            await auth.signInWithEmailAndPassword(email, password);
            console.log(this.state);
            //makes fields clear
            this.setState({ email: '', password: '' });
        } catch (error) {
            console.log(error);
        }
    }

    handleChange = event => {
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
                        name="email"
                        value={this.state.email}
                        handleChange={this.handleChange}
                        required
                        label="email"
                    />

                    <FormInput
                        type="password"
                        name="password"
                        value={this.state.password}
                        required
                        handleChange={this.handleChange}
                        label="password"
                    />

                    <div className='buttons'>
                        <FormButton type="submit">Sign In</FormButton>
                        <FormButton onClick={signInWithGoogle} isGoogleSignIn >
                            sign in with Google 
                        </FormButton>
                    </div>
                </form>
            </div>
        );
    }
}

export default SignIn;
