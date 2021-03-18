import React from "react";

function ActionButton(props) {
    const heading = props.heading;
    if (heading !== "Search") {
        if (props.saveBookHandler !== undefined) {
            return (
                <button type="button" className="btn btn-primary ml-3" onClick={(e) => props.saveBookHandler(props.id, e)}>Save Book</button>
            )
        } else if (props.deleteBookHandler !== undefined) {
            return (
                <button type="button" className="btn btn-primary ml-3" onClick={(e) => props.deleteBookHandler(props.id, e)}>Delete Book</button>
            )
        }
    } else {
        return (
            <span></span>
        );
    }
}

export default ActionButton;
