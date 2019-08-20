import React, { Component } from 'react';
import {Link} from "react-router-dom";

class superLogin extends Component {
    state = { 
        username:'',
        password:''
     }

     UNSAFE_componentWillMount() {
        document.title = 'Admin Login';
    }


    onSubmit = e => {
        e.preventDefault();

        const {username, password} = this.state;

        console.log(username);
        console.log(password);
        this.props.history.replace('/create-user');
    }


    onChangeSuperUserName = e => {
        this.setState({ username: e.target.value, usernameValidation: false });
    }
    onChangeSuperPassword = e => {
        this.setState({ password: e.target.value, passwordValidation: false });
    }

    render() { 
        return (
            <div>
                <nav className="navbar fixed-top navbar-expand-md navbar-light shadow" style={{ backgroundColor: "#3ed6a6" }}>
                    <div className="container">
                        <div className="navbar-header">
                            <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <Link className="navbar-brand" to="#" style={{ color: "#ffffff" }}>
                                <i className="fas fa-user-cog"></i>&nbsp;
                                AdminStrap</Link>
                        </div>
                        <div id="navbar" className="collapse navbar-collapse">

                        </div>
                    </div>
                </nav>

              
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




                                <input type="text" id="defaultLoginFormNumber" onChange={this.onChangeSuperUserName} className="form-control mb-4 border border-primary" placeholder="User ID" style={{ height: "50px" }}></input>


                                <input type="password" id="defaultLoginFormPassword" onChange={this.onChangeSuperPassword} className="form-control mb-4 border border-primary" placeholder="Password" style={{ height: "50px" }}></input>

                                <div className="d-flex align-items-center justify-content-between">
                                    <div>

                                        <div className="custom-control custom-checkbox">
                                            <input type="checkbox" className="custom-control-input" id="defaultLoginFormRemember"></input>
                                            <label className="custom-control-label" htmlFor="defaultLoginFormRemember">Remember me</label>
                                        </div>
                                    </div>
                                    <div>

                                        <Link to="" style={{ color: "#3ed6a6" }}>Forgot password?</Link>
                                    </div>
                                </div>


                                <button className="btn btn-info btn-block my-4" type="submit" style={{ backgroundColor: "#3ed6a6" }}>Login</button>



                            </form>
                        </div>
                    </div>
                </section>





            </div>
          );
    }
}
 
export default superLogin;