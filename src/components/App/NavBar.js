import React, { Component } from 'react'
//css
import '../Styles/NavBar.css'


class NavBar extends Component {
  render() {
    return (
      <div>
        <ul class='thisNav'>
          <li class='thisList'><a>Sign up</a></li>
          <li class='thisList'><a>Sign In</a></li>
          <li class='thisList'><a>Community</a></li>
          <li class='thisList'><a href='/Exercises'>Workouts</a></li>
          <li className='Home'  ><a href='/Home'>Home</a></li>
        </ul>
      </div>
    
    )
  }
}

  export default NavBar