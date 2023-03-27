import React from "react";
import "./App.css";
import axios from "axios";
import Weather from "./components/Weather";

function App() {
  const API_KEY = "fd881d906a7e39a1f689ef8ade4b4ba4";
  const [weather, setWeather] = React.useState({});

  React.useEffect(() => {
    axios("http://ip-api.com/json/").then((res) => console.log(res.data.city));
    axios(
      `https://api.openweathermap.org/data/2.5/weather?q=Kyiv&appid=${API_KEY}&units=metric`
    ).then((res) => setWeather(res.data));
  }, []);

  return <div className="app"><Weather weather={weather}/></div>;
}

export default App;
