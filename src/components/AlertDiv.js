import React from "react";

export default function AlertDiv(props) {
    return (
        <div>
            <p>{props.errms}</p>
            <button onClick={props.closer}>Close</button>
        </div>
    )
}