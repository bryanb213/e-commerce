import React from 'react';

import FormInput from '../../form-input/form-input.component';
import FormButton from '../../form-button/form-button.component.jsx';
import './contact.style.scss';



class Contact extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            email: '',
            name: '',
            message: ''
        }
    }
    handleChange = event => {
        //target  is the values
        const { value, name } = event.target;

        this.setState({ [name]: value });
    }

    render() {
        return (
            <div className="contact-container">
                <div className="left">
                    <h2 className="heading">Contact info</h2>
                    <hr/>
                        <p>Phone: (800) 123 1234</p>
                        <p>Hours: 9am-5pm Monday-Friday</p>
                        <p>CRWN Clothing</p>
                        <p>800 E. Elm St</p>
                        <p>Chicago IL, 60647</p>
                        <hr/>
                        <p>Email us at <a href="#">Orders@crwnclothing.com (Please allow one business day to repond)</a></p>
                    
                </div>
                <div className="right">
                    <h2 className="heading">Email Form</h2>
                    <hr/>
                    <FormInput
                        type="name"
                        name="name"
                        value={this.state.name}
                        label="Name"
                        handleChange={this.handleChange}
                    />
                    <FormInput
                        type="email"
                        name="email"
                        value={this.state.email}
                        label="Email"
                        handleChange={this.handleChange}
                    />
                    <FormInput
                        type="message"
                        name="message"
                        value={this.state.message}
                        required
                        label="Message"
                        handleChange={this.handleChange}
                    />
                    <FormButton type='submit'>Send</FormButton>
                </div>
            </div>
        );
    }
}

export default Contact;
