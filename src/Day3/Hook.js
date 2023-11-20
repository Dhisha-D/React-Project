import React,{useState} from 'react'

export default function Hook() {
    const[college,setcollege]=useState("SKCET")
  return (
    <div>
      <h1>My college is {college}</h1>
      <button onClick={()=>setcollege("atria")}>click me</button>
      <button onClick={()=>setcollege("MIT")}>click me</button>
      <button onClick={()=>setcollege("IIT")}>click me</button>
       
    </div>
  )
}
