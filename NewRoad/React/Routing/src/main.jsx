import React from 'react'
import ReactDOM  from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Signup } from './Pages/Signup Page/Signup.jsx'
import { Login } from './Pages/Login Page/Login.jsx'
import { Message } from './Pages/Messaging Page/Message.jsx'
import App from './App.jsx'
import './index.css'

const router = createBrowserRouter([
  {
    path:'/',
    element: <App/>
  },
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

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
