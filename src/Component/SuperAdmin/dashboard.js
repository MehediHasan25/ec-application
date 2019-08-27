import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
//import cookie from '../Utils/cookie';
import { checkValidation } from "./../Utils/routeControl";

class Dashboard extends Component {
  state = {};

  UNSAFE_componentWillMount() {
    document.title = "Home";
  }
  logout = e => {
    sessionStorage.clear();
  };
  render() {
    const sessionName = sessionStorage.getItem("username");

    let cv = checkValidation(
      sessionStorage.getItem("x-auth-token"),
      sessionStorage.getItem("userStatus")
    );
    if (cv !== null) return <Redirect to="/" />;
    
    return (
      <div>
        <nav
          className="navbar fixed-top navbar-expand-md navbar-light shadow"
          style={{ backgroundColor: "#3ed6a6" }}
        >
          <div className="container-fluid">
            <div className="navbar-header">
              <button
                type="button"
                className="navbar-toggler"
                data-toggle="collapse"
                data-target="#navbarCollapse"
              >
                <span className="navbar-toggler-icon" />
              </button>
              <Link
                className="navbar-brand"
                to="#"
                style={{ color: "#ffffff", textDecoration: "none" }}
              >
                <i className="fas fa-user-cog" />
                &nbsp; Admin
              </Link>
              &nbsp;&nbsp;&nbsp;
            </div>
            <div className="collapse navbar-collapse" id="navbarCollapse">
              {/* <div className="navbar-nav">
                    <Link
                      to="#"
                      className="nav-item nav-a"
                      style={{ color: "#ffffff", textDecoration: "none" }}
                    >
                      <i className="fas fa-home" />
                      &nbsp; Home
                    </Link>
                    &nbsp;&nbsp;&nbsp;
                    <Link
                      to="#"
                      className="nav-item nav-a"
                      style={{ color: "#ffffff", textDecoration: "none" }}
                    >
                      <i className="fas fa-user" />
                      &nbsp; Profile
                    </Link>
                    &nbsp;&nbsp;&nbsp;
                    <Link
                      to="#"
                      className="nav-item nav-a"
                      style={{ color: "#ffffff", textDecoration: "none" }}
                    >
                      <i className="fas fa-envelope-open-text" />
                      &nbsp; Messages
                    </Link>
                    &nbsp;&nbsp;&nbsp;
                  </div> */}
              <div className="navbar-nav ml-auto">
                <Link
                  to="#"
                  className="nav-item nav-a"
                  style={{ color: "#ffffff", textDecoration: "none" }}
                >
                  <i className="fas fa-user" />
                  &nbsp; Welcome, {sessionName}
                </Link>
                &nbsp;&nbsp;&nbsp;
                <Link
                  to="/"
                  className="nav-item nav-a"
                  onClick={this.logout}
                  style={{ color: "#ffffff", textDecoration: "none" }}
                >
                  <i className="fas fa-sign-out-alt" />
                  &nbsp; Logout
                </Link>
              </div>
            </div>
          </div>
        </nav>

        <div className="sidebar shadow" style={{ backgroundColor: "#8f8e8e" }}>
          <Link className="active" to="/dashboard">
            <i className="fas fa-home" />
            &nbsp;&nbsp;Home
          </Link>

          <Link to="/create-user">
            <i className="fas fa-newspaper" />
            &nbsp;&nbsp;Create User{" "}
          </Link>

          <Link to="get-user">
            <i className="fas fa-id-badge" />
            &nbsp;&nbsp;Update User
          </Link>
          <Link to="get-all">
            <i className="fas fa-eject" />
            &nbsp;&nbsp;All User
          </Link>
        </div>

        <div className="content">
          <div className="row ">
            {/* start Content///////////////////////////////////////////////////////////// */}
            <div className="col">
              <div className="jumbotron">
                <div
                  className="shadow mb-3"
                  style={{
                    backgroundColor: "#fcfcfc",
                    color: "#8f8e8e",
                    textAlign: "center"
                  }}
                >
                  <i class="fas fa-box-open"></i>&nbsp;User Archive
                </div>
                <div className="row d-flex justify-content-around">
                  <div className="card text-white bg-info mb-3 text-center col-sm-3 shadow">
                    <div className="card-header">Total User</div>
                    <div className="card-body">
                      <h4 className="card-title">
                        <i class="fas fa-users"></i>&nbsp; 586
                      </h4>
                    </div>
                  </div>
                  <div className="card text-white bg-primary text-center mb-3 col-sm-3 shadow">
                    <div className="card-header">Today User Access</div>
                    <div className="card-body">
                      <h4 className="card-title">
                        <i class="fas fa-globe"></i>&nbsp; 66
                      </h4>
                    </div>
                  </div>
                  <div className="card text-white bg-dark text-center mb-3 col-sm-3 shadow">
                    <div className="card-header">Total Verifications</div>
                    <div className="card-body">
                      <h4 className="card-title">
                        <i class="fas fa-user-check"></i>&nbsp; 1548
                      </h4>
                    </div>
                  </div>
                </div>
                <div
                  className="shadow mb-3"
                  style={{
                    backgroundColor: "#fcfcfc",
                    color: "#8f8e8e",
                    textAlign: "center",
                    marginTop: "50px"
                  }}
                >
                  <i class="fas fa-skating"></i>&nbsp;Active Users
                </div>
                <div className="row">
                  <table class="table table-hover">
                    <thead>
                      <tr>
                        <th scope="col">User ID</th>
                        <th scope="col">User Name</th>
                        <th scope="col">User Email</th>
                        <th scope="col">User Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th scope="row">01</th>
                        <td>Column content</td>
                        <td>Column content</td>
                        <td>Column content</td>
                      </tr>
                      <tr>
                        <th scope="row">02</th>
                        <td>Column content</td>
                        <td>Column content</td>
                        <td>Column content</td>
                      </tr>
                      <tr>
                        <th scope="row">03</th>
                        <td>Column content</td>
                        <td>Column content</td>
                        <td>Column content</td>
                      </tr>
                      <tr>
                        <th scope="row">04</th>
                        <td>Column content</td>
                        <td>Column content</td>
                        <td>Column content</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            {/* End Content ////////////////////////////////////////////////////////////*/}
          </div>
        </div>
      </div>
    );
  }
}

export default Dashboard;
