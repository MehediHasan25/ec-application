import React, { Component } from "react";
import { Link } from "react-router-dom";
import cookie from "../Utils/cookie";
import { createuser } from "../Url/Admin";
import axios from "axios";
import "../CSS/superSideBar.css";

class createUser extends Component {
  state = {
    username: "",
    usernameValidation: false,
    password: "",
    passwordValidation: false,
    email: "",
    emailValidation: false,
    mobile: "",
    mobileValidation: false,
    userStatus: "",
    userStatusValidation: "",
    userType: "",
    userTypeValidation: false
  };

  onSubmit = e => {
    e.preventDefault();

    const {
      username,
      password,
      email,
      mobile,
      userStatus,
      userType
    } = this.state;

    const config = {
      headers: {
        "x-auth-token": cookie.getCookie("x-auth-token")
      }
    };

    const obj = {
      username,
      password,
      email,
      mobile,
      userStatus,
      userType
    };

    axios
      .post(createuser, obj, config)
      .then(res => {
        if (res.data.userId !== null) {
          alert("User created Successfully");
        } 
        else {
            alert("Something Went Wrong");
        }
      })
      .catch(err => {
        if (err.response) {
          if (err.response.status === 400 || err.response.status === 401) {
            console.log(err.response.data);
            alert(err.response.data.message);
          } else if (err.response.status === 404) {
            alert("Not Found");
          } else if (err.response.status === 500) {
            alert(err.response.data.message);
          }
        } else if (err.request) {
          console.log(err.request);
          alert("Error Connectiong");
        } else {
          console.log("Error", err.message);
          alert(err.message);
        }
      });
  };

  onChangeUsername = e => this.setState({ username: e.target.value });
  onChangePassword = e => this.setState({ password: e.target.value });
  onChangeEmail = e => this.setState({ email: e.target.value });
  onChangeMobile = e => this.setState({ mobile: e.target.value });
  onChangeUserStatus = e => this.setState({ userStatus: e.target.value });
  onChangeUserType = e => this.setState({ userType: e.target.value });

  render() {
    return (
      <div>
        <nav
          className="navbar fixed-top navbar-expand-md navbar-light shadow"
          style={{ backgroundColor: "#3ed6a6" }}
        >
          <div className="container">
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
              <div className="navbar-nav">
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
              </div>
              <div className="navbar-nav ml-auto">
                <Link
                  to="#"
                  className="nav-item nav-a"
                  style={{ color: "#ffffff", textDecoration: "none" }}
                >
                  <i className="fas fa-user" />
                  &nbsp; Welcome, Demo
                </Link>
                &nbsp;&nbsp;&nbsp;
                <Link
                  to="#"
                  className="nav-item nav-a"
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
          <Link className="active" to="#home">
            <i className="fas fa-home" />
            &nbsp;&nbsp;Home
          </Link>

          <Link to="#news">
            <i className="fas fa-newspaper" />
            &nbsp;&nbsp;Create User{" "}
          </Link>

          <Link to="#contact">
            <i className="fas fa-id-badge" />
            &nbsp;&nbsp;Update User
          </Link>
          <Link to="#about">
            <i className="fas fa-eject" />
            &nbsp;&nbsp;All User
          </Link>
          <Link
            to="#"
            className="nav-item nav-a"
            style={{ color: "#ffffff" }}
            tabIndex="-1"
          >
            <i className="fab fa-readme" />
            &nbsp; Reports
          </Link>
        </div>

        <div className="content">
          <div className="row ">
            {/* create user component///////////////////////////////////////////////////////////// */}

            <div className="container" style={{ backgroundColor: "#f7f7f7" }}>
              <div
                className="d-flex align-items-center card border-light mb-3"
                style={{ backgroundColor: "#f7f7f7" }}
              >
                <div
                  className="col-sm-5 shadow p-3 mb-2"
                  style={{
                    backgroundColor: "#8f8e8e",
                    color: "#fff",
                    textAlign: "center",
                    marginTop: "15px"
                  }}
                >
                  <i className="fas fa-certificate" />
                  &nbsp;Create User
                </div>
                <div className="card-body">
                  <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                      <input
                        type="text"
                        onChange={this.onChangeUsername}
                        className="form-control"
                        id="name"
                        placeholder="UserName"
                      />
                    </div>

                    <div className="form-group">
                      <input
                        type="password"
                        onChange={this.onChangePassword}
                        className="form-control"
                        id="pass"
                        placeholder="password"
                      />
                    </div>

                    <div className="form-group">
                      <input
                        type="text"
                        onChange={this.onChangeMobile}
                        className="form-control"
                        id="mobile"
                        placeholder="Mobile Number"
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="email"
                        onChange={this.onChangeEmail}
                        className="form-control"
                        id="email"
                        placeholder="Email"
                      />
                    </div>

                    <div className="form-group">
                      <select
                        className="custom-select"
                        onChange={this.onChangeUserStatus}
                      >
                        <option value="">User Status</option>
                        <option value="active">Active</option>
                        <option value="inactive">Inactive</option>
                        <option value="archive">Archive</option>
                      </select>
                    </div>

                    <div className="form-group">
                      <select
                        className="custom-select"
                        onChange={this.onChangeUserType}
                      >
                        <option value="">User Type</option>
                        <option value="admin">Admin</option>
                        <option value="normal">Normal</option>
                      </select>
                    </div>

                    <br />

                    {/* <div className="form-group">
                                <label htmlFor="exampleInputFile">Provide NID Image</label>
                                <input type="file" className="form-control-file" id="exampleInputFile" aria-describedby="fileHelp"></input>
                                <br />

                            </div> */}
                    <small id="fileHelp" className="form-text text-muted">
                      <i
                        style={{ color: "#3ed6a6" }}
                        className="fas fa-exclamation-circle"
                      />
                      &nbsp; Before submitting form, please check all your
                      provided information again.
                    </small>
                    <br />

                    <button
                      type="submit"
                      className="btn btn-block shadow"
                      style={{ backgroundColor: "#3ed6a6", color: "#fff" }}
                    >
                      <i className="fas fa-check-circle" />
                      &nbsp; Submit
                    </button>
                    <br />
                  </form>
                </div>
              </div>
            </div>

            {/* create user component ////////////////////////////////////////////////////////////*/}
          </div>
        </div>
      </div>
    );
  }
}

export default createUser;
