import React from 'react';
import './form-button.style.scss';

const FormButton = ({ children, isGoogleSignIn, ...otherProps }) => {
    return (
        <div className={`${isGoogleSignIn ? 'google-sign-in': '' } custom-button`} {...otherProps}>
            {children}
        </div>
    );
}

export default FormButton;