import React from "react";
import { Card, CardBody, CardImg, CardText, CardTitle } from "reactstrap";

// class DishDetail extends Component{

//     render(){
//         const dish = this.props.dish;
//         if (dish != null){
//             return (
//                 <div className="container">
//                     <div className="row">
//                         <div className="col-12 col-md-5 m-1">
//                             <Card>
//                                 <CardImg width="100%" object src={dish.image} alt={dish.name}/>
//                                 <CardBody>
//                                     <CardTitle>{dish.name}</CardTitle>
//                                     <CardText>{dish.description}</CardText>
//                                 </CardBody>
//                             </Card>
//                         </div>
//                         {this.renderComment(dish)}
//                     </div>
//                 </div>
//             );
//         }
//         else{
//            return(
//                <div></div>
//            );
//         }
//     }
//     renderComment(){
//         const comment = this.props.dish.comments.map((cmt) => {
//                 return(
//                     <div key = {cmt.id}>
//                         <p>{cmt.comment}</p>
//                         <p>---{cmt.author}, {new Intl.DateTimeFormat('en-US',{ year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(cmt.date)))}</p>
//                     </div>
//                 )
//             }
//         )
//         return(
//             <div className="col-12 col-md-5 m-1">
//                 <h4>Comments</h4>
//                 {comment}
//             </div>
//         )
//     }
// }
function RenderComment({comments}){
    const comment = comments.map((cmt) => {
            return(
                <div key = {cmt.id}>
                    <p>{cmt.comment}</p>
                    <p>---{cmt.author}, {new Intl.DateTimeFormat('en-US',{ year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(cmt.date)))}</p>
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

function RenderDetail ({dish}){
    return(
        <div className="col-12 col-md-5 m-1">
            <Card>
                <CardImg width="100%" object src={dish.image} alt={dish.name}/>
                <CardBody>
                    <CardTitle>{dish.name}</CardTitle>
                    <CardText>{dish.description}</CardText>
                </CardBody>
            </Card>
        </div>
    )
}

const DishDetail = (props) => {
    const dish = props.dish;
    if (dish != null){
        return(
            <div className="container">
                <div className="row">
                    <RenderDetail dish = {dish} />
                    <RenderComment dish ={dish} />
                </div>
            </div>
        )
    }
    else {
        return(
            <div></div>
        )
    }
}
export default DishDetail;