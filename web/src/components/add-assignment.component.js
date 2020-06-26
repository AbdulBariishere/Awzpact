import React, { Component } from "react";
import TutorialDataService from "../services/tutorial.service";

export default class Logout extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    localStorage.clear();
 //   TutorialDataService.logout();
  }

 
  render() {
    return (
        <div className="submit-form"> 
            <div>
          <h1>you are Logged out ,Thanks!</h1>
          </div>
      
      </div>  
      );}
}