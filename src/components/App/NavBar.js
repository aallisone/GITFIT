import React, { Component } from 'react'
//css
import '../Styles/NavBar.css'


class NavBar extends Component {
  render() {
    return (
      <div>
        <ul class='thisNav'>
          <li><a>Sign up</a></li>
          <li><a>Sign In</a></li>
          <li><a>Community</a></li>
          <li><a href='/Exercises'>Workouts</a></li>
          <li className='Home'  ><a href='/Home'>Home</a></li>
        </ul>
      </div>
    
    )
  }
}

  export default NavBar