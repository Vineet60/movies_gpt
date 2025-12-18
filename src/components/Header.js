import { onAuthStateChanged,signOut } from 'firebase/auth'
import React from 'react'
import { auth } from '../utils/Firebase'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react';
import { addUser, removeUser } from '../utils/UserSlice';
import { LOGO } from '../utils/Constant'




const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector(store => store.user)
 


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


  return (
    <div className='absolute w-full px-5 py-2 bg-gradient-to-b from-black flex justify-between'>
      <img 
      className='w-44 z-10'
      src={LOGO} alt='logo'></img>
    
    {user && (
     <div className='flex z-10'>
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