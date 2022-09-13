import React, { useState } from 'react'
import './App.scss';
import Weather from '../Weather/Weather';
import HourlyWeather from '../Hourly-Weather/HourlyWeather';

const App = () =>
{
  const apiKey = "69c36513b8f1b04a9ae7df1c6310f2e1"
  const [weatherData, setWeatherData] = useState([{}])
  const [city, setCity] = useState("")

  const getWeather = (event) =>
  {
    if (event.key == 'Enter')
    {
      fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},au&appid=${apiKey}&units=metric`)
        .then(response => response.json())
          .then(
            data =>
            {
              setWeatherData(data)
            }
        )
    }
  }

  return (
    <div className='app'>
      <div className='container'>
        <input
          className='input'
          type="text"
          placeholder='Enter your city...'
          onChange={e => setCity(e.target.value)}
          value={city}
          onKeyDown={getWeather} />
        <Weather />
      </div>
        <HourlyWeather/>
    </div>
  )
}


export default App;
