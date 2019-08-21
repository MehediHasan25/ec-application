import React, { Component } from "react";
import axios from "axios";
import { getallnormaluser } from "./../Url/Admin";
import cookie from "../Utils/cookie";
import "../CSS/table.css";
import { Link } from "react-router-dom";

class GetAll extends Component {
  state = {
    data: []
  };

  componentDidMount() {
    const config = {
      headers: {
        "x-auth-token": cookie.getCookie("x-auth-token")
      }
    };
    axios
      .get(getallnormaluser, config)
      .then(res => {
        this.setState({ data: res.data });
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
  }

  renderTableData() {
    return this.state.data.map((data, index) => {
      const {
        _id,
        username,
        userType,
        userStatus,
        mobile,
        email,
        createDate,
        createdBy,
        updatedBy,
        updateDate
      } = data; //destructuring
      return (
        <tr key={_id}>
          <td>{username}</td>
          <td>{mobile}</td>
          <td>{email}</td>
          <td>{userType}</td>
          <td>{userStatus}</td>
          <td>{createDate}</td>
          <td>{createdBy}</td>
          <td>{updateDate}</td>
          <td>{updatedBy}</td>
        </tr>
      );
    });
  }

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
        <div className="content">
          <div className="row ">
            {/* Update user Search component ////////////////////////////////////////////////////////////*/}

            <h1>All User</h1>
            <table id="data">
              <thead>
                <tr>
                  <th>Username</th>
                  <th>mobile</th>
                  <th>email</th>
                  <th>userType</th>
                  <th>userStatus</th>
                  <th>createDate</th>
                  <th>createdBy</th>
                  <th>updateDate</th>
                  <th>updatedBy</th>
                </tr>
              </thead>
              <tbody>{this.renderTableData()}</tbody>
            </table>

            {/* Update user Search component ////////////////////////////////////////////////////////////*/}
          </div>
        </div>
      </div>
    );
  }
}

export default GetAll;
