import React, { Component } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarToggler,
  Collapse,
  NavItem,
  Nav,
  Modal,
  ModalHeader,
  Button,
  ModalBody,
  Form,
  Input,
  FormGroup,
  Label,
} from "reactstrap";
import { NavLink } from "react-router-dom";

class Header extends Component {
  constructor(prop) {
    super(prop);
    this.state = {
      isNavOpen: false,
      isModalOpen: false,
    };
    this.onHandleToggle = this.onHandleToggle.bind(this);
    this.onToggleModal = this.onToggleModal.bind(this);
    this.onSubmitLogin = this.onSubmitLogin.bind(this);
  }
  onHandleToggle() {
    this.setState({
      isNavOpen: !this.state.isNavOpen,
    });
  }
  onToggleModal() {
    this.setState({
      isModalOpen: !this.state.isModalOpen,
    });
  }
  onSubmitLogin(event) {
    event.preventDefault();
    this.onToggleModal();
    console.log(this.id.value);
    console.log(this.password.value);
    console.log(this.remember.checked);
  }
  render() {
    return (
      <React.Fragment>
        <Navbar dark expand="md">
          <div className="container">
            <NavbarToggler onClick={this.onHandleToggle}></NavbarToggler>
            <NavbarBrand className="mr-auto" href="/">
              <img
                src="assets/images/logo.png"
                height="30"
                width="41"
                alt="Funix"
              />
            </NavbarBrand>
            <Collapse isOpen={this.state.isNavOpen} navbar>
              <Nav navbar>
                <NavItem>
                  <NavLink className="nav-link" to="/home">
                    <span className="fa fa-home fa-lg"></span>Home
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="nav-link" to="/aboutme">
                    <span className="fa fa-info fa-lg"></span>About me
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="nav-link" to="/menu">
                    <span className="fa fa-list fa-lg"></span>Menu
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="nav-link" to="/contactme">
                    <span className="fa fa-address-card fa-lg"></span>Contact me
                  </NavLink>
                </NavItem>
              </Nav>
              <Nav className="ml-auto" navbar>
                <NavItem>
                  <Button onClick={this.onToggleModal}>
                    <span className="fa fa-sign-in fa-lg"></span>Login
                  </Button>
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
                <p>
                  Bài tập xây dựng ứng dụng bằng React trong khóa học Front-end
                  nâng cao của FUNiX.
                </p>
              </div>
            </div>
          </div>
        </div>
        <Modal isOpen={this.state.isModalOpen} toggle={this.onToggleModal}>
          <ModalHeader toggle={this.onToggleModal}>
            <span className="fa fa-sign-in fa-lg"></span>Login
          </ModalHeader>
          <ModalBody>
            <Form onSubmit={this.onSubmitLogin}>
              <FormGroup row>
                <Label htmlFor="id">User ID</Label>
                <Input
                  type="text"
                  id="id"
                  name="id"
                  innerRef={(input) => (this.id = input)}
                ></Input>
              </FormGroup>
              <FormGroup row>
                <Label htmlFor="password">Password</Label>
                <Input
                  type="password"
                  id="password"
                  name="password"
                  innerRef={(input) => (this.password = input)}
                ></Input>
              </FormGroup>
              <FormGroup check>
                <Label check>
                  <Input
                    type="checkbox"
                    id="remember"
                    name="remember"
                    innerRef={(input) => (this.remember = input)}
                  ></Input>
                  Remeber to next time.
                </Label>
              </FormGroup>
              <FormGroup>
                <Button type="submit" value="submit" color="primary">
                  Log In
                </Button>
              </FormGroup>
            </Form>
          </ModalBody>
        </Modal>
      </React.Fragment>
    );
  }
}
export default Header;
