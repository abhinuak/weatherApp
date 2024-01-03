import React, { useState } from 'react'
import './Wheather.css'




function Wheather() {
   


 
 

  const [search,setSearch]=useState("")
const[weather,setWeather]=useState({})


const SearchPress =()=>{
  const key="783ef2d97216c1cbcd23ee9c96a5e324"
  const base=`https://api.openweathermap.org/data/2.5/weather?q=${search}&units=Metric&appid=${key}`

 fetch(base)
 .then((res)=>res.json())
 .then((result)=>{

  setWeather(result)
 })
 
}




  return (
    <div>
<div className='container'>
    <h1 className=' head text-center fs-2 fw-bolder '>Weather App</h1>
    <div className='div1'>
    <input className='inp form-control'  type="text" placeholder='Enter city' onChange={(e)=>setSearch(e.target.value)}/>
    <button className='btn btn-success' onClick={SearchPress}><i className="fa-solid fa-magnifying-glass fa-lg" style={{color:" #03c700;"}}></i></button>
</div>

{typeof weather.main!='undefined'?(<div>
  <div>
  <h2 className='head2 text-center text-light mt-2'><b>{weather.name}</b></h2>
  
</div>
<div>
    <h3 className='head3 text-center text-light mt-1'>Temp :<b>{weather.main.temp}°C </b><img className='img-fluid' width={'50px'}
    src="https://cdn-icons-png.flaticon.com/512/434/434533.png" alt="tempa" /></h3>
    <h3 className='head3 text-center text-light mt-1  '>feels_like:<b>{weather.main.feels_like}°C </b></h3>
</div>
<div>
  <h3 className='head3 text-center text-light mt-1'>Humidity :<b>{weather.main.humidity}%</b><img className='img-fluid' width={'50px'} src="https://cdn-icons-png.flaticon.com/512/4005/4005831.png" alt="hum" /></h3>
</div>

<div>
<h3 className='head4 text-center text-warning mt-3 fw-bolder '>({weather.weather[0].description})</h3>


</div>
<div>
  <footer>
    <h6 className='head5 text-center  mt-5 '>WeatherApp.com / Abhinu</h6>
  </footer>
</div>
<div>


</div>
</div>):('')}

 





   
</div>

    </div>
  )
}

export default Wheather