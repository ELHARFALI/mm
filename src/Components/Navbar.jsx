import React from 'react'
import { NavLink } from 'react-router-dom'
import { navLinks } from '../data'

const Navbar = () => {
  return (
      <nav className='w-full h-20 bg-[#F97B22]'>
          <div className="container mx-auto px-4 md:px-0 flex justify-between items-center h-full">
              <div >
                  <h1 className='text-2xl md:text-3xl font-bold text-[#ECF8F9]'>
                      The
                      <span className='text-[#FEE8B0]'>Meal</span>
                  </h1>
              </div>
              <ul className='flex items-center'>
                  {navLinks.map((link) => {
                      const { id, title, url } = link
                      return (
                        <li key={id} className='mr-4'>
                            <NavLink to={url} className='py-2 px-4 text-xl text-white hover:text-[#025464]' >
                                {title}
                            </NavLink>
                        </li>
                      )
                  })}
              </ul>
          </div>
    </nav>
  )
}

export default Navbar 