import React from "react";


export default function Home(props){
    console.log(props.data);
    return(
        <>
            <h1>{props.city}</h1>
        </>
    )
}