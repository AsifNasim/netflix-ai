import React, { useEffect, useState } from 'react'
import { auth } from '../utils/firebase'
import { onAuthStateChanged, signOut } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { NETFLIX_LOGO, SUPPORTED_LANGUAGE } from '../utils/constants'
import { addUser, removeUser } from '../utils/userSlice'
import { toggleGptSearchView} from '../utils/gptSlice'
import { changeLanguage } from '../utils/configSlice'


const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isSignedIn, setIsSignedIn] = useState(false);

  const user = useSelector( store => store.user);
  // const gpt =  useSelector(store => store.gpt);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      setIsSignedIn(!!user);
    });
//  when the component is unmounted, the unsubscribe function will be called
    return () => unsubscribe();
  }, []);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user => {
      if(user) {
        const { uid, email, displayName} = user;
          dispatch(addUser({
          uid: uid,
          email: email,
          displayName: displayName
        }))
        navigate('/browse')
      } else{
        dispatch(removeUser())
        navigate('/')
      }
    }));
    // unsubscribe will be called when the component is unmounted
    return () => unsubscribe();
  }, [dispatch, navigate])

  const handleSignOut = () => {
    signOut(auth).then(() => {
      // Sign-out successful, navigate to home page
      navigate('/');
    }).catch((error) => {
      // An error happened during sign-out
      console.error('Sign-out error:', error);
    });
  }

  const handleGptSearch = () => {

    dispatch(toggleGptSearchView());
    
  }

  const handleLanguageChange = (e) => {
    dispatch(changeLanguage(e?.target?.value));
  }

  return (
    <div className='flex justify-between fixed w-screen px-10 py-2 bg-gradient-to-b from-black z-20'> 
        <img className='w-44' src={NETFLIX_LOGO}
        alt='netflix-logo'
        />
        {isSignedIn && (
          <div className='flex items-center'>
            {/* Multi Language Support */}
            <select className='p-2 mr-2 mt-5 rounded bg-gray-900 text-white' onChange={handleLanguageChange}>
              {SUPPORTED_LANGUAGE.map( (lang) => (
                <option key={lang?.identifier} value={lang?.name}>{lang?.name}</option>
                
              )
                
              )}
            </select>
            <button className='p-2 mt-5 mx-2 text-white bg-purple-800 rounded-md'
            onClick={handleGptSearch}
            >
              Search GPT
            </button>
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