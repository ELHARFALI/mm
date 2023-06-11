import React from 'react'
import { Gallery, Categories, SearchForm } from '../Components'

const Home = () => {
  

  return (
      <main className='w-full h-full bg-[#DBE2EF] '>
        <SearchForm />
      <Categories />
      <Gallery />
    </main>
  )
}

export default Home