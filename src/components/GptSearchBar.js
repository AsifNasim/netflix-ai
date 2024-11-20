import React from 'react'
import lang from '../utils/langConstants'
import { useSelector } from 'react-redux'

const GptSearchBar = () => {

  const langkey = useSelector(store => store?.config?.lang)
  return (
    <div>
        <form className='flex pt-10 justify-center items-center shadow-lg z-50 '>
            <input 
            className="p-4 m-16 w-1/3 border-4 border-black rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500" 
            type="text" 
            placeholder={lang[langkey]?.gptSearchBarPlaceholder} />
            <button className='py-4 px-8 border-4 border-black bg-red-600 text-white rounded-lg hover:bg-red-500 transition duration-300'>{lang[langkey]?.search}</button>
        </form>
    </div>
  )
}

export default GptSearchBar