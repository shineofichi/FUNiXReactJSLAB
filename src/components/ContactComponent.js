import React from 'react';
import { BreadcrumbItem, Breadcrumb } from "reactstrap";
import {Link} from "react-router-dom";


function Contact(props) {
    return(
        <div className="container">
            <div className="row">
                <Breadcrumb>
                    <BreadcrumbItem>
                        <Link to="/home">Home</Link>
                    </BreadcrumbItem>
                    <BreadcrumbItem active>
                        Contact
                    </BreadcrumbItem>
                </Breadcrumb>
            </div>
            <div className="row row-content">
                <div className="col-12">
                <h3>Location Information</h3>
                </div>
                <div className="col-12 col-sm-4 offset-sm-1">
                <h5>My Address</h5>
                    <address>
		              Leopalace<br />
		              Shiga, Hikone<br />
		              JAPAN<br />
		              <i className="fa fa-phone fa-lg"></i>: +84386960463<br />
		              <i className="fa fa-fax fa-lg"></i>: +84 386 960 463<br />
		              <i className="fa fa-envelope fa-lg"></i>: <a href="mailto:anhttFX13476@funix.edu.vn">
                      anhttFX13476@funix.edu.vn</a>
                    </address>
                </div>
                <div className="col-12 col-sm-6 offset-sm-1">
                    <h5>Map of our Location</h5>
                </div>
                <div className="col-12 col-sm-11 offset-sm-1">
                    <div className="btn-group" role="group">
                        <a role="button" className="btn btn-primary" href="tel:+85212345678"><i className="fa fa-phone"></i> Call</a>
                        <a role="button" className="btn btn-info" href='skype: tuananh_580'><i className="fa fa-skype"></i> Skype</a>
                        <a role="button" className="btn btn-success" href="mailto:confusion@food.net"><i className="fa fa-envelope-o"></i> Email</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;