import React from 'react';
import Media from 'react-media';
import CTA_Link from '../CTA_Link/CTA_Link.js';


import logo from './img/logo.png';
import three_phones from './img/3_Phones.png';
import six_Phones from './img/6_phones.png'
import download from './img/Download_Apple.png';
import Background from './img/Yellow_Shapes.png';
import facebook from './img/facebook.png';
import instagram from './img/instagram.png';
import twitter from './img/twitter.png';
 
let Footer = (props) => {
    let background={backgroundImage: `url(${Background})`}
    return(
        <div className="Landing_Page_Footer" style={background}>
            <img className="logo" src={logo} alt="Top Left logo"/>
            <div className="row">     
                <div className="col-1">
                
                    <CTA_Link deskTop={props.deskTop} modalToggle={props.modalToggle} pageTag="Footer_CTA" > 
                        <h2 className="Call_To_Action">Meal Planning made easy 
                            <br />You in?
                        </h2>
                        <img src={download} alt="Download App"/>
                    </CTA_Link>

                </div>
                <Media query="(max-width: 1700px)">   
                    <div className="col-2">
                        <img className="phones_3" src={three_phones} alt="Mobile Phones"/>
                    </div>      
                </Media>   
                <Media query="(min-width: 1701px)">   
                    <div className="col-2">
                        <img className="phones_6" src={six_Phones} alt="Mobile Phones"/>
                    </div>      
                </Media>
            </div>     
            <ul className="social-media">
                <li><a href="https://www.facebook.com/MenudMoments/"><img src={facebook} alt="facebook icon"/></a></li>
                <li><a href="https://www.instagram.com/menudmoments/?hl=en"><img src={instagram} alt="instagram icon"/></a></li>
                <li><a href="https://twitter.com/MenudMoments?lang=en"><img src={twitter} alt="twitter icon"/></a></li>
            </ul>       
        </div>
    );
}

export default Footer;