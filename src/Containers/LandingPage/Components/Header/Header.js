import React from 'react';
import logo from './img/logo.PNG'

let Header = (props) => {
    return (
        <div className="Landing_Header">
            <img src={logo} alt="logo"/>
            <div className="row">            
                <h1 className="Landing_Header-h1">{props.title}</h1>
                <p className="Landing_Header-p">{props.description}</p>
            </div>
            <div className="triangle_container">
                <div className="triangle"></div>
            </div>
            
        </div>
    );
} 

export default Header;