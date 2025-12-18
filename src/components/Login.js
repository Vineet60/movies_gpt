import React, { useRef, useState } from 'react'
import Header from './Header'
import checkValidateData from '../utils/Validate'
import {auth} from "../utils/Firebase"
// import "firebase/auth";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword,updateProfile } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/UserSlice';
import { USER_AVATAR } from '../utils/Constant';


const Login = () => {
  const [isSignInForm, setIsSignInForm ] = useState(true)
  const [errorMessage,setErrorMessage]= useState(null) 
  const navigate = useNavigate()
  const dispatch = useDispatch();

  const email = useRef(null)
  const password = useRef(null)
  const username = useRef(null)
//   const handleButtonClick = () =>{
//     //Validate the form data

//     // checkValidateData(email,password)
//     console.log(email.current.value)
//     console.log(password.current.value)
//     console.log(username.current.value)
//     const message = checkValidateData(email.current.value,password.current.value,username.current.value)
//     console.log(message)
//     setErrorMessage(message)

//     if(message ) return 
     
//     if(!isSignInForm){
//       //Sign up
//       createUserWithEmailAndPassword(auth, email, password)
//       .then((userCredential) => {
//       const user = userCredential.user;
//       console.log(user)
//  })
//       .catch((error) => {
//         const errorCode = error.code;
//         const errorMessage = error.message;
//         console.log(errorCode+"-"+errorMessage)
//         setErrorMessage(errorCode+"-"+errorMessage)
//   });


//     }else{
//       //Sign in

//     }
const handleButtonClick = () => {
  const message = checkValidateData(
    email.current.value,
    password.current.value,
    username.current?.value
  );

  setErrorMessage(message);
  if (message) return;

  if (!isSignInForm) {
    // SIGN UP
    createUserWithEmailAndPassword(
      auth,
      email.current.value,
      password.current.value
    )
      .then((userCredential) => {
        const user=userCredential.user;
  updateProfile(user, {
  displayName: username.current.value, photoURL: USER_AVATAR
}).then(() => {
    const {uid,email,displayName,photoURL} = auth.currentUser;
    dispatch(addUser({uid: uid,email:email,displayName:displayName , photoURL: photoURL}))
  // navigate("/browse")
}).catch((error) => {
  setErrorMessage(errorMessage)
});

        console.log("User:", userCredential.user);
        // navigate("/browse")
      })
      .catch((error) => {
        setErrorMessage(error.code + " - " + error.message);
      });

  } else {
    // SIGN IN 
    signInWithEmailAndPassword(
      auth,
      email.current.value,
      password.current.value
    )
      .then((userCredential)=>{
        //Signed In
        const user=userCredential.user;
        console.log(user)
        // navigate("/browse")
      })
      .catch((error) => {
        setErrorMessage(error.code + " - " + error.message);
      });
    }
  }
 

  const toggleSignInForm =()=>{
    setIsSignInForm(!isSignInForm)

    
  }
  return (
    <div>
      <Header/>
      <div className='absolute '>
      
      <img src='https://assets.nflxext.com/ffe/siteui/vlv3/024bfb98-9e9d-441d-9c5f-d2c798d8e42f/web/IN-en-20251013-TRIFECTA-perspective_b6324826-0535-47c5-be5f-4f50e9663eaf_small.jpg'></img>
      </div>
      <form onSubmit={(e) => e.preventDefault()} className='absolute p-12 w-3/12 bg-black mx-auto my-36 right-0 left-0 text-white bg-opacity-85 rounded-lg'>
      <h1 className='font-bold text-3xl py-4'>{isSignInForm ? "Sign In" : "Sign up"}</h1>
        
        {isSignInForm ? "" :
        <input ref={username} type='text' placeholder='Full Name' className='p-4 my-4 w-full bg-gray-700 rounded-lg'></input>}
        <input ref={email} type='email' placeholder='Email Address' className='p-4 my-4 w-full bg-gray-700 rounded-lg'></input>
        <input ref={password} type='password' placeholder='Password' className='p-4 my-4 w-full bg-gray-700 rounded-lg'></input>
        
        <p className='text-red-500 font-bold text-lg py-3'>{errorMessage}</p>
        
        <button className='p-4 my-6 bg-red-700 w-full rounded-lg' onClick={handleButtonClick}>{isSignInForm ? "Sign In" : "Sign up"}</button>
        <p className='font-bold py-4' onClick={toggleSignInForm}>{isSignInForm ? "Regestered user Sign in now" : "New on Netflix? Sign up Now"}</p>
      </form>
    
    </div>
  )
}

export default Login