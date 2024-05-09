import React, { useState, useEffect } from 'react';
import weatherServices from '../services/weather.js';
const api_key = import.meta.env.VITE_SOME_KEY;

const List = ({ newName }) => {
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [weatherData, setWeatherData] = useState(null);
  const [selectedAutomatically, setSelectedAutomatically] = useState(false);

  useEffect(() => {
    if (selectedCountry) {
      weatherServices.getWeather(selectedCountry.capital, api_key)
        .then(res => {
          setWeatherData(res.data);
        })
        .catch(error => {
          console.error('Error fetching weather data:', error);
          setWeatherData(null);
        });
    }
  }, [selectedCountry]);

  useEffect(() => {
    if (newName.length === 1 && !selectedAutomatically) {
      setSelectedCountry(newName[0]);
      setSelectedAutomatically(true);

    }else if (newName.length === 0) {
      setSelectedCountry(null);
    }
  }, [newName, selectedAutomatically]);

  useEffect(() => {
    setSelectedAutomatically(false);
  }, [newName]);


  if (newName.length > 10) {
    return <div>Too many matches, specify another filter</div>;
  }

  if (selectedCountry) {
    const { name, capital, area, languages, flags } = selectedCountry;
    const idiomas = Object.values(languages);

    return (
      <div>
        <h1>Pais: {name.common}</h1>
        <p>Capital: {capital}</p>
        <p>Area: {area}</p>
        <p>Idiomas:</p>
        <ul>
          {idiomas.map((el, index) => (
            <li key={index}>{el}</li>
          ))}
        </ul>
        <img src={flags.png} alt="Flag" />
        {weatherData && (
          <div>
            <h1>Weather in {capital}</h1>
            <p>Temperature: {weatherData.main.temp} fahrenheit</p> 
            <img src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`} alt="icon" />
            <p>Wind: {weatherData.wind.speed} m/s</p>
          </div>
        )}
        <button onClick={() => setSelectedCountry(null)}>Volver</button>
      </div>
    );
  }

  return (
    <ul>
      {newName.map((pais) => (
        <li key={pais.name.common}>
          {pais.name.common}
          <button onClick={() => setSelectedCountry(pais)}>SHOW</button>
        </li>
      ))}
    </ul>
  );
};

export { List };
