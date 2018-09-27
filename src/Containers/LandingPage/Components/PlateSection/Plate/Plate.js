import React from 'react';
import Wrapper from '../../../../../Hoc/Wrapper.js';
import timer from './img/timerIcon.png'

let Plate = (props) => {   
    let shortenTitle = (title) => {
        if(title){
            // title="Rich & Creamy Tomato Basil Soup with Asiago Cheese"; //50 chars 
            let wordList = title.split("");
            if(wordList.length > 50){
                title = title.slice(0, 50) + "...";
            }
            return title;
        }
    }
    let displayPlate = () => {
        let plate = '';
        if(props.title != 'none'){
            plate = (
                <Wrapper>
                    <div className="Plate_Container">
                        <img className="Plate_Img" src={props.img} alt={props.title}/>
                        <h3 className="Plate_Title">{shortenTitle(props.title)}</h3>
                        <div className="Plate_Info">
                            <img className="Timer_Img"src={timer} alt="timer"/> {props.prepTime}
                            <hr className="Plate_Hr"/>
                            <p className="Plate_HashTag"> <i>{props.hashTag}</i></p>
                        </div>
                    </div>
                </Wrapper>
            );

        }else{
            let style = {
                opacity: 0
            }
            plate = ( 
            <Wrapper>                
               <div style={style} className="Plate_Container">
                        
                </div>
            </Wrapper>
            );
        }        
        return plate;
    } 
    return (
           displayPlate()
    );
       
}

export default Plate;