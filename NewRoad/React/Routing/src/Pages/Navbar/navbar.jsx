import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {

    return (
        <div>
            <nav>
                <Link to="/login">Login</Link>
                <Link to="/signup">Signup</Link>
                <Link to="/chat">Chats</Link>
            </nav>
        </div>
    )
}

export default Navbar