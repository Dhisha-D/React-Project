import React from 'react'
function Day5cw(props){
    return(
        <div>
            my name is {props.name}
        </div>
    )
}
export default function List() {
    const list=["mango","orange","apple"];
  return (
    <div>
        {list.map((summa)=>
            <Demo name={summa}/>
        )}
    </div>
  )
}