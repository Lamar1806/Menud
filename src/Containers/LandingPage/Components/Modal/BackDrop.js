import React from 'react';

let BackDrop = (props) => {
    return (
        <div className="BackDrop" onClick={props.toggle}>{props.children}</div>
    );
} 

export default BackDrop;