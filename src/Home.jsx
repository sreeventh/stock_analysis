import React,{useState} from "react";
import {useLocation} from "react-router-dom"


export default function Home(props){
    const Location = useLocation();
    const [wdata, setWdata] = useState(null);
    const [city, setCity] = useState(null);

    if(Location.state!==null && wdata===null){
        setWdata(Location.state.data);
        setCity(Location.state.city)
    }

    // console.log(Location);
    console.log({wdata});
    return(
        <>
            <h1>{city ? city : "No Data"}</h1>
            {/* <p>{wdata ? wdata : "No json available"}</p> */}
        </>
    )
}