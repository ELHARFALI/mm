import React from 'react'
import { SearchForm } from '../Components'
import { useGlobalContext } from '../context/global_context'
import Slider from "react-slick";

const Home = () => {
  const { meals, categories } = useGlobalContext()
  
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3
  };

  return (
      <main className='w-full h-full '>
          
      <SearchForm />
      
      <div className='container mx-auto'>
        <Slider {...settings} className='w-full'>
          {categories.map((cat) => {
            const { idCategory: id, strCategory: title, strCategoryThumb: image } = cat
            return (
              <div key={id} className='w-full'>
                <img src={image} alt="" />
                <h3>{title}</h3>
              </div>
            )
          })}
      </Slider>
      </div>
      
    </main>
  )
}

export default Home