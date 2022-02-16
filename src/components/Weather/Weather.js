import React, { useState } from 'react';
import TempToggler from '../TempToggler/TempToggler';
import WeatherInfo from './WeatherInfo/WeatherInfo';

/* Component that displays City name and the 3 day forecast */
const Weather = (props) => {
  const [isCelcius, setCelcius] = useState(false);
  const [city, setCity] = useState('');
  const [prevCity, setPrevCity] = useState('');
  const [forecast, setForecast] = useState([]);

  const handleChange = (e) => {
    setCity(e.target.value);
  };

  const getWeatherData = async (e) => {
    e.preventDefault();
    if (city !== '') {
      // GET request to Weather API for 3 day forecast
      const data = await fetch(
        `https://api.weatherapi.com/v1/forecast.json?key=69b4a3ba8d12406d945101924221302&q=${city}&days=3`
      )
        .then((res) => res.json())
        .then((data) => data)
        .catch((error) => {
          console.log(error);
          throw error;
        });
      if (data.error === undefined) {
        // No Errors
        setForecast(data.forecast.forecastday);
        setPrevCity(`${data.location.name}, ${data.location.country}`);
        setCity('');
        console.log(data);
        document.getElementById('city-error').style.visibility = 'hidden';
      } else {
        document.getElementById('city-error').style.visibility = 'visible';
      }
    }
  };

  return (
    <div className="weather">
      <div className="form-container">
        <form onSubmit={getWeatherData}>
          <input
            className="city-field"
            type="text"
            value={city}
            onChange={handleChange}
            placeholder="City"
            required
          />
        </form>
        <TempToggler isCelcius={isCelcius} setCelcius={setCelcius} />
      </div>
      <h3 id="city-error">Invalid City Name</h3>
      <h2>{prevCity}</h2>
      <div className="forecast-container">
        {forecast.length > 0 ? (
          forecast.map((cast, index) => (
            <WeatherInfo
              key={index}
              isCelcius={isCelcius}
              date={cast.date}
              tempCelcius={cast.day.avgtemp_c}
              tempFaren={cast.day.avgtemp_f}
              conditionText={cast.day.condition.text}
              icon={cast.day.condition.icon}
            />
          ))
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default Weather;
