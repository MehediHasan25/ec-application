import React, { Component } from "react";
import cookie from "../Utils/cookie";
import axios from "axios";
import { getUserByUsername } from "./../Url/Admin";
import { updateuser } from "./../Url/Admin";
import "../CSS/superSideBar.css";
import { Link } from "react-router-dom";

class UpdateUser extends Component {
  state = {
    username: "",
    _id: "",
    userNameUpdate: "",
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
    //  const {username} = this.state;
    //  console.log(username);
    // this.setState({isShow:true});
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
          username: res.data.username,
          userType: res.data.userType,
          userStatus: res.data.userStatus,
          updatedBy: res.data.updatedBy,
          updateDate: res.data.updateDate,
          mobile: res.data.mobile,
          email: res.data.email,
          createdBy: res.data.createdBy,
          createDate: res.data.createDate
        });
        this.setState({ isShow: true });
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

  logout = e => {
    cookie.setCookie("x-auth-token", "", -1);
    cookie.setCookie("userStatus", "", -1);
    cookie.setCookie("userType", "", -1);
    cookie.setCookie("username", "", -1);
  }

  onSubmitUpdate = e => {
    e.preventDefault();
    // console.log(this.state.userNameUpdate);
    // console.log(this.state.userType);
    // console.log(this.state.userType);
    // console.log(this.state.userStatus);
    // console.log(this.state.mobile);
    // console.log(this.state.email);
    // this.setState({isShow:false});
    const {
      _id,
      username,
      userType,
      userStatus,
      updatedBy,
      updateDate,
      mobile,
      email,
      createdBy,
      createDate
    } = this.state;

    const config = {
      headers: {
        "x-auth-token": cookie.getCookie("x-auth-token")
      }
    };

    const obj = {
      _id,
      username,
      userType,
      userStatus,
      updatedBy,
      updateDate,
      mobile,
      email,
      createdBy,
      createDate
    };

    axios
      .put(updateuser, obj, config)
      .then(res => {
        console.log(res);
        alert("successful");
        this.setState({ isShow: false });
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
  //onChangeUserNameUpdate = e => this.setState({userNameUpdate: e.target.value});
  onChangeUserType = e => this.setState({ userType: e.target.value });
  onChangeUserStatus = e => this.setState({ userStatus: e.target.value });
  onChangeEmail = e => this.setState({ email: e.target.value });
  onChangemobile = e => this.setState({ mobile: e.target.value });

  render() {
    const cookieName = cookie.getCookie("username");
    ///Search Data////
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
    ////Search Data////////

    ///////////////////Update User Form ////////////////////////////
    const userForm = (
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
            &nbsp;Update User
          </div>
          <div className="card-body">
            <form onSubmit={this.onSubmitUpdate}>
              <div className="form-group">
                <input
                  type="text"
                  onChange={this.onChangeUsername}
                  defaultValue={this.state.username}
                  className="form-control"
                  id="name"
                  placeholder="User Name"
                />
              </div>

              {/* <div className="form-group">

                                <input type="password" className="form-control" id="pass" placeholder="password"></input>
                            </div> */}

              <div className="form-group">
                <input
                  type="text"
                  onChange={this.onChangemobile}
                  defaultValue={this.state.mobile}
                  className="form-control"
                  id="mobile"
                  placeholder="Mobile Number"
                />
              </div>
              <div className="form-group">
                <input
                  type="email"
                  onChange={this.onChangeEmail}
                  defaultValue={this.state.email}
                  className="form-control"
                  id="email"
                  placeholder="Email"
                />
              </div>

              <div className="form-group">
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

              {/*
                            Hidden Input Fields============================================================
                            */}

              <div className="form-group">
                <input
                  type="hidden"
                  defaultValue={this.state.createDate}
                  className="form-control"
                  id="createDate"
                  name="createDate"
                  placeholder="Create Date"
                  style={{ color: "#b7bfbd" }}
                />
              </div>

              <div className="form-group">
                <input
                  type="hidden"
                  defaultValue={this.state.createdBy}
                  className="form-control"
                  id="createdBy"
                  name="createBy"
                  placeholder="Created By"
                  style={{ color: "#b7bfbd" }}
                />
              </div>

              <div className="form-group">
                <input
                  type="hidden"
                  defaultValue={this.state.updateDate}
                  className="form-control"
                  id="updateDate"
                  name="updateDate"
                  placeholder="Update Date"
                  style={{ color: "#b7bfbd" }}
                />
              </div>

              <div className="form-group">
                <input
                  type="hidden"
                  defaultValue={this.state.updatedBy}
                  className="form-control"
                  id="updatedBy"
                  name="updateBy"
                  placeholder="Update By"
                  style={{ color: "#b7bfbd" }}
                />
              </div>

              <div className="form-group">
                <input
                  type="hidden"
                  defaultValue={this.state.id}
                  className="form-control"
                  id="id"
                  name="id"
                  value=""
                  placeholder="ID"
                  style={{ color: "#b7bfbd" }}
                />
              </div>

              {/*
                            End of Hidden Input Fields========================================================
                            */}

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
                &nbsp; Before submitting form, please check all your provided
                information again.
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
    );

    ///Update User Form////////////////////////////////////////////

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
                  &nbsp; Welcome, {cookieName}
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
            {this.state.isShow ? userForm : searchData}

            {/* Update user Search component ////////////////////////////////////////////////////////////*/}
          </div>
        </div>
      </div>
    );
  }
}

export default UpdateUser;
