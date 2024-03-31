import './style.css'
import { NavLink } from 'react-router-dom'

export function Login() {
    return (
        <body id='body'>
          <header id='head'>Welcome Back</header>
          <div className='submit'>
            <input type="text" placeholder=' Username' className='box'/>
            <input type="text" placeholder=' Password' className='box'/>
            <button className='btn'>LOGIN</button>
            <p id='desc'>Not Registered? <b><NavLink className ='linkclr'to='/Signup'>Create an Account</NavLink></b></p>
          </div>
        </body>
    )
  }
 