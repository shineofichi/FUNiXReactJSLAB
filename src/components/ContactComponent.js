import React, { Component } from "react";
import {
  BreadcrumbItem,
  Breadcrumb,
  Form,
  FormGroup,
  Label,
  Input,
  Col,
  Button,
} from "reactstrap";
import { Link } from "react-router-dom";

class Contact extends Component {
  constructor(prop) {
    super(prop);
    this.state = {
      firstname: "",
      lastname: "",
      tel: "",
      email: "",
      contactType: "Telephone",
      agree: false,
      message: "",
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.onSubmitButton = this.onSubmitButton.bind(this);
  }
  handleInputChange(event) {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;
    this.setState({
      [name]: value,
    });
  }
  onSubmitButton(event) {
    console.log(this.state);
    event.preventDefault();
  }
  render() {
    return (
      <div className="container">
        <div className="row">
          <Breadcrumb>
            <BreadcrumbItem>
              <Link to="/home">Home</Link>
            </BreadcrumbItem>
            <BreadcrumbItem active>Contact</BreadcrumbItem>
          </Breadcrumb>
        </div>
        <div className="row row-content">
          <div className="col-12">
            <h3>Location Information</h3>
          </div>
          <div className="col-12 col-sm-4 offset-sm-1">
            <h5>My Address</h5>
            <address>
              Leopalace
              <br />
              Shiga, Hikone
              <br />
              JAPAN
              <br />
              <i className="fa fa-phone fa-lg"></i>: +84386960463
              <br />
              <i className="fa fa-fax fa-lg"></i>: +84 386 960 463
              <br />
              <i className="fa fa-envelope fa-lg"></i>:{" "}
              <a href="mailto:anhttFX13476@funix.edu.vn">
                anhttFX13476@funix.edu.vn
              </a>
            </address>
          </div>
          <div className="col-12 col-sm-6 offset-sm-1">
            <h5>Map of our Location</h5>
          </div>
          <div className="col-12 col-sm-11 offset-sm-1">
            <div className="btn-group" role="group">
              <a
                role="button"
                className="btn btn-primary"
                href="tel:+85212345678"
              >
                <i className="fa fa-phone"></i> Call
              </a>
              <a
                role="button"
                className="btn btn-info"
                href="skype: tuananh_580"
              >
                <i className="fa fa-skype"></i> Skype
              </a>
              <a
                role="button"
                className="btn btn-success"
                href="mailto:confusion@food.net"
              >
                <i className="fa fa-envelope-o"></i> Email
              </a>
            </div>
          </div>
        </div>
        <div className="row">
          <h3>Send us your feedback</h3>
        </div>
        <div>
          <Form onSubmit={this.onSubmitButton}>
            <FormGroup row>
              <Label htmlFor="firstname" md={2}>
                First Name
              </Label>
              <Col md={10}>
                <Input
                  type="text"
                  placeholder="Enter your first name"
                  id="firstname"
                  name="firstname"
                  onChange={this.handleInputChange}
                ></Input>
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label htmlFor="lastname" md={2}>
                Last Name
              </Label>
              <Col md={10}>
                <Input
                  type="text"
                  placeholder="Enter your last name"
                  id="lastname"
                  name="lastname"
                  onChange={this.handleInputChange}
                ></Input>
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label htmlFor="tel" md={2}>
                Tel. Number
              </Label>
              <Col md={10}>
                <Input
                  type="tel"
                  placeholder="Enter your telephone number"
                  id="tel"
                  name="tel"
                  onChange={this.handleInputChange}
                ></Input>
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label htmlFor="mail" md={2}>
                Email
              </Label>
              <Col md={10}>
                <Input
                  type="email"
                  placeholder="Enter your email"
                  id="email"
                  name="email"
                  onChange={this.handleInputChange}
                ></Input>
              </Col>
            </FormGroup>
            <FormGroup row>
              <Col md={{ size: 6, offset: 2 }}>
                <FormGroup check>
                  <Label check>
                    <Input
                      type="checkbox"
                      name="agree"
                      checked={this.state.agree}
                      onChange={this.handleInputChange}
                    ></Input>{" "}
                    <strong>Can we contact you?</strong>
                  </Label>
                </FormGroup>
              </Col>
              <Col md={{ size: 3, offset: 1 }}>
                <Input
                  type="select"
                  name="contactType"
                  value={this.state.contactType}
                  onChange={this.handleInputChange}
                >
                  <option>Telephone</option>
                  <option>Email</option>
                </Input>
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label htmlFor="message" md={2}>
                Your feedback
              </Label>
              <Col md={10}>
                <Input
                  type="textarea"
                  id="message"
                  name="message"
                  rows="8"
                  value={this.state.message}
                  onChange={this.handleInputChange}
                ></Input>
              </Col>
            </FormGroup>
            <FormGroup row>
              <Col md={{ size: 10, offset: 2 }}>
                <Button type="submit" color="primary">
                  Send to us
                </Button>
              </Col>
            </FormGroup>
          </Form>
        </div>
      </div>
    );
  }
}

export default Contact;
