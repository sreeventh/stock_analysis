import React, { useState } from "react";
import AlertDiv from "./components/AlertDiv";
import { Route, Router, Routes } from "react-router-dom";
import Home from "./Home";




function App() {
  const [city, setCity] = useState("");
  const [errorm, setErrorm] = useState(null);
  const [wdata, setWdata] = useState(null);

  const API_URL = `http://api.weatherapi.com/v1/current.json?key=66f30495523b4ddbb25173823242702&q=${city}&aqi=no`;

  async function getwetDeets() {
    try {
      const response = await fetch(API_URL);
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
      const data = await response.json();
      console.log(data);
      setWdata(data);
    } catch (error) {
      setErrorm("Location not Found");
    }
  }

  function handleKeyPress(event) {
    if (event.key === "Enter") {
      getwetDeets();
      setCity("")

    }
  }

  function handleInputChange(event) {
    setCity(event.target.value);
  }
  function closeErr() {
    setErrorm(null);
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
        />
        {errorm != null ? <AlertDiv
          errms={errorm}
          closer={closeErr}
        /> : null}

      </div>
  );
}

export default App;

