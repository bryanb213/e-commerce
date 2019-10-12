import React from 'react';
import './form-button.style.scss';

const FormButton = ({ children, ...otherProps }) => {
    return (
        <div className="custom-button" {...otherProps}>
            {children}
        </div>
    );
}

export default FormButton;
