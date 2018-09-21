import React, { Component } from 'react';
import Plate from '../Plate/Plate.js';
import axios from '../../Axios/Axios.js'

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
    sortMeals = (index) => {       
        if(this.state.plates && index <= 2){
            let meals = this.state.plates.map(element => {
                return element.meals[index];
            });
            //if To many plates like for number 71 return 3 fold duplicates
            if(meals.length > 7){
                meals = meals.splice(0,7);
            } 
            var plates = meals.map((meal, index) => {               
                let key = Math.floor((Math.random() * 10000) + 1);  
                
                return (
                    <div key={key} className="Plate_Table_Col_Plate">                   
                        <Plate img={meal.imageUrl} title={meal.name} prepTime={45} hashTag="#lunch #dinner #vegan"/>
                        <div className="Plate_Table_Left_Line"> </div>
                    </div>
                );
            });
            return plates;
        }
        if(index > 2){
            throw new Error("Index must be between 0-2.") 
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
       return this.sortMeals(0);
    }

    renderLunchMeals = () => {
       return this.sortMeals(1);
    }

    renderDinnerMeals = () => {
        return this.sortMeals(2);
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
                    <p className="Plate_Table_CTA"><i>Add, Delete, & arrange meals to your heart's content on our app!</i></p> 
                    <img className="Plate_Table_CTA_img" src={arrow} alt="left arrow"/>
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