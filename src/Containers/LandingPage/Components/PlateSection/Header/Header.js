import React, {Component} from 'react';
import axios from '../../Axios/Axios.js'
import CTA_Link from '../../CTA_Link/CTA_Link.js';

import Jessie from './img/Jessie_Lemon.JPG';
import allDishes_Icon from './img/allDishes_Icon.png';

class Header extends Component{
    state= {
        plates: null,
        count: 0
    }
    componentDidMount() {
        axios.get(`${this.props.id}/summary`).then((response)=>{
            this.setState({
                plates: response.data.platelistDays
            });
        }).catch((err)=>{
            
        });
    }
    getCount(){
        if(this.state.plates){
            let count = this.state.plates.map(day => {
                return day.meals.length;
            });
            let sum = count.reduce((total, num)=>{
                return total+num;
            });
            if(sum > 21){
                sum = 21;
            }
            return sum;
        }
    }
    render(){
        return (
            <div className="PS_Header">
                <h2 className="shared_plan">Shared Plan</h2>
                <div className="row">
                    <img src={Jessie} alt="Jessie_Lemon" class="img_Jessie"/>
                    <div className="plateDiscription">
                        <h3 className="author">plateList by {this.props.author}</h3>
                        <h1 className="plateList_title">{this.props.title}</h1>
    
                        <CTA_Link deskTop={this.props.deskTop} modalToggle={this.props.modalToggle} pageTag="Plate_Section_CTA" Class="btn" >
                            Grab PlateList
                        </CTA_Link>
                        
                        <img className="dish-icon" src={allDishes_Icon} alt="Dish Icon"/> {this.getCount()} Meals
                    </div>
                </div>
            </div>
        );
    }
}

export default Header;