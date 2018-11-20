import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class Navigation extends Component {
  render() {
    return (
      <header>
        <nav>
          <ul>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/libraries'>libraries</Link></li>
            <li><Link to='/cheatsheet'>cheatsheet</Link></li>
          </ul>
        </nav>
      </header>
    )
  }
}

export default Navigation;