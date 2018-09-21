import React from 'react';
import Header from './Header/Header.js';
import Plates from './Plates/Plates.js';

let PlateSection = (props) => {
    return (
        <div className="Plate_Section">
            <Header author={props.author} title={props.title} 
                description={props.description} modalToggle={props.modalToggle}
                deskTop={props.deskTop}                
            />                
            <Plates id={props.id}/>
        </div>
    );   
}

export default PlateSection;