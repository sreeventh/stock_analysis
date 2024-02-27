import React, { useState } from "react";

function App() {
  const [city, setCity] = useState("");

  const API_URL = `http://api.weatherapi.com/v1/current.json?key=66f30495523b4ddbb25173823242702&q=${city}&aqi=no`;

  async function getwetDeets() {
    try {
      const response = await fetch(API_URL);
      const data = await response.json();
      console.log(data);
    } catch (error) {
      alert("An error occurred while fetching weather data. Please try again later.");
      console.error("Error fetching weather data:", error);
    }
  }

  function handleKeyPress(event) {
    if (event.key === "Enter") {
      getwetDeets(city);
    }
  }

  function handleInputChange(event) {
    setCity(event.target.value);
  }

  return (
    <>
      <input 
        type="text" 
        onChange={handleInputChange} 
        onKeyDown={handleKeyPress} 
        value={city} 
        placeholder="Enter City Name" 
      />
    </>
  );
}

export default App;
