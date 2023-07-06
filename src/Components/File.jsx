import React ,{useState,useEffect} from 'react'
import axios from "axios";
import {  useNavigate } from 'react-router-dom';


const File = () => {

    const [state,setState]=useState([])

    const navigate = useNavigate();

    function onNevigate(){
      navigate('/random')
    }
    

    useEffect(()=>{
   const jokes=async ()=>{
    let result=await axios.get("https://api.chucknorris.io/jokes/categories")
    setState(result.data)
    //console.log(result)
   }
   jokes()
},[])



  return (
    <div  className='main'>
      <h1> Chunck Norries</h1>

      <div className='main1'> 
      {
  state.map((ele,i)=>{
return(
  <button className="btn" key={i}  onClick={onNevigate}>
    
    {ele}
    
    <p>unlimited jokes On {ele}</p>
   
   

  </button>
)
  })
}
      </div>

    
    </div>
  )
}

export default File