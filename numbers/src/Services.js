import React, { useState } from 'react';
import axios from 'axios';
import './Services.css'
const Services = () => {
  const [Data, setData] = useState('');
  const [weatherData, setWeatherdata] = useState({
    data: {},
    error: false
  });

  const Search = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      const url = 'https://api.openweathermap.org/data/2.5/weather';
      const apikey = '49417ec931cec330bad6e026504925e7';
      
      axios.get(url, {
        params: {
          q: Data, 
          appid: apikey,
          units: 'metric' 
        }
      })
      .then((response) => {
        setWeatherdata({ data: response.data, error: false });
      })
      .catch((error) => {
        setWeatherdata({ data: {}, error: true });
      });
    }
  };

  return (
    <div>
        <h1>Weather App</h1>
      <input className='jkl'
        type="text"
        placeholder="Enter city"
        onChange={(e) => setData(e.target.value)}
        onKeyUp={Search}
      /><br></br><br></br>
     
      {weatherData.data.error ? (
        <p id='lof'>Error fetching weather data. Please try again.</p>
      ) : weatherData.data.main ? (
        <>
          <p id="pl"><span>Temperature:</span> {weatherData.data.main.temp}°C</p><br></br>
          <p id='ji'><span>Minimum-Temperature:</span> {weatherData.data.main.temp_min}°C</p><br></br>
          <p id='mb'><span>Maximum-Temperature:</span> {weatherData.data.main.temp_max}°C</p><br></br>
          <p id='ls'><span>Humidity:</span> {weatherData.data.main.humidity}%</p>
        </>
      ) : (
        <p id='ly'>Enter a city name to get the weather data.</p>
      )}
    </div>
  );
};

export default Services;

