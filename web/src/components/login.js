import React, { Component } from 'react';
import {Link, Redirect,useHistory, } from "react-router-dom";
import {withRouter} from 'react-router-dom';
import { MDBContainer, MDBRow, MDBCol, MDBBtn } from 'mdbreact';
import TutorialDataService from "../services/tutorial.service";

class Login extends Component {
  constructor(props) {
    super(props);
   this.onChangeName =this.onChangeName.bind(this);
   this.onChangePassword=this.onChangePassword.bind(this);
   this.saveTutorial = this.saveTutorial.bind(this);

   
    this.state = {
      Name: "",
      Password:"",
      error:null,token:0
    };
  }
  onChangeName(e) {
    this.setState({
      Name: e.target.value
    });
  }
  saveTutorial() {
    
   // let history = useHistory();
    var data = {
      "username": this.state.Name,
      "password":this.state.Password

    };
    
    TutorialDataService.login(data)
      .then(response => {
        this.setState({
         submitted: true
        });

        console.log(response.data.jwt);
        sessionStorage.setItem("token",response.data.jwt);
        this.setState({token:response.data.jwt})
        this.setState({error:response.data.error});
        console.log(response.data.error);
        
      })
      .catch(e => {
        console.log(e);
      });
    
        this.props.history.push('/userdata');
      
     
  }

  onChangePassword(e) {
    this.setState({
      Password: e.target.value
    });
  }
 
    render() { 
        return (  
<MDBContainer>
  <MDBRow>
    <MDBCol md="6" className="row justify-content-md-center"  style={{marginTop: "30px"}}>
      <form>
        <p className="h4 text-center mb-4">Sign in</p>
        <label htmlFor="defaultFormLoginEmailEx" className="grey-text">
          Enter Your Name 
        </label>
        <input type="text" id="defaultFormLoginEmailEx"
                  className="form-control"
                  id="name"
                  required
                  value={this.state.Name}
                  onChange={this.onChangeName}
                  name="name"
         className="form-control" />
        <br />
        <label htmlFor="defaultFormLoginPasswordEx" className="grey-text">
          Your password
        </label>
        <input type="password" id="defaultFormLoginPasswordEx"
          className="form-control"
                  id="password"
                  required
                  value={this.state.Password}
                  onChange={this.onChangePassword}
                  name="password" className="form-control" />
        <div className="text-center mt-4">
       <MDBBtn   onClick={this.saveTutorial} className="btn btn-success" type="submit" >Login</MDBBtn>
        
        </div>
      </form>
    </MDBCol>
  </MDBRow>
</MDBContainer>
        );
    }
}
 
export default Login;