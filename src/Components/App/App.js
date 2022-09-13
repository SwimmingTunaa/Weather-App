import React, { Fragment, useState } from 'react'
import './App.scss';
import Weather from '../Weather/Weather';
import HourlyWeather from '../Hourly-Weather/HourlyWeather';
import { Search } from '../Search/Search';


const App = () =>
{
  const apiKey = "f66a722a35284f1b99431f6f59051780"
  const [dailyData, setDailyData] = useState()
  const [currentData, setCurrentData] = useState()
  const [city, setCity] = useState("")

  // const importAllIcons = require =>
  // require.keys().reduce((acc, next) => {
  //   acc[next.replace("./", "")] = require(next);
  //   return acc;
  // }, {});

  // const icons = importAllIcons(
  //   require.context("../../Images/Icons", false, /\.(png|jpe?g|svg)$/)
  // );
  
  const getWeather  = async (event) =>
  {
    if (event.key === 'Enter')
    {
      await fetch(` https://api.weatherbit.io/v2.0/current?city=${city}&country=AU&key=${apiKey}`)
      .then(response => response.json())
        .then(
          data => setCurrentData(data.data[0])
      )
      await fetch(`https://api.weatherbit.io/v2.0/forecast/daily?city=${city}&country=AU&key=${apiKey}&days=7`)
      .then(response => response.json())
        .then(
          data => setDailyData(data)
      )

      setCity("")
    }
  }

 
  return (
    <div className='app'>
     
      {typeof dailyData === 'undefined' ? (
        <div className='undefined'>
          <h1>Lets find the Weather!</h1>
          <Search city={city} setCity={setCity} getWeather={getWeather} />
        </div>
      ) :
      (
          <Fragment>
            <Search city={city} setCity={setCity} getWeather={getWeather} />
            <Weather
              location={currentData.city_name}
              temp={currentData.temp}
              description={currentData.weather.description}
             icon={ currentData.weather.icon}
            />
            <HourlyWeather
              data = {dailyData.data}
            />
            {  console.log(currentData)}
        </Fragment>
      )}
  
    </div>
  )
}


export default App;
