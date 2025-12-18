
import { createBrowserRouter } from 'react-router-dom'
import { RouterProvider  } from 'react-router-dom'
import Login from './Login'
import Browse from "./Browse"

const Body = () => {
    const appRouter = createBrowserRouter([
        {
            path:"/",
            element:<Login/>
        },
        {
            path:"/browse",
            element:<Browse/>,
        }
    ])

//     useEffect(()=>{
//         onAuthStateChanged(auth, (user) => {
//     if (user) {
//     // User is signed in, see docs for a list of available properties
//     // https://firebase.google.com/docs/reference/js/auth.user
//     const {uid,email,displayName,photoURL} = user;
//     dispatch(addUser({uid: uid,email:email,displayName:displayName , photoURL: photoURL}))
//     navigate("/browse")
//     // navigate("/browse") cannot write here becaz the appRouter logic written here ,so we need to move our appRouter logic to App level
//     //or we can use window.href path to navigate
//   } else {
//     // User is signed out
//     dispatch(removeUser())
//     navigate("/")
//   }
//     });
// },[])

  return (
    <div>
        <RouterProvider router={appRouter}/>
    
    </div>
  )
}

export default Body