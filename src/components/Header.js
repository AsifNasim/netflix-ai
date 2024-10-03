import React, { useEffect, useState } from 'react'
import { auth } from '../utils/firebase'
import { signOut } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { NETFLIX_LOGO } from '../utils/constants'

const Header = () => {
  const navigate = useNavigate();
  const [isSignedIn, setIsSignedIn] = useState(false);

  const user = useSelector( store => store.user);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      setIsSignedIn(!!user);
    });

    return () => unsubscribe();
  }, []);

  const handleSignOut = () => {
    signOut(auth).then(() => {
      // Sign-out successful, navigate to home page
      navigate('/');
    }).catch((error) => {
      // An error happened during sign-out
      console.error('Sign-out error:', error);
    });
  }

  return (
    <div className='flex justify-between absolute w-screen px-10 py-2 bg-gradient-to-b from-black z-20'> 
        <img className='w-44' src={NETFLIX_LOGO}
        alt='netflix-logo'
        />
        {isSignedIn && (
          <div className='flex items-center'>
            <div>
            <p className='text-white  mt-6 pr-2'> Welcome, {user?.displayName}</p>
          </div>
          <div>
            <button onClick={handleSignOut} className='text-white mt-5 rounded-lg h-10 w-20 bg-red-600'>Sign out</button>
          </div>
          </div>
        )}
    </div>
  )
}

export default Header