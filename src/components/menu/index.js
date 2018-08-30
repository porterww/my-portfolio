import React, {Component} from 'react'
import {Link} from 'react-router-dom'

export default class Navigation extends Component{
  render(){
    return(
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/aboutme">About Me</Link></li>
          <li><Link to="/projects">Projects</Link></li>
          <li><Link to="/workhistory">Work History</Link></li>
        </ul>
      </nav>
    )
  }
}