import React from "react";
import ViewButton from "./ViewButton";
import ActionButton from "./ActionButton";

function Card(props) {
    return (
        <div className="card text-center mt-3">
            <div className="card-header">
                <h2>{props.heading}</h2>
            </div>
            <div className="card-body">
                {props.children}
                <ViewButton heading={props.heading} link={props.link} />
                <ActionButton heading={props.heading} saveBookHandler={props.saveBookHandler} deleteBookHandler={props.deleteBookHandler} id={props.id} />
            </div>
        </div>
    );
}

export default Card;
