import React, { Component } from "react";
import AssignmentDataService from "../services/Assignment.service";
import { Link } from "react-router-dom";

export default class AssignmentsList extends Component {
  constructor(props) {
    super(props);
    this.onChangeSearchTitle = this.onChangeSearchTitle.bind(this);
    this.retrieveAssignments = this.retrieveAssignments.bind(this);
    this.refreshList = this.refreshList.bind(this);
    this.setActiveAssignment = this.setActiveAssignment.bind(this);
    this.removeAllAssignments = this.removeAllAssignments.bind(this);
    this.searchTitle = this.searchTitle.bind(this);

    this.state = {
      Assignments: [],
      currentAssignment: null,
      currentIndex: -1,
      searchTitle: ""
    };
  }

  componentDidMount() {
    this.retrieveAssignments();
  }

  onChangeSearchTitle(e) {
    const searchTitle = e.target.value;

    this.setState({
      searchTitle: searchTitle
    });
  }

  retrieveAssignments() {
    AssignmentDataService.getAll()
      .then(response => {
        this.setState({
          Assignments: response.data
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }

  refreshList() {
    this.retrieveAssignments();
    this.setState({
      currentAssignment: null,
      currentIndex: -1
    });
  }

  setActiveAssignment(Assignment, index) {
    this.setState({
      currentAssignment: Assignment,
      currentIndex: index
    });
  }

  removeAllAssignments() {
    AssignmentDataService.deleteAll()
      .then(response => {
        console.log(response.data);
        this.refreshList();
      })
      .catch(e => {
        console.log(e);
      });
  }

  searchTitle() {
    AssignmentDataService.findByTitle(this.state.searchTitle)
      .then(response => {
        this.setState({
          Assignments: response.data
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }

  render() {
    const { searchTitle, Assignments, currentAssignment, currentIndex } = this.state;

    return (
      <div className="list row">
        <div className="col-md-8">
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
        </div>
        <div className="col-md-6">
          <h4>User List</h4>

          <ul className="list-group">
            {
            Assignments &&
              Assignments.map((Assignment, index) => (
                <li
                  className={
                    "list-group-item " +
                    (index === currentIndex ? "active" : "")
                  }
                  onClick={() => this.setActiveAssignment(Assignment, index)}
                  key={index}
                >
                 {Assignment.name} 
                </li>
               
                
                
              ))}
          </ul>

          <button
            className="m-3 btn btn-sm btn-danger"
            onClick={this.removeAllAssignments}
          >
            Remove All
          </button>
        </div>
        <div className="col-md-6">
          {currentAssignment ? (
            <div>
              <h4>User Management</h4>
              <div>
                <label>
                  <strong>User Name:</strong>
                </label>{" "}
                {currentAssignment.name}
              </div>
              <div>
              <div>
                <label>
                  <strong>Designation:</strong>
                </label>{" "}
                {currentAssignment.designation}
              </div>
                <label>
                  <strong>Description:</strong>
                </label>{" "}
                {currentAssignment.description}
              </div>
              <div>
                <label>
                  <strong>Status:</strong>
                </label>{" "}
                {currentAssignment.published ? "Published" : "Pending"}
              </div>

              <Link
                to={"/userdata/" + currentAssignment.id}
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