import React,{useState,useEffect} from 'react'
import axios from "axios";
import { useNavigate } from 'react-router-dom';

const Random = () => {

    const [jokes,setJokes]=useState([])
    const nevigate=useNavigate()

    function onNevigate(){
      nevigate('/')
    }

useEffect(()=>{
  getJokes()
},[])

  const getJokes=async ()=>{
    let result1=await axios.get("https://api.chucknorris.io/jokes/random")
    setJokes(result1.data.value)
    
  //  console.log(result1.data.value)
   }
   
  return (
    <div className='random'>
      
      <button className='btn1' onClick={onNevigate}> Home </button>
     
 <h1> {jokes}</h1>

 <div className='next'>  <button className='btn1' onClick={getJokes}> Next Joke </button> </div>

    </div>
  )
}

export default Random