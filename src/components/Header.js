import React, { useEffect, useState } from 'react'
import { auth } from '../utils/firebase'
import { signOut } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'

const Header = () => {
  const navigate = useNavigate();
  const [isSignedIn, setIsSignedIn] = useState(false);

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
        <img className='w-44' src='https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png'
        alt='netflix-logo'
        />
        {isSignedIn && (
          <div>
            <button onClick={handleSignOut} className='text-white mt-5 rounded-lg h-10 w-20 bg-red-600'>Sign out</button>
          </div>
        )}
    </div>
  )
}

export default Header