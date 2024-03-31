import './App.css'
import { Signup } from './Pages/Signup Page/Signup.jsx'
import { Login } from './Pages/Login Page/Login.jsx'
import { Message } from './Pages/Messaging Page/Message.jsx'
import Navbar from './Pages/Navbar/navbar.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

function App() {  
    const router = createBrowserRouter([
        {
          path: '/login',
          element: <><Login/></>
        },
        {
          path:'/signup',
          element: <><Signup/></>
        },
        {
          path: '/chat',
          element: <><Message/></>
        }
    ])

  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App
