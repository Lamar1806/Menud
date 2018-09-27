import React from 'react';
import Header from './Header/Header.js';
import Plates from './Plates/Plates.js';

let PlateSection = (props) => {    
    return (
        <div className="Plate_Section">
            <Header id={props.id} author={props.author} title={props.title} 
                description={props.description} modalToggle={props.modalToggle}
                deskTop={props.deskTop}                
            />
            <Plates id={props.id} deskTop={props.deskTop} modalToggle={props.modalToggle}/>
        </div>
    );   
}

export default PlateSection;