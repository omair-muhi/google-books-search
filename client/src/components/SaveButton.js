import React from "react";

function ViewButton(props) {
    const heading = props.heading;
    if (heading !== "Search") {
        return (
            <a href={props.link} className="btn btn-primary ml-3" target="_blank" rel="noopener noreferrer">Save Book</a>
        )
    } else {
        return (
            <span></span>
        );
    }
}

export default ViewButton;
