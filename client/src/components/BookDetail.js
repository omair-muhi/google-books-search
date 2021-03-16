import React from "react";

function BookDetail(props) {
  return (
    <div className="text-center">
      <img alt={props.title} className="img-fluid" src={props.thumbnail} style={{ margin: "0 auto" }} />
      <h3>Title: {props.title}</h3>
      <h3>Author: {props.author}</h3>
      <p className="lead">{props.description}</p>
    </div>
  );
}

export default BookDetail;
