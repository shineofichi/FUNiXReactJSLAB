import React, {Component} from "react";
import { Navbar, NavbarBrand, NavbarToggler, Collapse, NavItem, Nav } from 'reactstrap';
import {NavLink} from "react-router-dom"


class Header extends Component{
    constructor(prop){
        super(prop);
        this.state={
            isNavOpen: false,
        }
        this.onHandleToggle = this.onHandleToggle.bind(this)
    }
    onHandleToggle(){
        this.setState({
            isNavOpen : !this.state.isNavOpen
        })
    }
    render() {
        return(
            <React.Fragment>
                <Navbar dark expand="md" >
                    <div className = "container">
                        <NavbarToggler onClick={this.onHandleToggle}></NavbarToggler>
                        <NavbarBrand className="mr-auto" href = "/">
                            <img src="assets/images/logo.png" height="30" width="41" alt="Funix"/>
                        </NavbarBrand>
                        <Collapse isOpen={this.state.isNavOpen} navbar>
                            <Nav navbar>
                                <NavItem>
                                    <NavLink className="nav-link" to="/home"><span className="fa fa-home fa-lg"></span>Home</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/aboutme"><span className="fa fa-info fa-lg"></span>About me</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/menu"><span className="fa fa-list fa-lg"></span>Menu</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/contactme"><span className="fa fa-address-card fa-lg"></span>Contact me</NavLink>
                                </NavItem>
                            </Nav>
                        </Collapse>
                    </div>
                </Navbar>
                <div className="jumbotron">
                    <div className="container">
                        <div className="row row-header">
                            <div className="col-12 col-sm-6">
                                <h1>Anhtt Shoppe</h1>
                                <p>Bài tập xây dựng ứng dụng bằng React trong khóa học Front-end nâng cao của FUNiX.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}
export default Header;