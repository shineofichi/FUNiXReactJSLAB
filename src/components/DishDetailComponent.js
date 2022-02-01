import React from "react";
import {
  Card,
  CardBody,
  CardImg,
  CardText,
  CardTitle,
  BreadcrumbItem,
  Breadcrumb,
} from "reactstrap";
import { Link } from "react-router-dom";
import CommentForm from "./CommentFormComponent";
import { Loading } from "./LoadingComponent";
import { baseUrl } from "../shared/baseUrl";
import { FadeTransform, Fade, Stagger } from "react-animation-components";

function RenderComment({ comments, postComment, dishId }) {
  return (
    <div className="col-12 col-md-5 m-1">
      <h4>Comments</h4>
      <Stagger in>
        {comments.map((comment) => {
          return (
            <Fade in>
              <li key={comment.id}>
                <p>{comment.comment}</p>
                <p>
                  -- {comment.author} ,{" "}
                  {new Intl.DateTimeFormat("en-US", {
                    year: "numeric",
                    month: "short",
                    day: "2-digit",
                  }).format(new Date(Date.parse(comment.date)))}
                </p>
              </li>
            </Fade>
          );
        })}
      </Stagger>
      ; <CommentForm dishId={dishId} postComment={postComment} />
    </div>
  );
}

function RenderDetail(props) {
  if (props.isLoading) {
    return (
      <div className="container">
        <div className="row">
          <Loading />
        </div>
      </div>
    );
  } else if (props.errMess) {
    return (
      <div className="container">
        <div className="row">
          <h4>{props.errMess}</h4>
        </div>
      </div>
    );
  } else if (props.dish != null)
    return (
      <div className="col-12 col-md-5 m-1">
        <FadeTransform
          in
          transformProps={{
            exitTransform: "scale(0.5) translateY(-50%)",
          }}
        >
          <Card>
            <CardImg
              top
              src={baseUrl + props.dish.image}
              alt={props.dish.name}
            />
            <CardBody>
              <CardTitle>{props.dish.name}</CardTitle>
              <CardText>{props.dish.description}</CardText>
            </CardBody>
          </Card>
        </FadeTransform>
      </div>
    );
}

const DishDetail = (props) => {
  return (
    <div className="container">
      <div className="row">
        <Breadcrumb>
          <BreadcrumbItem>
            <Link to="/menu">Menu</Link>
          </BreadcrumbItem>
          <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
        </Breadcrumb>
      </div>
      <div className="row">
        <RenderDetail
          dish={props.dish}
          isLoading={props.isLoading}
          errMess={props.errMess}
        />
        <RenderComment
          comments={props.comments}
          addComment={props.addComment}
          dishId={props.dish.id}
          postComment={props.postComment}
        />
      </div>
    </div>
  );
};
export default DishDetail;
