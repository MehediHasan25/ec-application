import React, { Component } from "react";
import axios from 'axios';
import { updateuser } from './../Url/Admin';
import cookie from "../Utils/cookie";

class UpdateUserForm extends Component {
  state = {
    _id: "",
    username: "",
    userType: "",
    userStatus: "",
    updatedBy: "",
    updateDate: "",
    mobile: "",
    email: "",
    createdBy: "",
    createDate: ""
  };

  UNSAFE_componentWillReceiveProps(newProps) {
    this.setState({
      _id: newProps.id,
      username: newProps.name,
      userType: newProps.userType,
      userStatus: newProps.userStatus,
      updatedBy: newProps.updatedBy,
      updateDate: newProps.updateDate,
      mobile: newProps.mobile,
      email: newProps.email,
      createdBy: newProps.createdBy,
      createDate: newProps.createDate
    });
  }

  onSubmit = e => {
      e.preventDefault();
      const {_id, username,userType,userStatus,updatedBy,updateDate,mobile,email,createdBy,createDate}= this.state;

      const config = {
        headers: {
          "x-auth-token": cookie.getCookie("x-auth-token")
        }
      };

      const obj ={
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
      }

      axios.put(updateuser, obj, config)
      .then(res=>{
          console.log(res);
          alert("successful");
        
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
  onChangeUserType = e => this.setState({ userType: e.target.value });
  onChangeUserStatus = e => this.setState({ userStatus: e.target.value });
  onChangeEmail = e => this.setState({ email: e.target.value });
  onChangemobile = e => this.setState({ mobile: e.target.value });

  render() {
    return (
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
            <form onSubmit={this.onSubmit}>
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
  }
}

export default UpdateUserForm;
