import React from 'react';
import BackDrop from './BackDrop.js';
import Wrapper from '../../../../Hoc/Wrapper.js';
import Branch from 'branch-sdk';

let Modal = (props) => {
    let sendSMS = (e) => {
        e.preventDefault();
        let phoneNumber = document.getElementById('phone_number').value;
        Branch.sendSMS(
            phoneNumber,
            {
              channel: 'Website',
              feature: 'Text-Me-The-App',
              data: {
                foo: 'bar'
              }
            },
            { make_new_link: false }, // Default: false. If set to true, sendSMS will generate a new link even if one already exists.
            function(err) { console.log('error',err); }
        );
        props.toggle();
    }
    return (
        <Wrapper>          
            <BackDrop toggle={props.toggle}/>
            <div className="Modal">
                <div className="row">
                    <form className="SMS_Form" action="" onSubmit={(e)=>sendSMS(e)}>
                        <h2 className="SMS_Greeting">Text me the app!</h2>
                        <label className="SMS_Lable" htmlFor="">Phone Number</label>
                        <input className="SMS_Input" id="phone_number" type="tel"/>
                        <br/>
                        <input className="SMS_Submit" type="submit" value="Send"/>
                    </form> 
                </div>
            </div>
        </Wrapper>
    );
}

export default Modal;