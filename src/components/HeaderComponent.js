import React, {Component} from "react";
import { Navbar, NavbarBrand } from 'reactstrap';


class Header extends Component{
    render() {
        return(
            <React.Fragment>
                <Navbar dark >
                    <div className = "container">
                    <NavbarBrand href = "/">
                        Anhtt Shoppe
                    </NavbarBrand>
                    </div>
                </Navbar>
                <div className="jumbotron">
                    <div className="container">
                        <div className="row">
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