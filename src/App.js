import React, { useState } from "react";
import AlertDiv from "./components/AlertDiv";

function App() {
  const [city, setCity] = useState("");
  const [errorm, setErrorm] = useState(null);

  const API_URL = `http://api.weatherapi.com/v1/current.json?key=66f30495523b4ddbb25173823242702&q=${city}&aqi=no`;

  async function getwetDeets() {
    try {
      const response = await fetch(API_URL);
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
      const data = await response.json();
      console.log(data);
    } catch (error) {
      setErrorm("Location not Found");
    }
  }

  function handleKeyPress(event) {
    if (event.key === "Enter") {
      getwetDeets(city);
      setCity("")
    }
  }

  function handleInputChange(event) {
    setCity(event.target.value);
  }
  function closeErr(){
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
      />
      {errorm != null ? <AlertDiv
        errms={errorm}
        closer = {closeErr}
      /> : null}

    </div>
  );
}

export default App;

