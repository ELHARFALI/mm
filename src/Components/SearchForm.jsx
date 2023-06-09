import {AiOutlineSearch} from 'react-icons/ai'

const SearchForm = () => {

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return (
      <div className='w-full h-full pt-10 pb-12 md:pb-20 flex justify-center items-center bg-[#025464]'>
          <form className=' mx-auto' onSubmit={handleSubmit}>
              <div className='flex justify-center items-center mb-6'>
                <h1 className='text-2xl md:text-4xl font-medium text-[#DBE2EF]' >Search</h1>
              </div>
              <div className='flex items-center w-full h-full '>
                  <input type="text" className='py-[6px] px-3 focus:outline-none rounded-tl-xl rounded-bl-xl text-lg font-medium' placeholder='Search for meals or cocktails...' />
                  <button type='submit' className='h-[40px] px-2 rounded-tr-xl rounded-br-xl bg-[#E57C23] transition-all ease-in-out duration-150 hover:bg-[#E8AA42] '>
                    <AiOutlineSearch size={25} />
                  </button>
              </div>
          </form>
    </div>
  )
}

export default SearchForm