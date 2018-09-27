import React, { Component } from 'react';
import Plate from '../Plate/Plate.js';
import axios from '../../Axios/Axios.js'
import CTA_Link from '../../CTA_Link/CTA_Link.js';

import sunrise from './img/sunriseIcon.png';
import sun from './img/sunIcon.png';
import sunset from './img/sunsetIcon.png';
import arrow from './img/left_arrow.png';

class Plates extends Component{
    state={
        plates: null,
    };

    componentDidMount(){
        axios.get(`${this.props.id}/summary`).then((response)=>{
            this.setState({
                plates: response.data.platelistDays
            });
        }).catch((err)=>{
            
        });
    }  
    sortMeals = (mealTime) => {       
        if(this.state.plates){
            let meals = this.state.plates.map(day => {
                return day.meals.find(meal => meal.mealTime.name == mealTime);
            });
            //if To many plates 
            if(meals.length > 7){
                meals = meals.splice(0,7);
            } 
            var plates = meals.map((meal, index) => {               
                let key = Math.floor((Math.random() * 10000) + 1);       
                let imgURL = '' ;     
                let title = 'none';
                let prepTime = 'N/A' + ' min';
                let hasTags = '';

                if(meal){
                    imgURL =  meal.imageUrl;                
                    title = meal.name;
                    prepTime = 'PT45M';
                    // meal.tags= ['vegan','dary','pop'];
                    if(meal.tags.length > 0){
                        hasTags = '#' + meal.tags.join(' #');
                    }
                   
                    if(meal.prepTime){
                        prepTime = meal.prepTime;
                    }
                }            
                 
                return (
                    <div key={key} className="Plate_Table_Col_Plate">                   
                        <Plate img={imgURL} title={title} prepTime={prepTime} hashTag={hasTags}/>
                        <div className="Plate_Table_Left_Line"> </div>
                    </div>
                );                
            });
            return plates;
        }
    }

    renderDays = () => {
        let days = ['.','Mon','Tues','Wed','Thur','Fri','Sat','Sun'];
        days = days.map((day) => {
            let days = [];
            if(day === '.'){
                let hidden = {opacity: "0"}
                days.push(<h2 className="Plate_Table_Days_Empty" > <span style={hidden}>{day}</span></h2>)
            }else {
                days.push(<h2 className="Plate_Table_Days">{day}</h2>)
            }
            return days;
        });
        return days;
    }
    
    renderBreakfastMeals = () => {
       return this.sortMeals('Breakfast');
    }

    renderLunchMeals = () => {
       return this.sortMeals('Lunch');
    }

    renderDinnerMeals = () => {
        return this.sortMeals('Dinner');
    } 

    renderTable = () => {        
        return (               
            <div className="Plate_Table">                          
                {/* Days */}
                <div className="row Days_Row">
                    {this.renderDays()}
                </div>
                {/* BreakFast */}
                <div className="row Meal_Row">
                    <div className="Plate_Table_Left_Line Icon_Line_Left"></div>
                    <span className="Plate_Table_Col_Icon"><img src={sunrise} alt="Breakfast"/></span>
                    {this.renderBreakfastMeals()}
                    <div className="divider_line_row "> </div>
                </div>
                {/* Lunch */}
                <div className="row Meal_Row">
                    <div className="Plate_Table_Left_Line Icon_Line_Left"></div>
                    <span className="Plate_Table_Col_Icon"><img src={sun} alt="Lunch"/></span>
                    {this.renderLunchMeals()}
                    <div className="divider_line_row "> </div>
                </div>
                {/* Dinner */}
                <div className="row Meal_Row">
                    <div className="Plate_Table_Left_Line Icon_Line_Left"></div>
                    <span className="Plate_Table_Col_Icon"><img src={sunset} alt="Dinner"/></span>
                    {this.renderDinnerMeals()}
                </div>
                
                <div className="row CTA_Row">
                    <CTA_Link deskTop={this.props.deskTop} modalToggle={this.props.modalToggle}>
                        <p className="Plate_Table_CTA"><i>Add, Delete, & arrange meals to your heart's content on our app!</i></p> 
                        <img className="Plate_Table_CTA_img" src={arrow} alt="left arrow"/>
                    </CTA_Link>
                </div>
            </div>         
        );
    }

    render() {
        return (
            <div className="PlateSection">           
               {this.renderTable()}
            </div>
        );
    }    
}

export default Plates;