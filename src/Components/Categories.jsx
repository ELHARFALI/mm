import { Link } from 'react-router-dom'
import { useGlobalContext } from '../context/global_context'

const Categories = () => {
  const { categories, meals } = useGlobalContext() 

  const all = {idCategory: 1,strCategory: 'all', strCategoryThumb: '' }
  const newCategories = [all, ...categories]
  

  return (
    <section className='container mx-auto px-4 md:px-0 py-8 md:py-10'>
      <div className='py-2'>
        <h1 className='text-lg md:text-xl'>Categories :</h1>
      </div>
      <div className='py-4 grid gap-2 grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 '>
        {newCategories.map((cat) => {
          const {idCategory: id, strCategory: name, strCategoryThumb: image} = cat
          return (
            <Link to={`categories/${name}`} key={id} className='bg-black text-white rounded-xl transition-all ease-in-out duration-150 hover:scale-105'>
              {image ? <img src={image} alt={name} className=' object-cover' /> : null}
              <p className={image ? 'px-2 text-lg font-medium' : 'w-full h-full text-2xl font-medium flex justify-center items-center'}>{name}</p>
            </Link>
          )
        })}
        </div>
    </section>
  )
}

export default Categories