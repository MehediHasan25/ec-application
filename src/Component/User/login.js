import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class Login extends Component {
    state = { 
        username: "",
        usernameValidation: false,
        password: "",
        passwordValidation: false
     }

     UNSAFE_componentWillMount() {
        document.title = 'Login';
    }


    onSubmit = e => {
        e.preventDefault();

        const {username, password} = this.state;

        console.log(username);
        console.log(password);
////////////////////// Axios part////////////////////////////////
        // const obj = {
        //     username,
        //     password
        // }

        // axios.post(login, obj)
        // .then(res => {
        //     // console.log(res);
        //     // console.log(res.headers['x-auth-token']);

        //     let token = res.headers['x-auth-token'];
        //     cookie.setCookie('x-auth-token', token, 120);
        //     cookie.setCookie('username', username, 120);
        //     if (res.data.userStatus === "new") {
        //         this.props.history.replace('/greetings');
        //     } else {
        //         this.props.history.replace('/dashboard');
        //     }
        // })
        // .catch(err => {
           
        //     if (err.response) {
        //         if (err.response.status === 400 || err.response.status === 401) {
        //             console.log(err.response.data);
        //             alert(err.response.data.message);
        //            //alert("Mehedi will occur error");
        //         }
        //         else if (err.response.status === 404) {
        //             alert("Not Found");
        //         }
        //         else if (err.response.status === 500) {
        //             alert(err.response.data.message);
        //         }
        //     }
        //     else if(err.request){
        //         console.log(err.request);
        //         alert("Error Connectiong");
        //     }
        //     else{
        //         console.log("Error", err.message);
        //         alert(err.message);
        //     }
        // });


////////////////////// Axios part////////////////////////////////

    } 

    onChangeUserName = e => {
        this.setState({ username: e.target.value, usernameValidation: false });
    }
    onChangePassword = e => {
        this.setState({ password: e.target.value, passwordValidation: false });
    }


    render() { 
        return ( 
            <div>
                <nav className="navbar fixed-top navbar-expand-md navbar-light shadow" style={{ backgroundColor: "#56c9ef" }}>
                    <div className="container">
                        <div className="navbar-header">
                            <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <Link className="navbar-brand" to="#" style={{ color: "#ffffff" }}>
                                <i className="fas fa-user-cog"></i>&nbsp;
                            User</Link>
                        </div>
                        <div id="navbar" className="collapse navbar-collapse">

                        </div>
                    </div>
                </nav>
                <br/> <br/>
                <br/><br/>
                <header id="header">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="panel panel-default">
                                    <div className="panel-body text-center pt-5">
                                        <h4 style={{ color: "#72726f" }}>
                                            <i className="fas fa-user-shield"></i>&nbsp;
                                        Account Login</h4>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>


                <section id="main">
                    <div className="container">
                        <div style={{
                            marginLeft: "auto",
                            marginRight: "auto"
                        }} className="col-sm-6 border border-light p-5">

                            <form className="text-center" onSubmit={this.onSubmit}>




                                <input type="text" id="defaultLoginFormNumber" onChange={this.onChangeUserName} className="form-control mb-4 border border-primary" placeholder="User ID" style={{ height: "50px" }}></input>


                                <input type="password" id="defaultLoginFormPassword" onChange={this.onChangePassword} className="form-control mb-4 border border-primary" placeholder="Password" style={{ height: "50px" }}></input>

                                <div className="d-flex align-items-center justify-content-between">
                                    <div>

                                        <div className="custom-control custom-checkbox">
                                            <input type="checkbox" className="custom-control-input" id="defaultLoginFormRemember"></input>
                                            <label className="custom-control-label" htmlFor="defaultLoginFormRemember">Remember me</label>
                                        </div>
                                    </div>
                                    <div>

                                        <Link to="" style={{ color: "#56c9ef" }}>Forgot password?</Link>
                                    </div>
                                </div>


                                <button className="btn btn-info btn-block my-4" type="submit" style={{ backgroundColor: "#56c9ef" }}>Login</button>



                            </form>
                        </div>
                    </div>
                </section>

            </div>
         );
    }
}
 
export default Login;