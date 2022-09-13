import React from 'react'
import './Weather.scss'
import sun from '../../Images/Icons/sun.png'
const Weather = () => {
  return (
    <div className='main'>
          <h2>0:900</h2>
          <img className='weather' src={sun} alt="" />
          <h1>22c</h1>
          <h2>0%</h2>
    </div>
  )
}

export default Weather