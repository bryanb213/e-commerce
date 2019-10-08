import React from 'react';
//takes function takes any component and spits out new modified component
import { withRouter } from 'react-router-dom';
import './menu-item.styles.scss';


const MenuItem = ({title, imgUrl, size, history, match, linkUrl}) => (
    <div className={`${size} menu-item`} 
    onClick={() => history.push(`${match.url}${linkUrl}`)}>

        <div className="background-image"
            style={{backgroundImage: `url(${imgUrl})`}}
        />
        <div className="content">
            <div className="title">{title.toUpperCase()}</div>
            <span className="subtitle">SHOP NOW</span>
        </div>
    </div>
);

export default withRouter(MenuItem);
// with withrouter we now have access to history and other route props