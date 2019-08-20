import React, { Component } from 'react';
import "../CSS/superSideBar.css";


class navSideBar extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
            <nav className="navbar fixed-top navbar-expand-md navbar-light shadow" style={{ backgroundColor: "#3ed6a6" }}>
                <div className="container">
                    <div className="navbar-header">
                        <button type="button" class="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <a className="navbar-brand" href="#" style={{ color: "#ffffff", textDecoration: "none" }}>
                            <i class="fas fa-user-cog"></i>&nbsp;
                            Admin</a>&nbsp;&nbsp;&nbsp;

                    </div>
                    <div class="collapse navbar-collapse" id="navbarCollapse">
                        <div class="navbar-nav">
                            <a href="#" class="nav-item nav-a" style={{ color: "#ffffff", textDecoration: "none" }}>
                                <i class="fas fa-home"></i>&nbsp;
                            Home</a>&nbsp;&nbsp;&nbsp;
                            <a href="#" class="nav-item nav-a" style={{ color: "#ffffff", textDecoration: "none" }}>
                                <i class="fas fa-user"></i>&nbsp;
                            Profile</a>&nbsp;&nbsp;&nbsp;
                            <a href="#" class="nav-item nav-a" style={{ color: "#ffffff", textDecoration: "none" }}>
                                <i className="fas fa-envelope-open-text"></i>&nbsp;
                            Messages</a>&nbsp;&nbsp;&nbsp;

                        </div>
                        <div class="navbar-nav ml-auto">
                            <a href="#" class="nav-item nav-a" style={{ color: "#ffffff", textDecoration: "none" }}>
                                <i class="fas fa-user"></i>&nbsp;
                            Welcome, Demo</a>&nbsp;&nbsp;&nbsp;
                            <a href="#" className="nav-item nav-a" style={{ color: "#ffffff", textDecoration: "none" }}>
                                <i class="fas fa-sign-out-alt"></i>&nbsp;
                            Logout</a>
                        </div>
                    </div>
                </div>
            </nav>




            <div className="sidebar shadow" style={{ backgroundColor: "#8f8e8e" }}>
                <a className="active" href="#home"><i class="fas fa-home"></i>&nbsp;&nbsp;Home</a>

                <a href="#news"><i class="fas fa-newspaper"></i>&nbsp;&nbsp;Create User </a>

                <a href="#contact"><i class="fas fa-id-badge"></i>&nbsp;&nbsp;Update User
                </a>
                <a href="#about"><i class="fas fa-eject"></i>&nbsp;&nbsp;All User
                </a>
                <a href="#" class="nav-item nav-a" style={{ color: "#ffffff" }} tabindex="-1">
                    <i className="fab fa-readme"></i>&nbsp;
                            Reports</a>

            </div>

            <div className="content">
                <div className="row ">




                </div>
            </div>
        </div>
         );
    }
}
 
export default navSideBar;