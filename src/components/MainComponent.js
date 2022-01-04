import React, { Component } from 'react';

import { Navbar, NavbarBrand } from 'reactstrap';
import Menu from './components/MenuComponent';
import {DISHES} from "./shared/dishes";

class Main extends Component {

  constructor(prop){
    super(prop);
    this.state = {
      dishes : DISHES,
    }
  }
  render() {
    return (
      <div>
        <Navbar dark color = "primary">
      <div className = "container">
        <NavbarBrand href = "/">
          Anhtt
        </NavbarBrand>
      </div>
    </Navbar>
    <Menu dishes = {this.state.dishes}/>
      </div>
    );
  }
}

export default Main;