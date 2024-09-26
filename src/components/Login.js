import React from 'react'
import Header from './Header'
const Login = () => {
  return (
    <div>
        <Header />
         <div 
         className="bg-[url('https://assets.nflxext.com/ffe/siteui/vlv3/bfc0fc46-24f6-4d70-85b3-7799315c01dd/web/IN-en-20240923-TRIFECTA-perspective_74e21c19-980e-45ef-bd6c-78c1a6ce9381_medium.jpg')] 
         bg-cover absolute bg-center h-screen w-screen">
         </div>
         
         <form className='w-full sm:w-1/2 md:w-1/2 sm:h-[60vh] lg:w-3/12 h-[100vh] p-8 sm:p-12 bg-black bg-opacity-70 my-20 sm:my-20 mx-auto absolute right-0 left-0 rounded-md'>
    <label className='text-white block mx-2 my-4 text-lg sm:text-xl'>Sign In</label>
    <input type='text' placeholder='Email Address' className='px-3 py-2 m-2 bg-gray-700 border border-black rounded-md w-full' />
    <input type='password' placeholder='Password' className='px-3 py-2 bg-gray-700 border m-2 border-black rounded-md w-full'/>
    <button className='border border-black rounded-md px-4 py-2 mx-2 my-4 bg-red-700 text-white w-full sm:w-auto'>Sign-in</button>
</form>
    </div>
  )
}

export default Login