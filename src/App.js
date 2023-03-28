import React from "react";
import "./App.css";
import axios from "axios";
import Weather from "./components/Weather";

function App() {
  const API_KEY = "fd881d906a7e39a1f689ef8ade4b4ba4";
  const [weather, setWeather] = React.useState({});
  const [city, setCity] = React.useState("");

  const getCity = async () => {
    await axios("http://ip-api.com/json/").then((res) => {
      setCity(res.data.city);
    });
  };

  const getWeather = async () => {
    try {
      await axios(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
      ).then((res) => setWeather(res.data));
    } catch (error) {
      alert(error.message);
    }
  };

  React.useEffect(() => {
    getCity();
  }, []);

  React.useEffect(() => {
    if (city) {
      getWeather();
    }
  }, [city]);

  return (
    <div className="app">
      <Weather setCity={setCity} weather={weather} />
    </div>
  );
}

export default App;
