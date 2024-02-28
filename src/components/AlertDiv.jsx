import React from "react";

export default function AlertDiv(props) {
    const divStyle = {
        backgroundColor: "#c62828", // Dark red background color
        color: "#ffffff", // White text color
        padding: "10px",
        marginTop: "10px",
        borderRadius: "5px"
    };

    const buttonStyle = {
        backgroundColor: "transparent",
        border: "none",
        color: "#ffffff", // White text color
        cursor: "pointer"
    };

    return (
        <div style={divStyle}>
            <p>{props.errms}</p>
            <button style={buttonStyle} onClick={props.closer}>X</button>
        </div>
    );
}
