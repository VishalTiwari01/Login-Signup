import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        <nav className="bg-blue-600 p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <a href="#" className="text-white text-2xl font-bold">Vishal</a>

        {/* Links */}
        <div className="space-x-6">
          <button><Link to="/login" className="text-white hover:text-gray-300">Login</Link></button>
          <button><Link to="/signup" className="text-white hover:text-gray-300">Signup</Link>
          </button>
        </div>
      </div>
    </nav>
    </div>
  )
}

export default Navbar