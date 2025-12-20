import { onAuthStateChanged,signOut } from 'firebase/auth'
import React from 'react'
import { auth } from '../utils/Firebase'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react';
import { addUser, removeUser } from '../utils/UserSlice';
import { LOGO, SUPPORTED_LANGUAGES } from '../utils/Constant'
import { toggleGptSearchView } from '../utils/GptSlice'
import lang from '../utils/LanguageConstants'
import { changeLanguage } from '../utils/configSlice'



const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector(store => store.user)
  const showGptSearch = useSelector((store)=>store.gpt.showGptSearch)
 


  const handleSignOut = () =>{
    signOut(auth).then(() => {
    // navigate("/")
}).catch((error) => {
  // An error happened.
  navigate("/error")
});
  }
      useEffect(()=>{
      const unsubscribe = onAuthStateChanged(auth, (user) => {
    if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/auth.user
    const {uid,email,displayName,photoURL} = user;
    dispatch(addUser({uid: uid,email:email,displayName:displayName , photoURL: photoURL}))
    navigate("/browse")
    // navigate("/browse") cannot write here becaz the appRouter logic written here ,so we need to move our appRouter logic to App level
    //or we can use window.href path to navigate
  } else {
    // User is signed out
    dispatch(removeUser())
    navigate("/")
  }
    });
    //Unsubcribe when component unmount
    return()=>unsubscribe();
},[])

const handleGptSearchClick=()=>{
  //toggle my gptSearch
  dispatch(toggleGptSearchView())
}

const handleLanguageChange=(e)=>{
  // console.log(e.target.value)
  dispatch(changeLanguage(e.target.value))
}


  return (
    <div className='absolute w-full px-5 py-2 bg-gradient-to-b from-black flex justify-between'>
      <img 
      className='w-44 z-10'
      src={LOGO} alt='logo'></img>
    
    {user && (
     <div className='flex z-10 '>
      {showGptSearch&&<select className='p-2 m-4 bg-gray-900 text-white' onChange={handleLanguageChange}>
        {SUPPORTED_LANGUAGES.map( lang=> <option key={lang.identifier} value={lang.identifier}>{lang.name}</option>)}
      </select>}
      <button className='py-2 px-4 m-4 bg-blue-400 text-white font-bold rounded-lg' onClick={handleGptSearchClick}>{showGptSearch?"Home":"GPT search"}</button>
       <img alt='usericon' 
        className="w-12 h-12 my-5  "
       src={user?.photoURL}/>
      
       <button onClick={handleSignOut} className='font-bold text-white'>(Sign Out)</button>
      </div>
    )}
    </div>
  )
}

export default Header