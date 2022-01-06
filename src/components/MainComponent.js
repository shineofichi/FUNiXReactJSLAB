import React, { Component } from 'react';
import Header from './HeaderComponent';
import Menu from './MenuComponent';
import {DISHES} from "../shared/dishes";
import DishDetail from './DishDetailComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import {Route, Routes, Navigate} from 'react-router-dom';

class Main extends Component {

  constructor(prop){
    super(prop);
    this.state = {
      dishes : DISHES,
      selectedDish : null,
    }
  }
  onDishSelect(dishId){
    this.setState({selectedDish: dishId});
  }
  render() {
    // const Homepage = () =>{
    //   return (
    //   <Home/>
    //   );
    // }

    return (
      <div>
        <Header/>
        <Routes>
          <Route path="/home" element={<Home/>}/>
          <Route exact path='/menu' element={<Menu dishes = {this.state.dishes}/> } />
          <Route path="*" element = {<Navigate to="/home"/>}/>
        </Routes>
        {/* <Menu dishes = {this.state.dishes} onClick={(dishId) => this.onDishSelect(dishId)} />
        <DishDetail dish = {this.state.dishes.filter((dish)=>dish.id === this.state.selectedDish)[0]}/> */}
        <Footer/>
      </div>
    );
  }
}

export default Main;