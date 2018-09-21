import React from 'react';
import Modal from '../Modal/Modal.js';
import Branch from 'branch-sdk';
import Wrapper from '../../../../Hoc/Wrapper.js';

let link = (props) => {

    let branchAction = (e) => {
        if (props.deskTop) {
            e.preventDefault();
            //desktop
            console.log('clicked: ', props.toggleModal);
            props.modalToggle();
            // sendSMS(e);
        }else{
            //mobile
            deepLink(e);
        }
    }

    let deepLink = (e) => {
        var linkData = {
            campaign: 'content 123',
            channel: 'facebook',
            feature: 'dashboard',
            stage: 'new user',
            tags: [ 'tag1', 'tag2', 'tag3' ],
            alias: '',
            data: {
              'custom_bool': true,
              'custom_int': Date.now(),
              'custom_string': 'hello',
              '$og_title': 'Title',
              '$og_description': 'Description',
              '$og_image_url':'http://lorempixel.com/400/400'
            }
        };

        Branch.deepview(linkData, function(err) {
            if (err) {
                throw err;
            }
            document.getElementById(props.pageTag).onClick = Branch.deepviewCta();
        });
    }

   
    return (
        <a id={props.pageTag} className={props.Class} href="#" onClick={(e)=>{branchAction(e);}}>{props.children}</a>
    );
    
    
}

export default link;