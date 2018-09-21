import React, { Component } from 'react';
import LandingPage from "./Containers/LandingPage/LandingPage.js";
import './App.css';

class App extends Component {
  render() {
    return (
      <LandingPage branchData={this.props.branchData}/>
    );
  }
}

export default App;
