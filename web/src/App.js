import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import AddEmployee from "./components/add-employee.component";
import Tutorial from "./components/tutorial.component";
import TutorialsList from "./components/employees-list.component";
import AddAssignment from "./components/add-assignment.component";
import AssignmentsList from "./components/assignment-list.component";
import Login from "./components/login";
import Logout from "./components/add-assignment.component";
class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <nav className="navbar navbar-expand navbar-dark bg-dark">
            <a href="https://github.com/AbdulBariishere" className="navbar-brand">
            Github
            </a>
            <div className="navbar-nav mr-auto">
              <li className="nav-item">
                <Link to={"/userdata"} className="nav-link">
                  Dashboard
                </Link>
              </li>
              {/* <li className="nav-item">
                <Link to={"/assignmentdata"} className="nav-link">
                  Assignment List
                </Link>
              </li> */}
              <li className="nav-item">
                <Link to={"/add"} className="nav-link">
                  Add Employees
                </Link>
              </li>
              <li className="nav-item">
                <Link to={"/logout"} className="nav-link">
                Logout
                </Link>
              </li>
            </div>
          </nav>

          <div className="container mt-3">
            <Switch>
            <Route exact path={["/"]} component={Login} />
              <Route exact path={[ "/userdata"]} component={TutorialsList} />
              <Route exact path={[ "/assignmentdata"]} component={AssignmentsList} />
              <Route exact path="/add" component={AddEmployee} />
              <Route exact path="/logout" component={Logout} />
              <Route path="/userdata/:id" component={Tutorial} />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;