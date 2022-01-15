import React, { Component } from "react";
import {
  BreadcrumbItem,
  Breadcrumb,
  Label,
  Col,
  Button,
  Row,
} from "reactstrap";
import { Link } from "react-router-dom";
import { Control, LocalForm, Errors } from "react-redux-form";

const required = (val) => val && val.length;
const maxLength = (len) => (val) => !val || val.length <= len;
const minLength = (len) => (val) => val && val.length >= len;
const validEmail = (val) =>
  /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2-4}$/i.test(val);
const isNumber = (val) => !isNaN(Number(val));

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
      touched: {
        firstname: false,
        lastname: false,
        tel: false,
        email: false,
      },
    };
    this.onSubmitButton = this.onSubmitButton.bind(this);
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
          <LocalForm onSubmit={this.onSubmitButton}>
            <Row className="form-group">
              <Label htmlFor="firstname" md={2}>
                First Name
              </Label>
              <Col md={10}>
                <Control.text
                  model=".firstname"
                  placeholder="Enter your first name"
                  id="firstname"
                  name="firstname"
                  className="form-control"
                  validators={{
                    required,
                    minLength: minLength(3),
                    maxLength: maxLength(15),
                  }}
                />
                <Errors
                  className="text-danger"
                  model=".firstname"
                  show="touched"
                  messages={{
                    required: "Required ",
                    minLength: "Must be greater than 2 character",
                    maxLength: "Must be 15 characters or less",
                  }}
                />
              </Col>
            </Row>
            <Row className="form-group">
              <Label htmlFor="lastname" md={2}>
                Last Name
              </Label>
              <Col md={10}>
                <Control.text
                  model=".lastname"
                  placeholder="Enter your last name"
                  id="lastname"
                  name="lastname"
                  className="form-control"
                  validators={{
                    required,
                    minLength: minLength(3),
                    maxLength: maxLength(15),
                  }}
                />
                <Errors
                  className="text-danger"
                  model=".lastname"
                  show="touched"
                  messages={{
                    required: "Required ",
                    minLength: "Must be greater than 2 character",
                    maxLength: "Must be 15 characters or less",
                  }}
                />
              </Col>
            </Row>
            <Row className="form-group">
              <Label htmlFor="tel" md={2}>
                Tel. Number
              </Label>
              <Col md={10}>
                <Control.text
                  model=".tel"
                  placeholder="Enter your telephone number"
                  id="tel"
                  name="tel"
                  className="form-control"
                  validators={{
                    required,
                    minLength: minLength(3),
                    maxLength: maxLength(15),
                    isNumber,
                  }}
                />
                <Errors
                  className="text-danger"
                  model=".firstname"
                  show="touched"
                  messages={{
                    required: "Required ",
                    minLength: "Must be greater than 2 character ",
                    maxLength: "Must be 15 characters or less ",
                    isNumber: "Must be a number ",
                  }}
                />
              </Col>
            </Row>
            <Row className="form-group">
              <Label htmlFor="email" md={2}>
                Email
              </Label>
              <Col md={10}>
                <Control.text
                  model=".email"
                  placeholder="Enter your email"
                  id="email"
                  name="email"
                  className="form-control"
                  validators={{
                    required,
                    validEmail,
                  }}
                />
                <Errors
                  className="text-danger"
                  model=".firstname"
                  show="touched"
                  messages={{
                    required: "Required ",
                    validEmail: "Invalid Email Address ",
                  }}
                />
              </Col>
            </Row>
            <Row className="form-group">
              <Col md={{ size: 6, offset: 2 }}>
                <div className="form-group">
                  <Label check>
                    <Control.checkbox
                      model=".agree"
                      type="checkbox"
                      name="agree"
                      className="form-check-input"
                    />{" "}
                    <strong>Can we contact you?</strong>
                  </Label>
                </div>
              </Col>
              <Col md={{ size: 3, offset: 1 }}>
                <Control.select model=".contactType" name="contactType">
                  <option>Telephone</option>
                  <option>Email</option>
                </Control.select>
              </Col>
            </Row>
            <Row className="form-group">
              <Label htmlFor="message" md={2}>
                Your feedback
              </Label>
              <Col md={10}>
                <Control.textarea
                  model=".message"
                  id="message"
                  name="message"
                  rows="8"
                  className="form-control"
                ></Control.textarea>
              </Col>
            </Row>
            <Row className="form-group">
              <Col md={{ size: 10, offset: 2 }}>
                <Button type="submit" color="primary">
                  Send to us
                </Button>
              </Col>
            </Row>
          </LocalForm>
        </div>
      </div>
    );
  }
}

export default Contact;
