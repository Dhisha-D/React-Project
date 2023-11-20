import React from 'react'

export default function DefaultProps(props) {
  return (
    <div>
    <h1>Hi! My name is {props.name} and my college is {props.college}</h1>
    </div>
  )
}

DefaultProps.DefaultProps={college:"SKCET"}

