import React, { Component } from "react";
import TutorialDataService from "../services/tutorial.service";
import { MDBDataTableV5 } from 'mdbreact';
import { Link } from "react-router-dom";
import { MDBBadge, MDBContainer, MDBBtn } from "mdbreact";

export default class EmployeesList extends Component {
  constructor(props) {
    super(props);
    this.onChangeSearchTitle = this.onChangeSearchTitle.bind(this);
    this.retrieveTutorials = this.retrieveTutorials.bind(this);
    this.refreshList = this.refreshList.bind(this);
    this.setActiveTutorial = this.setActiveTutorial.bind(this);
    this.removeAllTutorials = this.removeAllTutorials.bind(this);
    this.searchTitle = this.searchTitle.bind(this);
    this.enableButton =this.enableButton.bind(this);
   this.disableButton=this.disableButton.bind(this);
   this.totalButton=this.totalButton.bind(this);

    this.state = {

      tutorials: [],
      datatable :[],
      enablecount :null,
      disablecount :null,
      enableButton:0,
      disableButton:0,
      totalButton:1,
      total:null,
      currentTutorial: null,
      currentIndex: -1,
      searchTitle: ""
    };
  
  }

  componentDidMount() {
    this.retrieveTutorials();
  }

  onChangeSearchTitle(e) {
    const searchTitle = e.target.value;

    this.setState({
      searchTitle: searchTitle
    });
  }

  enableButton(){

    this.setState({
      enableButton:1,
    disableButton:0,
    totalButton:0});  

    TutorialDataService.getAll()
    .then(response => {
      this.setState({
        tutorials: response.data.all,
        enablecount:response.data.enablecount,
        disablecount:response.data.disablecount,
        datatable: {columns: [
          {
            label: 'Name',
            field: 'name',
            width: 150,
            attributes: {
              'aria-controls': 'DataTable',
              'aria-label': 'Name',
            },
          },
          {
            label: 'Phone',
            field: 'phone',
            width: 270,
          },
          {
            label: 'Email',
            field: 'email',
            width: 200,
          },
          {
            label: 'Gender',
            field: 'gender',
            width: 100,
          },
          {
            label: 'Status',
            field: 'status',
            sort: 'disabled',
            width: 150,
          },
          {
            label: 'Department_id',
            field: 'department_id',
            sort: 'disabled',
            width: 200,
          },
          {
            label: 'Address',
            field: 'address',
            sort: 'disabled',
            width: 200,
          },
          {
            label: 'City_name',
            field: 'city_name',
            sort: 'disabled',
            width: 200,
          }
        ],
        rows: this.state.totalButton == 1 ? response.data.all:
        this.state.disableButton == 1 ? response.data.disable : response.data.enable,
             }});
        console.log(response.data.enable);
      })
      .catch(e => {
        console.log(e);
      });
 
  }
  disableButton(){  
    this.setState({enableButton:0,
    disableButton:1,
    totalButton:0});
    
    TutorialDataService.getAll()
    .then(response => {
      this.setState({
        tutorials: response.data.all,
        enablecount:response.data.enablecount,
        disablecount:response.data.disablecount,
        datatable: {columns: [
          {
            label: 'Name',
            field: 'name',
            width: 150,
            attributes: {
              'aria-controls': 'DataTable',
              'aria-label': 'Name',
            },
          },
          {
            label: 'Phone',
            field: 'phone',
            width: 270,
          },
          {
            label: 'Email',
            field: 'email',
            width: 200,
          },
          {
            label: 'Gender',
            field: 'gender',
            width: 100,
          },
          {
            label: 'Status',
            field: 'status',
            sort: 'disabled',
            width: 150,
          },
          {
            label: 'Department',
            field: 'department',
            sort: 'disabled',
            width: 200,
          },
          {
            label: 'Address',
            field: 'address',
            sort: 'disabled',
            width: 200,
          },
          {
            label: 'City',
            field: 'city',
            sort: 'disabled',
            width: 200,
          }
        ],
        rows: this.state.totalButton == 1 ? response.data.all:
        this.state.disableButton == 1 ? response.data.disable : response.data.enable,
             }});
        console.log(response.data.enable);
      })
      .catch(e => {
        console.log(e);
      });   
  }
  totalButton(){  
    this.setState({enableButton:0,
    disableButton:0,
    totalButton:1}); 
    
    TutorialDataService.getAll()
    .then(response => {
      this.setState({
        tutorials: response.data.all,
        enablecount:response.data.enablecount,
        disablecount:response.data.disablecount,
        datatable: {columns: [
          {
            label: 'Name',
            field: 'name',
            width: 150,
            attributes: {
              'aria-controls': 'DataTable',
              'aria-label': 'Name',
            },
          },
          {
            label: 'Phone',
            field: 'phone',
            width: 270,
          },
          {
            label: 'Email',
            field: 'email',
            width: 200,
          },
          {
            label: 'Gender',
            field: 'gender',
            width: 100,
          },
          {
            label: 'Status',
            field: 'status',
            sort: 'disabled',
            width: 150,
          },
          {
            label: 'Department',
            field: 'department',
            sort: 'disabled',
            width: 200,
          },
          {
            label: 'Address',
            field: 'address',
            sort: 'disabled',
            width: 200,
          },
          {
            label: 'City',
            field: 'city',
            sort: 'disabled',
            width: 200,
          }
        ],
        rows: this.state.totalButton == 1 ? response.data.all:
        this.state.disableButton == 1 ? response.data.disable : response.data.enable,
             }});
        console.log(response.data.enable);
      })
      .catch(e => {
        console.log(e);
      });  
  }

  retrieveTutorials() {
    TutorialDataService.getAll()
      .then(response => {
        this.setState({
          tutorials: response.data.all,
          enablecount:response.data.enablecount,
          disablecount:response.data.disablecount,
          datatable: {columns: [
            {
              label: 'Name',
              field: 'name',
              width: 150,
              attributes: {
                'aria-controls': 'DataTable',
                'aria-label': 'Name',
              },
            },
            {
              label: 'Phone',
              field: 'phone',
              width: 270,
            },
            {
              label: 'Email',
              field: 'email',
              width: 200,
            },
            {
              label: 'Gender',
              field: 'gender',
              width: 100,
            },
            {
              label: 'Status',
              field: 'status',
              sort: 'disabled',
              width: 150,
            },
            {
              label: 'Department',
              field: 'department',
              sort: 'disabled',
              width: 200,
            },
            {
              label: 'Address',
              field: 'address',
              sort: 'disabled',
              width: 200,
            },
            {
              label: 'City',
              field: 'city',
              sort: 'disabled',
              width: 200,
            }
          ],
          rows: this.state.totalButton == 1 ? response.data.all:
          this.state.disableButton == 1 ? response.data.disable : response.data.enable,
        
      
        }});
        console.log(response.data.enable);
      })
      .catch(e => {
        console.log(e);
      });
  }

  refreshList() {
    this.retrieveTutorials();
    this.setState({
      currentTutorial: null,
      currentIndex: -1
    });
  }

  setActiveTutorial(tutorial, index) {
    this.setState({
      currentTutorial: tutorial,
      currentIndex: index
    });
  }

  removeAllTutorials() {
    TutorialDataService.deleteAll()
      .then(response => {
        console.log(response.data);
        this.refreshList();
      })
      .catch(e => {
        console.log(e);
      });
  }

  searchTitle() {
    TutorialDataService.findByTitle(this.state.searchTitle)
      .then(response => {
        this.setState({
          tutorials: response.data
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }

  render() {
    const { searchTitle, tutorials, currentTutorial, currentIndex } = this.state;

    return (
      <div className="list row">
        {/* <div className="col-md-8">
          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Search by title"
              value={searchTitle}
              onChange={this.onChangeSearchTitle}
            />
            <div className="input-group-append">
              <button
                className="btn btn-outline-secondary"
                type="button"
                onClick={this.searchTitle}
              >
                Search
              </button>
            </div>
          </div>
        </div> */}
        <div className="col-md-12">
        <MDBContainer>
        {/* <MDBBtn color="default"  onClick={this.totalButton}>
        Total <MDBBadge color="danger" className="ml-2">{this.state.enablecount}</MDBBadge>
        <span className="sr-only">unread messages</span>
      </MDBBtn> */}
      <MDBBtn color="success"  onClick={this.enableButton}>
        Enable <MDBBadge color="danger" className="ml-2">{this.state.enablecount}</MDBBadge>
        <span className="sr-only">unread messages</span>
      </MDBBtn>
      <MDBBtn color="primary" onClick={this.disableButton}>
        Disable <MDBBadge color="danger" className="ml-2">{this.state.disablecount}</MDBBadge>
        <span className="sr-only">unread messages</span>
      </MDBBtn>
    </MDBContainer>
        <MDBDataTableV5
          striped
          bordered
          focus
          hover entriesOptions={[5, 10, 25]} entries={5} pagesAmount={4} data={this.state.datatable} materialSearch searchTop searchBottom={false}  pagingTop />
          {/* <h4>Enable Employees :{this.state.enablecount}  Disable Employees: {this.state.disablecount}</h4> */}


          {/* <ul className="list-group">
            {
            tutorials &&
              tutorials.map((tutorial, index) => (
                <li
                  className={
                    "list-group-item " +
                    (index === currentIndex ? "active" : "")
                  }
                  onClick={() => this.setActiveTutorial(tutorial, index)}
                  key={index}
                >
                 {tutorial.name} 
            
                </li>      
              ))}
          </ul> */}

          <button
            className="m-3 btn btn-sm btn-danger"
            onClick={this.removeAllTutorials}
          >
            Remove All
          </button>
        </div>
        <div className="col-md-9">
          {currentTutorial ? (
            <div>
              <h4>User Management</h4>
              <div>
                <label>
                  <strong>User Name:</strong>
                </label>{" "}
                {currentTutorial.name}
              </div>
              <div>
              <div>
                <label>
                  <strong>Designation:</strong>
                </label>{" "}
                {currentTutorial.designation}
              </div>
                <label>
                  <strong>Description:</strong>
                </label>{" "}
                {currentTutorial.description}
              </div>
              <div>
                <label>
                  <strong>Status:</strong>
                </label>{" "}
                {currentTutorial.published ? "Published" : "Pending"}
              </div>

              <Link
                to={"/userdata/" + currentTutorial.id}
                className="badge badge-warning"
              >
                Edit
              </Link>
            </div>
          ) : (
            <div>
              <br />
              <p>Please click on a user names...</p>
            </div>
          )}
        </div>
      </div>
    );
  }
}