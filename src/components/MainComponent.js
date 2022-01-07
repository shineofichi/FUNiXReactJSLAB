import React, { Component } from 'react';
import Header from './HeaderComponent';
import Menu from './MenuComponent';
import Contact from './ContactComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import DishDetail from './DishDetailComponent';
import {Route, Routes, Navigate, useParams} from 'react-router-dom';
import {DISHES} from "../shared/dishes";
import {COMMENTS} from "../shared/comments";
import {PROMOTIONS} from "../shared/promotions";
import {LEADERS} from "../shared/leaders";

class Main extends Component {

  constructor(prop){
    super(prop);
    this.state = {
      dishes: DISHES,
      comments: COMMENTS,
      leaders: LEADERS,
      promotions: PROMOTIONS
    }
  }
  
  render() {
    const Homepage = () =>{
      return (
        <Home 
          dish={this.state.dishes.filter((dish) => dish.featured)[0]}
          promotion={this.state.promotions.filter((promo) => promo.featured)[0]}
          leader={this.state.leaders.filter((leader) => leader.featured)[0]}
        />
      );
    }
    const DishWithId=()=>{
      let params = useParams();
      return(
        <DishDetail dish={this.state.dishes.filter((dish)=>dish.id === parseInt(params.dishId,10))[0]}
          comments={this.state.comments.filter((cmt)=> cmt.dishId === parseInt(params.dishId,10))}
        />
      )
    }
    return (
      <div>
        <Header/>
        <Routes>
          <Route path="/home" element={<Homepage/>}/>
          <Route path="/contactme" element = {<Contact/>}/>
          <Route path='/menu' element={<Menu dishes = {this.state.dishes}/> } />
          <Route path="/menu/:dishId" element={<DishWithId/>}/>
          <Route path="*" element = {<Navigate to="/home"/>}/>
        </Routes>
        <Footer/>
      </div>
    );
  }
}

export default Main;