import React, { useState } from 'react'
import { BiSearch } from "react-icons/bi";


function Search({fetchData}) {
  const [city,setCity]=useState();
  return (
    <div>
        <input value={city} onChange={e => setCity(e.target.value)} placeholder='Enter City Name ...' className='px-3 py-1 shadow-lg rounded-2 border-0'></input>
        <BiSearch onClick={() => fetchData(city)}  className="fs-3 mx-3" />

    </div>
  )
}

export default Search