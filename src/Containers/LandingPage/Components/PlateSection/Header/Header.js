import React from 'react';
import CTA_Link from '../../CTA_Link/CTA_Link.js';

import Jessie from './img/Jessie_Lemon.JPG';
import allDishes_Icon from './img/allDishes_Icon.png';

let Header = (props) => {
    return (
        <div className="PS_Header">
            <h2 className="shared_plan">Shared Plan</h2>
            <div className="row">
                <img src={Jessie} alt="Jessie_Lemon" class="img_Jessie"/>
                <div className="plateDiscription">
                    <h3 className="author">plateList by {props.author}</h3>
                    <h1 className="plateList_title">{props.title}</h1>

                    <CTA_Link deskTop={props.deskTop} modalToggle={props.modalToggle} pageTag="Plate_Section_CTA" Class="btn" >
                        Grab PlateList
                    </CTA_Link>
                    
                    <img className="dish-icon" src={allDishes_Icon} alt="Dish Icon"/> 14 Meals
                </div>
            </div>
        </div>
    );
}

export default Header;