import React, { Component } from 'react';
import "../CSS/superSideBar.css";
import { Link } from "react-router-dom";
import cookie from "../Utils/cookie";
import axios from 'axios';
import { getUserByUsername } from './../Url/Admin';

class updateUserSearch  extends Component {
    state = { 
        username:''
     }

     onSubmit = e => {
         e.preventDefault();
        const {username} = this.state;
         const config = {
            headers: {
              "x-auth-token": cookie.getCookie("x-auth-token")
            }
          };
      
         

          axios.get(getUserByUsername+username, config)
          .then(res => {
              console.log(res);
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

     } 

     onChangeUsername = e => this.setState({username: e.target.value});

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
               {/* Update user Search component ////////////////////////////////////////////////////////////*/}
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
                  &nbsp;Search Username
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

               {/* Update user Search component ////////////////////////////////////////////////////////////*/}
              </div>
            </div>
          </div>
         );
    }
}
 
export default updateUserSearch;