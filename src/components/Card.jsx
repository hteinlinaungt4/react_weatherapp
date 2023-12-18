import React from 'react'

import { BiRightDownArrowCircle } from "react-icons/bi";



function Card({value}) {
  if(JSON.stringify(value) !== '{}'){
    console.log(value);
    return (
      <div className='d-flex gap-2 flex-column'>
          <h3 className='fw-bold'>{value.data.name},{value.data.sys.country}</h3>
          <p className=' fs-1 fw-bold'><img src={`https://openweathermap.org/img/w/${value.data.weather[0].icon}.png`} /> {value.data.main.temp}</p>
          <h6   className='fw-light'><BiRightDownArrowCircle />{value.data.wind.speed}</h6>
          <h6 className='fw-light'>Humidity:{value.data.main.humidity}%</h6>
          <h6 className='fw-light'>Visibility:{value.data.visibility /1000}km</h6>
      </div>
    )
  }else{
    return (
      <div>Loading ...</div>
    )
  }
  
}

export default Card