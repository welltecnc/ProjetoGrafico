import { useState,useEffect } from "react"
import Sensor from '../../components/Sensor/Sensor'

const Home = () => {

  const [temperatura, setTemperatura] =useState([])

  useEffect(()=>{
    fetch("http://localhost:5000/temperatura")
    .then((res)=>{
        return res.json();
    })
    .then((res)=>{
      setTemperatura(res)
    }).catch((error)=>{
      console.log(error)
    })

  })

  return (


    <div>
      <h1>Home</h1>
      <Sensor data={temperatura}/>
    </div>
  )
}

export default Home