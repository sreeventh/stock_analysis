import React, { useState } from "react";
import { Route, Routes,useNavigate } from "react-router-dom";
import Home from "./Home";
import AlertDiv from "./components/AlertDiv";

function App() {
  const [city, setCity] = useState("");
  const [errorm, setErrorm] = useState(null);
  
  const Navigate = useNavigate();
  const API_URL = `http://api.weatherapi.com/v1/current.json?key=66f30495523b4ddbb25173823242702&q=${city}&aqi=no`;

  async function getwetDeets() {
    try {
      const response = await fetch(API_URL);
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
      const data = await response.json();
      // console.log(data);
      Navigate("/home",{state:{data:data , city:city}})
    
    } catch (error) {
      setErrorm("Location not Found");
    }
  }

  function handleInputChange(event) {
    setCity(event.target.value);
  }

  function closeErr() {
    setErrorm(null);
  }

  function handleKeyPress(event) {
    if (event.key === "Enter") {
      getwetDeets();
      setCity("");
    }
  }

  return (
    <div>
      <input
        type="text"
        onChange={handleInputChange}
        onKeyDown={handleKeyPress}
        value={city}
        placeholder="Enter City Name"
        style={{
          width: "300px",
          height: "60px",
          padding: "20px",
          marginBottom: "10px",
          border: "none",
          borderRadius: "5px",
          backgroundColor: "#121212", // Darker background color
          color: "#ffffff", // White text color
          outline: "none",
          fontSize: "1.5em",
        }}
        required
      />
      {errorm != null ? (
        <AlertDiv errms={errorm} closer={closeErr} />
      ) : null}

      {/* <Routes>
        <Route path="/home" element={<Home city={city} data={wdata}/>} />
      </Routes> */}

    </div>
  );
}

export default App;
