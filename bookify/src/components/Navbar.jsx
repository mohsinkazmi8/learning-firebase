import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
      <div className="p-5 bg-indigo-400 mb-2">
        <div className="container mx-auto">
            <span className="pr-3 text-white"><NavLink to="/">Home</NavLink></span>
            <span className="pr-3 text-white"><NavLink to="/login">Login</NavLink></span>
            <span className="pr-3 text-white"><NavLink to="/register">Register</NavLink></span>
            <span className="pr-3 text-white"><NavLink to="/list">Listing</NavLink></span>
        </div>
      </div>
    </>
  )
}

export default Navbar
