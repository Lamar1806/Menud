import React, { Component } from 'react';

import Header from './Components/Header/Header.js';
import PlateSection from './Components/PlateSection/PlateSection.js';
import Footer from './Components/Footer/Footer.js';
import Modal from './Components/Modal/Modal.js'

import Branch from 'branch-sdk';



class LandingPage extends Component{
    constructor(props) {
        super(props);
        this.modalToggle = this.modalToggle.bind(this);
    }

    state = {
        branchData: {
            landingPageTitle: 'Menud',
            landingPageDescriptions: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.has been the industry's standard dummy text ever since the 1500s",
            plateListId: 68,
            plateListAuthor: 'Random Author',
            plateListTitle: 'The Best Plate',            
            plateListDescription: 'The plate Description'
        },
        branch: null,
        deskTop: false,
        showModal: false,
        phonNumber: null
    } 

    componentDidMount(){
        console.log('landingpage data:', this.props.branchData);
        if (typeof this.props.branchData.plateListId !== "undefined") {
            this.setState({branchData: this.props.branchData.data_parsed});
        }        
        //check device
        if (!(/Mobi|Android/i.test(navigator.userAgent))) {
            this.setState({deskTop: true});
        }
    }  

    modalToggle = () => {
        if(this.state.deskTop === true && this.state.showModal === false){
            this.setState((prevState) => 
            ({ showModal: !prevState.showModal })
            )
        }else{
            this.setState((prevState) => 
            ({ showModal: !prevState.showModal })
            )
        }
    }

    

    isMobile = {
        Android: function() {
            return navigator.userAgent.match(/Android/i);
        },
        BlackBerry: function() {
            return navigator.userAgent.match(/BlackBerry/i);
        },
        iOS: function() {
            return navigator.userAgent.match(/iPhone|iPad|iPod/i);
        },
        Opera: function() {
            return navigator.userAgent.match(/Opera Mini/i);
        },
        Windows: function() {
            return navigator.userAgent.match(/IEMobile/i) || navigator.userAgent.match(/WPDesktop/i);
        },
        any: function() {
            return (this.isMobile.Android() || this.isMobile.BlackBerry() || this.isMobile.iOS() || this.isMobile.Opera() || this.isMobile.Windows());
        }
    }; 

    displayModal = () => {
        if(this.state.deskTop === true && this.state.showModal === true){
            return (
                <Modal toggle={()=>this.modalToggle()}/>
            );
        }
    }

    ////////////////////////////////////////////
    // branchAction = (e) => {
    //     if (props.deskTop) {
    //         e.preventDefault();
    //         //desktop
    //         console.log('clicked: ', props.toggleModal);
    //         toggleModal();
    //         // sendSMS(e);
    //     }else{
    //         //mobile
    //         deepLink(e);
    //     }
    // }

    // deepLink = (e) => {
    //     var linkData = {
    //         campaign: 'content 123',
    //         channel: 'facebook',
    //         feature: 'dashboard',
    //         stage: 'new user',
    //         tags: [ 'tag1', 'tag2', 'tag3' ],
    //         alias: '',
    //         data: {
    //           'custom_bool': true,
    //           'custom_int': Date.now(),
    //           'custom_string': 'hello',
    //           '$og_title': 'Title',
    //           '$og_description': 'Description',
    //           '$og_image_url':'http://lorempixel.com/400/400'
    //         }
    //     };

    //     Branch.deepview(linkData, function(err) {
    //         if (err) {
    //             throw err;
    //         }
    //         document.getElementById(props.pageTag).onClick = Branch.deepviewCta();
    //     });
    // }

    
    //////////////////////////////////////////
   
    render() {
        
        return (
            <div className="LandingPage">

                {this.displayModal()}

                {console.log('userAgent:', navigator.userAgent)}
                <Header title={this.state.branchData.landingPageTitle} description={this.state.branchData.landingPageDescriptions}/>

                <PlateSection id={this.state.branchData.plateListId} author={this.state.branchData.plateListAuthor} 
                            title={this.state.branchData.plateListTitle} description={this.state.branchData.plateListDescription}
                            
                            deskTop={this.state.deskTop} modalToggle={() => this.modalToggle()}
                />

                <Footer deskTop={this.state.deskTop} modalToggle={(e)=> this.modalToggle(e)}/>
            </div>
        );
    }    
}

export default LandingPage;