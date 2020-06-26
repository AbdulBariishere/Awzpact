import React, { Component } from "react";
import TutorialDataService from "../services/tutorial.service";
import { MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem } from 'mdbreact';

export default class AddTutorial extends Component {
  constructor(props) {
    super(props);
   this.onChangeName =this.onChangeName.bind(this);
   this.onChangePhone=this.onChangePhone.bind(this);
   this.onChangePassword=this.onChangePassword.bind(this);
   this.onChangeEmail=this.onChangeEmail.bind(this);
   this.onChangeAddress=this.onChangeAddress.bind(this);
   this.onChangeCity=this.onChangeCity.bind(this);
   this.onChangeGender=this.onChangeGender.bind(this);
  this.onChangeDepartment_id=this.onChangeDepartment_id.bind(this);
  this.onChangeStatus=this.onChangeStatus.bind(this);
    this.saveTutorial = this.saveTutorial.bind(this);
    this.newTutorial = this.newTutorial.bind(this);

    this.state = {
      id: null,
      Name: "",
      Password:"",
      Phone:"",
      Email:"",
      Gender:"Gender",
      Status:"enable",
      City_name:"",
      Address:"",
      Department_id:"Government",
      submitted: false
    };
  }

  onChangeName(e) {
    this.setState({
      Name: e.target.value
    });
  }
  onChangePassword(e){
    this.setState({
      Password: e.target.value
    });
  }

  onChangePhone(e) {
    this.setState({
      Phone: e.target.value
    });
  }
  

  onChangeEmail(e) {
    this.setState({
      Email: e.target.value
    });
  }
  onChangeGender(e) {
    this.setState({
      Gender: e.target.value
    });
  }
  onChangeStatus(e) {
    this.setState({
      Status: e.target.value
    });
  
  }
  onChangeCity(e) {
    this.setState({
      City_name: e.target.value
    });
  }
  onChangeAddress(e) {
    this.setState({
      Address: e.target.value
    });
  }
  onChangeDepartment_id(e) {
    this.setState({
      Department_id: e.target.value
    });
  }


  saveTutorial() {
    var data = {
      "Name": this.state.Name,
      "Password":this.state.Password,
      "Phone":this.state.Phone,
      "Email":this.state.Email,
      "Gender":this.state.Gender,
      "Status":this.state.Status,
      "City_name":this.state.City_name,
      "Address":this.state.Address,
      "Department_id":this.state.Department_id,
    };

    TutorialDataService.create(data)
      .then(response => {
        this.setState({
        
          submitted: true
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
    
  }

  newTutorial() {
    this.setState({
      id: null,
      Name: "",
      Password:"",
      Phone:"",
      Email:"",
      Gender:"",
      Status:"",
      City_name:"",
      Address:"",
      Department_id:"",
      submitted: false
    });
  }

  render() {
    return (
        <div className="submit-form">
          {this.state.submitted ? (
            <div>
              <h4>You submitted successfully!</h4>
              <button className="btn btn-success" onClick={this.newTutorial}>
                Add Employee
              </button>
            </div>
          ) : (
            <div>
              <div className="form-group">
                <label htmlFor="title">Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  required
                  value={this.state.Name}
                  onChange={this.onChangeName}
                  name="name"
                />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  required
                  value={this.state.Password}
                  onChange={this.onChangePassword}
                  name="password"
                />
              </div>
              <div className="form-group">
                <label htmlFor="phone">Phone</label>
                <input
                  type="number"
                  className="form-control"
                  id="phone"
                  required
                  value={this.state.Phone}
                  onChange={this.onChangePhone}
                  name="phone"
                />
              </div>
              <div className="form-group">
                <label htmlFor="description">Email</label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  required
                  value={this.state.Email}
                  onChange={this.onChangeEmail}
                  name="description"
                />
              </div>
              <div className="form-group">
                {/* <label htmlFor="gender">Gender</label>
                <input
                  type="text"
                  className="form-control"
                  id="gender"
                  required
                  value={this.state.Gender}
                  onChange={this.onChangeGender}
                  name="gender"
                /> */}
                <select  value={this.state.Gender} 
          onChange={this.onChangeGender}>
    <option value="Male">Male</option>
  <option value="Female">Female</option>
  <option value="Others">Others</option>
  
</select>
              </div>
              <div className="form-group">
                {/* <label htmlFor="status">Status</label>
                <input
                  type="text"
                  className="form-control"
                  id="status"
                  required
                  value={this.state.Status}
                  onChange={this.onChangeStatus}
                  name="description"
                /> */}
                <select   
        onChange={this.onChangeStatus} value={this.state.Status}>
          <option  value="disable">disable</option>
          <option  value="enable">enable</option>

  
</select>
              </div>
              <div className="form-group">
                <label htmlFor="city">City</label>
                <input
                  type="text"
                  className="form-control"
                  id="city"
                  required
                  value={this.state.City_name}
                  onChange={this.onChangeCity}
                  name="city"
                />
              </div>
              <div className="form-group">
                <label htmlFor="Address">Address</label>
                <input
                  type="text"
                  className="form-control"
                  id="address"
                  required
                  value={this.state.Address}
                  onChange={this.onChangeAddress}
                  name="address"
                />
              </div>
              <div className="form-group">
              <select  value={this.state.Department_id} 
        onChange={this.onChangeDepartment_id}>
    <option value="Private">private</option>
  <option value="Government">Government</option>
  <option value="Inhouse">Inhouse</option>
  <option value="Overcise">Overcise</option>
</select>
                {/* <label htmlFor="city">Department</label>
                <input
                  type="text"
                  className="form-control"
                  id="Department"
                  required
                  value={this.state.Department_id}
                  onChange={this.onChangeDepartment_id}
                  name="Department"
                /> */}
              </div>
  
              <button onClick={this.saveTutorial} className="btn btn-success">
                Submit
              </button>
            </div>
          )}
        </div>
      );  
  }
}