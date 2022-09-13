import React from 'react'
import './hourly-weather.scss'
import {Hourly } from './Hourly/Hourly'
const HourlyWeather = (data) =>
{
  var days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
 return (
   <div className='hourly-container'>
    {data.data !=='undefined' ? data.data.map((day, i) =>
     {
       return <Hourly
         key={i}
         day={days[new Date(day.datetime).getDay()]}
         highTemp={day.high_temp}
         lowTemp={day.low_temp}
         icon={day.weather.icon}
       />
      })
      :
       <div>
          loading...
      </div>
    }
    
  
    </div>
  )
}

export default HourlyWeather