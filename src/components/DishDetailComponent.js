import React, { Component } from "react";
import { Card, CardBody, CardImg, CardText, CardTitle } from "reactstrap";

class DishDetail extends Component{

    render(){
        const dish = this.props.dish;
        if (dish != null){
            return (
                <div className="row">
                    <div className="col-12 col-md-5 m-1">
                        <Card>
                            <CardImg width="100%" object src={dish.image} alt={dish.name}/>
                            <CardBody>
                                <CardTitle>{dish.name}</CardTitle>
                                <CardText>{dish.description}</CardText>
                            </CardBody>
                        </Card>
                    </div>
                    {this.renderComment(dish)}
                </div>
            );
        }
        else{
           return(
               <div></div>
           );
        }
    }
    renderComment(){
        const comment = this.props.dish.comments.map((cmt) => {
                return(
                    <div key = {cmt.id}>
                        <CardText>
                        <p>{cmt.comment}</p>
                        <p>---{cmt.author}</p>
                        <p>{cmt.date}</p>
                        </CardText>
                    </div>
                )
            }
        )
        return(
            <div className="col-12 col-md-5 m-1">
                <h4>Comments</h4>
                {comment}
            </div>
        )
    }
}
export default DishDetail;