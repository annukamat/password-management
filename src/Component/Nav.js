import React from 'react'
import { Link } from 'react-router-dom'

function Nav() {
  return (
    <header>
            <a className='logo' href="#">Logo</a>
            <nav>
                <ul>
                    <li>
                        <Link to="/">
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link to="/all-pass">
                            Passwords
                        </Link>
                    </li>
                    <li>
                        <Link to="/login">
                            Login
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
  )
}

export default Nav