import React from 'react'
import './Weather.scss'
import { map } from '../../Data/IconMap'

const Weather = ({ location, temp, description, icon}) =>
{
  return (
    <div className='main'>
      <h2>{location}</h2>
      <img className='weather' src={`https://www.weatherbit.io/static/img/icons/${icon}.png`} alt={temp} />
      <h1>{temp}°C</h1>
      <h2>{description}</h2>
    </div>
  )
}

export default Weather