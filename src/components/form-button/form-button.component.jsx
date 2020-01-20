import React from 'react';
import './form-button.style.scss';

const FormButton = ({ children, inverted, isGoogleSignIn, ...otherProps }) => {
    return (
        <button className={`${inverted ? 'inverted' : ''}${
            isGoogleSignIn ? 'google-sign-in' : 'contact' } 
            custom-button`} 
            {...otherProps}
            >
            {children}
        </button>
    );
}

export default FormButton;