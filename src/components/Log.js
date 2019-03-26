import React, { Component } from 'react'


class LogEx extends Component {
  render(){
      return(
        <div>
          <h1>*Exercise Name*</h1>
          <h4>*Muscle Type*</h4>
          <label>Weight
            <input type='number'/>
          </label>
          <label>Reps
            <input type='number'/>
          </label>
        </div>
      )
  }
}

export default LogEx