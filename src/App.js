import React, { useEffect, useState } from 'react'
import Card from './components/Card'
import Search from './components/Search'
import { api, apikey } from './api/api'
import 'react-clock/dist/Clock.css';
import Clock from 'react-clock'


function  App() {
  const [value, setValue] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => setValue(new Date()), 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);
  const [data,setData]=useState({});
  const fetchData =async (city) => {
    const res =await api.get(`weather?q=${city}&appid=${apikey}&units=metric`)
    setData(res);
  }
  useEffect(()=> {
    fetchData('Taunggyi');
  },[])
  return (
    <div className='w-full text-center  min-vh-100 d-flex flex-column justify-content-center align-content-center align-items-center '>
      <div  className='card shadow-lg py-3 border-0 d-flex gap-4 ' style={
        {
          minWidth : "500px"
        }
      }>
        <h1>Weather App</h1>
        <div className='d-flex justify-content-center '>
        <Clock value={value} />
        </div>
        <Search fetchData={fetchData}></Search>
        <Card value={data}></Card>
      </div>
    </div>
  )

}
export default  App