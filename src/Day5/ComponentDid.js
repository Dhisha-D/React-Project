import React, { Component } from 'react'

export default class ComponentDid extends Component {
    state={color1:"Yellow"}
    componentDidMount(){
        setTimeout(()=>{this.setState({color1:"Blue"})},3000)
    }
    getSnapshotBeforeUpdate(prevProps,PrevState){
        document.getElementById("i").innerHTML="my previous value"+PrevState
    }
  render() {
    return (
      <div>{this.state.color1}</div>
    )
  }
}


