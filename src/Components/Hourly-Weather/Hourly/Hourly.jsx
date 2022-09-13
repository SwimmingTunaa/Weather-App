import React from 'react'
import sun from '../../../Images/Icons/sun.png'
import '../hourly-weather.scss'
export const Hourly = () => {
  return (
    <div className='time-container'>
          <h2>0:900</h2>
          <img className='icon' src={sun} alt="" />
          <h1>22c</h1>
    </div>
  )
}
