import React from 'react'
import { SearchForm } from '../Components'
import { useGlobalContext } from '../context/global_context'

const Home = () => {
  const {meals} = useGlobalContext()

  return (
      <main className='w-full h-full '>
          
      <SearchForm />
      
      <div className="container mx-auto">
        {meals.map((meal) => {
          const { idMeal: id, strMeal, strMealThumb: image } = meal
          return (
            <div key={id}>
              <img src={image} alt={strMeal} />
              <p>{strMeal}</p>
            </div>
          )
        })}
      </div>
    </main>
  )
}

export default Home