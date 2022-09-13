import React from 'react'
import '../hourly-weather.scss'
export const Hourly = ({day, highTemp, lowTemp,icon}) => {
  return (
    <div className='time-container'>
      <h3>{day}</h3>
      <h4>{highTemp}°C</h4>
      <img className='icon' src={`https://www.weatherbit.io/static/img/icons/${icon}.png`} alt="" />
      <h4>{lowTemp}°C</h4>
    </div>
  )
}
