import React from "react";

function ViewButton(props) {
    const heading = props.heading;
    if (heading !== "Search") {
        return (
            <button type="button" className="btn btn-primary ml-3" onClick={(e) => props.saveBookHandler(props.id, e)}>Save Book</button>
        )
    } else {
        return (
            <span></span>
        );
    }
}

export default ViewButton;
