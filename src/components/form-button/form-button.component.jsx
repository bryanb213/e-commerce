import React from 'react';
import './form-button.style.scss';

const FormButton = ({ children, isGoogleSignIn, ...otherProps }) => {
    return (
        <button className={`${isGoogleSignIn ? 'google-sign-in': '' } custom-button`} {...otherProps}>
            {children}
        </button>
    );
}

export default FormButton;