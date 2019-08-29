import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
//import cookie from "../Utils/cookie";
import { createuser } from "../Url/Admin";
import axios from "axios";
import "../CSS/superSideBar.css";
import { checkValidation } from "./../Utils/routeControl";

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

  UNSAFE_componentWillMount() {
    document.title = "Create User";
  }

  // validateEmail(email) {
  //   var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  //   return re.test(String(email).toLowerCase());
  // }

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

    //// username
    if (username === "") {
      this.getUsernameError = alert("User Name is empty");
      this.setState({ usernameValidation: true });
      return;
    }
    if (username.length < 3 || username.length >= 30) {
      this.getUsernameError = alert(
        "User Name must be greater than 3 and less than 30 characters"
      );
      this.setState({ usernameValidation: true });
      return;
    }

    if (password === "") {
      this.getPasswordError = alert("Password is empty");
      this.setState({ passwordValidation: true });
      return;
    } 
    if (password === username) {
      this.getPasswordError = alert("Password is not allowed same as username");
      this.setState({ passwordValidation: true });
      return;
    }
    if (password.length < 8) {
      this.getPasswordError = alert("Password must be 8 characters");
      this.setState({ passwordValidation: true });
      return;
    } 
    

    if (mobile === "") {
      this.getMobileError = alert("Mobile Number field is empty");
      this.setState({ mobileValidation: true });
      return;
    } else if (mobile.length < 11) {
      this.getMobileError = alert("Mobile Number is less  than 11 digits");
      this.setState({ mobileValidation: true });
      return;
    } else if (mobile.length > 11) {
      this.getMobileError = alert("Mobile Number is greate than 11 digits");
      this.setState({ mobileValidation: true });
      return;
    }


    if (userStatus === "") {
      this.getUserStatusError = alert("Please Select User Status");
      this.setState({ userStatusValidation: true });
      return;
    }

    if (userType === "") {
      this.getUserTypeError = alert("Please Select User Type");
      this.setState({ userTypeValidation: true });
      return;
    }
    

    const config = {
      headers: {
        "x-auth-token": sessionStorage.getItem("x-auth-token")
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
        } else {
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

    this.setState({
      username: "",
      password: "",
      email: "",
      mobile: "",
      userStatus: "",
      userType: ""
    });
  };

  logout = e => {
    sessionStorage.clear();
  };

  onChangeUsername = e =>
    this.setState({ username: e.target.value, usernameValidation: false });
  onChangePassword = e =>
    this.setState({ password: e.target.value, passwordValidation: false });
  onChangeEmail = e => this.setState({ email: e.target.value });
  onChangeMobile = e => this.setState({ mobile: e.target.value });
  onChangeUserStatus = e => this.setState({ userStatus: e.target.value, userStatusValidation: false });
  onChangeUserType = e => this.setState({ userType: e.target.value, userTypeValidation: false });

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
                      <i style={{ color: "red", textAlign: "right" }}>
                        {this.state.usernameValidation === true
                          ? this.getUsernameError
                          : ""}
                      </i>
                      <input
                        type="text"
                        onChange={this.onChangeUsername}
                        className="form-control"
                        value={this.state.username}
                        id="name"
                        placeholder="UserName"
                      />
                    </div>

                    <div className="form-group">
                      <i style={{ color: "red", textAlign: "right" }}>
                        {this.state.passwordValidation === true
                          ? this.getPasswordError
                          : ""}
                      </i>
                      <input
                        type="password"
                        onChange={this.onChangePassword}
                        className="form-control"
                        value={this.state.password}
                        id="pass"
                        placeholder="password"
                      />
                    </div>

                    <div className="form-group">
                      <i style={{ color: "red", textAlign: "right" }}>
                        {this.state.mobileValidation === true
                          ? this.getMobileError
                          : ""}
                      </i>
                      <input
                        type="text"
                        onChange={this.onChangeMobile}
                        className="form-control"
                        value={this.state.mobile}
                        id="mobile"
                        placeholder="Mobile Number"
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="email"
                        onChange={this.onChangeEmail}
                        className="form-control"
                        value={this.state.email}
                        id="email"
                        placeholder="Email"
                      />
                    </div>

                    <div className="form-group">
                    <i style={{ color: "red", textAlign: "right" }}>
                        {this.state.usernameValidation === true
                          ? this.getUserStatusError
                          : ""}
                      </i>
                      <select
                        className="custom-select"
                        onChange={this.onChangeUserStatus}
                        value={this.state.userStatus}
                      >
                        <option value="">User Status</option>
                        <option value="active">Active</option>
                        <option value="inactive">Inactive</option>
                        <option value="archive">Archive</option>
                      </select>
                    </div>

                    <div className="form-group">
                    <i style={{ color: "red", textAlign: "right" }}>
                        {this.state.userTypeValidation === true
                          ? this.getUserTypeError
                          : ""}
                      </i>
                      <select
                        className="custom-select"
                        onChange={this.onChangeUserType}
                        value={this.state.userType}
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
