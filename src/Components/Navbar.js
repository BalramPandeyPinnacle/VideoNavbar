import React from 'react'
import {Link} from "react-router-dom"

export default function Navbar() {
  return (
    <div>
    <Link to="/about">About</Link>&nbsp;
    <Link to="/home">Home</Link>
    <Link to="/*">404 Page</Link>

      
    </div>
  )
}
