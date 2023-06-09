import React from 'react'

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
          </div>
    </nav>
  )
}

export default Navbar