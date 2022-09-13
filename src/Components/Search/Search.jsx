import React from 'react'

export const Search = ({city,setCity, getWeather}) =>
  {
    return <div className='container'>
        <input
          className='input'
          type="text"
          placeholder='Enter your city...'
          onChange={e => setCity(e.target.value)}
          value={city}
          onKeyDown={getWeather} />      
      </div>
  }
