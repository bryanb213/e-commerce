import React from 'react';
import './menu-item.styles.scss';


const MenuItem = ({title, imgUrl}) => (
    <div className="menu-item"
        style={{
            backgroundImage: `url(${imgUrl})`
        }}>
        <div className="content">
            <div className="title">{title}</div>
            <span className="subtitle">SHOP NOW</span>
        </div>
    </div>
);

export default MenuItem;