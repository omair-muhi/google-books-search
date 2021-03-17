import React from "react";
import ViewButton from "./ViewButton";
import SaveButton from "./SaveButton";

function Card(props) {
    return (
        <div className="card text-center mt-3">
            <div className="card-header">
                <h2>{props.heading}</h2>
            </div>
            <div className="card-body">
                {props.children}
                <ViewButton heading={props.heading} link={props.link} />
                <SaveButton heading={props.heading} link={props.link} />
            </div>
        </div>
    );
}

export default Card;
