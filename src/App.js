// // src/Weather.js
// import React, { useState } from "react";
// import axios from "axios";

// const apiKey = "7cf33e7bf6554c1de341900bf5bf908e";
// const App = () => {
//   const [location, setLocation] = useState("");
//   const [weather, setWeather] = useState(null);
//   const [forecast, setForecast] = useState(null);

//   const fetchWeather = async (loc) => {
//     try {
//       const weatherResponse = await axios.get(
//         `http://api.openweathermap.org/data/2.5/weather?q=${loc}&units=metric&appid=${apiKey}`
//       );
//       setWeather(weatherResponse.data);

//       const forecastResponse = await axios.get(
//         `http://api.openweathermap.org/data/2.5/forecast?q=${loc}&units=metric&appid=${apiKey}`
//       );
//       setForecast(forecastResponse.data);
//     } catch (error) {
//       console.error("Error fetching weather data:", error);
//     }
//   };

//   const handleSearch = (e) => {
//     e.preventDefault();
//     fetchWeather(location);
//   };

//   return (
//     <div>
//       <form onSubmit={handleSearch}>
//         <input
//           type="text"
//           value={location}
//           onChange={(e) => setLocation(e.target.value)}
//           placeholder="Enter city or zip code"
//         />
//         <button type="submit">Search</button>
//       </form>

//       {weather && (
//         <div>
//           <h2>Current Weather in {weather.name}</h2>
//           <p>Temperature: {weather.main.temp}°C</p>
//           <p>Feels like: {weather.main.feels_like}°C</p>
//           <p>Weather: {weather.weather[0].description}</p>
//           <p>Humidity: {weather.main.humidity}%</p>
//           <p>Wind Speed: {weather.wind.speed} m/s</p>
//         </div>
//       )}

//       {forecast && (
//         <div>
//           <h2>Weather Forecast</h2>
//           {forecast.list.slice(0, 5).map((item) => (
//             <div key={item.dt}>
//               <p>Time: {new Date(item.dt * 1000).toLocaleTimeString()}</p>
//               <p>Temperature: {item.main.temp}°C</p>
//               <p>Weather: {item.weather[0].description}</p>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default App;

import React from "react";
import Search from "./Components/Search";
import Card from "./Components/Card";
import Forecast from "./Modules/Weather/Forecast";
import AirConditions from "./Modules/Weather/AirConditions";
import WeatherHome from "./Modules/Weather/WeatherHome";

const App = () => {
  return (
    <>
      <WeatherHome />
    </>
  );
};

export default App;
