import React from 'react'

export default function Name({studentName}) {
    if(studentName==="Dhisha"){
        throw new Error("Dhisha is already present");
    }
  return (
    <div>My name is {studentName}</div>
  )
}