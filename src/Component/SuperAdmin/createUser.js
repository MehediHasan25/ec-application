import React, { Component } from 'react';
//import NavSideBar from "../ReusableComponent/NavSideBar";

class createUser extends Component {
    state = { 
        username:'',
        usernameValidation: false,
        password:"",
        passwordValidation: false,
        email: "",
        emailValidation: false,
        mobile:'',
        mobileValidation: false,
        userStatus:"",
        userStatusValidation:"",
        userType:"",
        userTypeValidation: false
   }

   onChangeUsername = e => this.setState({ username: e.target.value });
   onChangePassword = e => this.setState({password: e.target.value});
   onChangeEmail = e => this.setState({ email: e.target.value});
   onChangeMobile = e => this.setState({mobile : e.target.value});
   onChangeUserStatus = e => this.setState({ userStatus: e.target.value});
   onChangeUserType = e => this.setState({ userType: e.target.value});


   render() { 
        return ( 
            <div>
                {/* <div>
                <NavSideBar/>
                </div> */}
            <div className="container" style={{ backgroundColor: "#f7f7f7" }}>
            <div className="d-flex align-items-center card border-light mb-3" style={{ backgroundColor: "#f7f7f7" }}>
                <div className="col-sm-5 shadow p-3 mb-2"
                    style={{ backgroundColor: "#8f8e8e", color: "#fff", textAlign: "center", marginTop: "15px" }}>
                    <i class="fas fa-certificate"></i>&nbsp;Create User
                                    </div>
                <div className="card-body" >
                    <form>



                        <div className="form-group">

                            <input type="text" className="form-control" id="name" placeholder="User Name" style={{ color: "#b7bfbd" }}></input>
                        </div>


                        <div className="form-group">

                            <input type="password" className="form-control" id="pass" placeholder="password"></input>
                        </div>

                        <div className="form-group">

                            <input type="text" className="form-control" id="mobile" placeholder="Mobile Number" style={{ color: "#b7bfbd" }}></input>
                        </div>
                        <div className="form-group">

                            <input type="email" className="form-control" id="email" placeholder="Email" style={{ color: "#b7bfbd" }}></input>
                        </div>

                        <div className="form-group">


                            <select className="custom-select">
                                <option value="">User Status</option>
                                <option value="">Active</option>
                                <option value="1">Inactive</option>
                                <option value="2">Archive</option>

                            </select>


                        </div>

                        <div className="form-group">


                            <select className="custom-select">
                                <option value="">User Type</option>
                                <option value="">Admin</option>
                                <option value="1">Normal</option>


                            </select>


                        </div>




                        <br />

                        {/* <div className="form-group">
                            <label htmlFor="exampleInputFile">Provide NID Image</label>
                            <input type="file" className="form-control-file" id="exampleInputFile" aria-describedby="fileHelp"></input>
                            <br />

                        </div> */}
                        <small id="fileHelp" className="form-text text-muted" >
                            <i style={{ color: "#3ed6a6" }} className="fas fa-exclamation-circle"></i>&nbsp;
                                            Before submitting form, please check all your provided information again.
                        </small>
                        <br />


                        <button type="submit" className="btn btn-block shadow" style={{ backgroundColor: "#3ed6a6", color: "#fff" }}>
                            <i class="fas fa-check-circle"></i>&nbsp;
                            Submit</button>
                        <br />
                    </form>
                </div>
            </div>
        </div>
        </div>
         );
    }
}
 
export default createUser;