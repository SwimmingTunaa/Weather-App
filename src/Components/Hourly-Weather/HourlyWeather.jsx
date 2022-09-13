import React from 'react'
import './hourly-weather.scss'
import {Hourly } from './Hourly/Hourly'
const HourlyWeather = () =>
{
 return (
    <div className='hourly-container'>
      <Hourly/>
      <Hourly/>
      <Hourly/>
      <Hourly/>
      <Hourly/>
    </div>
  )
}

export default HourlyWeather