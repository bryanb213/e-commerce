import React from 'react';
import './header.style.scss';
// logo will kind of be a component named logo only for the logo
import { ReactComponent as Logo } from '../../assests/crown.svg';

import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className="header">
            <Link to="/" className="logo-container" >
                <Logo className="logo" />
            </Link>
            <div className="options">
                <Link className="option" to="/shop">
                    Shop
                </Link>
                <Link className="option" to="/contact">
                    Contact
                </Link>
            </div>
        </div>
    );
}

export default Header;
