import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import axios from "axios";
import { adminlogin } from "./../Url/Admin";
//import cookie from "../Utils/cookie";

class superLogin extends Component {
  state = {
    username: "",
    password: ""
  };

  UNSAFE_componentWillMount() {
    document.title = "Admin";
  }

  onSubmit = e => {
    e.preventDefault();

    const { username, password } = this.state;

    const obj = {
      username,
      password
    };

    axios
      .post(adminlogin, obj)
      .then(res => {
        let userStatus = res.data.userStatus;
        let userType = res.data.userType;
        let token = res.headers["x-auth-token"];
        if (userStatus === "active") {
          sessionStorage.setItem("x-auth-token", token);
          sessionStorage.setItem("userStatus", userStatus);
          sessionStorage.setItem("userType", userType);
          sessionStorage.setItem("username", username);
          // cookie.setCookie('x-auth-token', token , 120);
          // cookie.setCookie('userStatus', userStatus, 120);
          // cookie.setCookie('userType', userType, 120);
          // cookie.setCookie('username', username,120);
          this.props.history.replace("/create-user");
        } else {
          alert("user inactive");
          this.setState({ username: "", password: "" });
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

  onChangeSuperUserName = e => {
    this.setState({ username: e.target.value, usernameValidation: false });
  };
  onChangeSuperPassword = e => {
    this.setState({ password: e.target.value, passwordValidation: false });
  };

  render() {

    if (sessionStorage.getItem("x-auth-token") !== null) {
        return <Redirect to="/dashboard" />;
    }

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
                <span className="navbar-toggler-icon"></span>
              </button>
              <Link
                className="navbar-brand"
                to="#"
                style={{ color: "#ffffff" }}
              >
                <i className="fas fa-user-cog"></i>&nbsp; AdminStrap
              </Link>
            </div>
            <div id="navbar" className="collapse navbar-collapse"></div>
          </div>
        </nav>
        <br /> <br />
        <header id="header">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="panel panel-default">
                  <div className="panel-body text-center pt-5">
                    <h4 style={{ color: "#72726f" }}>
                      <i className="fas fa-user-shield"></i>&nbsp; Account Login
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>
        <section id="main">
          <div className="container">
            <div
              style={{
                marginLeft: "auto",
                marginRight: "auto"
              }}
              className="col-sm-6 border border-light p-5"
            >
              <form className="text-center" onSubmit={this.onSubmit}>
                <input
                  type="text"
                  id="defaultLoginFormNumber"
                  onChange={this.onChangeSuperUserName}
                  value={this.state.username}
                  className="form-control mb-4 border border-primary"
                  placeholder="User ID"
                  style={{ height: "50px" }}
                ></input>

                <input
                  type="password"
                  id="defaultLoginFormPassword"
                  onChange={this.onChangeSuperPassword}
                  value={this.state.password}
                  className="form-control mb-4 border border-primary"
                  placeholder="Password"
                  style={{ height: "50px" }}
                ></input>

                <div className="d-flex align-items-center justify-content-between">
                  <div>
                    <div className="custom-control custom-checkbox">
                      <input
                        type="checkbox"
                        className="custom-control-input"
                        id="defaultLoginFormRemember"
                      ></input>
                      <label
                        className="custom-control-label"
                        htmlFor="defaultLoginFormRemember"
                      >
                        Remember me
                      </label>
                    </div>
                  </div>
                  <div>
                    <Link to="" style={{ color: "#3ed6a6" }}>
                      Forgot password?
                    </Link>
                  </div>
                </div>

                <button
                  className="btn btn-info btn-block my-4"
                  type="submit"
                  style={{ backgroundColor: "#3ed6a6" }}
                >
                  Login
                </button>
              </form>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default superLogin;
