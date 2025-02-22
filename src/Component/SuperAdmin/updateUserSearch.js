import React, { Component } from "react";
import "../CSS/superSideBar.css";
import { Link } from "react-router-dom";
import cookie from "../Utils/cookie";
import axios from "axios";
import { getUserByUsername } from "./../Url/Admin";
import UpdateUserForm from "./updateUserForm";

class updateUserSearch extends Component {
  state = {
    username: "",
    _id: "",
    userNameProps: "",
    userType: "",
    userStatus: "",
    updatedBy: "",
    updateDate: "",
    mobile: "",
    email: "",
    createdBy: "",
    createDate: "",
    isShow: false
  };

  onSubmit = e => {
    e.preventDefault();
    const { username } = this.state;
    const config = {
      headers: {
        "x-auth-token": cookie.getCookie("x-auth-token")
      }
    };

    axios
      .get(getUserByUsername + username, config)
      .then(res => {
        console.log(res.data);
        this.setState({
          _id: res.data._id,
          userNameProps: res.data.username,
          userType: res.data.userType,
          userStatus: res.data.userStatus,
          updatedBy: res.data.updatedBy,
          updateDate: res.data.updateDate,
          mobile: res.data.mobile,
          email: res.data.email,
          createdBy: res.data.createdBy,
          createDate: res.data.createDate,          
        });
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
      this.setState({isShow:true});
  };

  onChangeUsername = e => this.setState({ username: e.target.value });

  render() {
    const searchData = (
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
            &nbsp;Search User
          </div>
          <div className="card-body col-sm-5">
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

              <br />

              {/* <div className="form-group">
                            <label htmlFor="exampleInputFile">Provide NID Image</label>
                            <input type="file" className="form-control-file" id="exampleInputFile" aria-describedby="fileHelp"></input>
                            <br />

                        </div> */}

              <button
                type="submit"
                className="btn shadow "
                style={{
                  backgroundColor: "#3ed6a6",
                  color: "#fff",
                  float: "right"
                }}
              >
                <i className="fas fa-check-circle" />
                &nbsp; Search
              </button>
              <br />
            </form>
          </div>
        </div>
      </div>
    );
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

          <Link to="/dashboard">
            <i className="fas fa-id-badge" />
            &nbsp;&nbsp;Dashboard
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
        <br />
        <br />
        <br />
        <br />
        <div className="content">
          <div className="row ">
            {/* Update user Search component ////////////////////////////////////////////////////////////*/}
            {this.state.isShow ? (
             <UpdateUserForm
             id={this.state._id}
             name={this.state.userNameProps}
             mobile={this.state.mobile}
             email={this.state.email}
             userStatus={this.state.userStatus}
             userType={this.state.userType}
             createDate={this.state.createDate}
             createdBy={this.state.createdBy}
             updateDate={this.state.updateDate}
             updatedBy={this.state.updatedBy}
           />
            ) : (
              searchData
            )}

            {/* Update user Search component ////////////////////////////////////////////////////////////*/}
          </div>
        </div>
      </div>
    );
  }
}

export default updateUserSearch;
