import React from 'react'
import { Link } from 'react-router-dom'
import './Header.scss'
const Header = () => {
    return (
        <div className="header">
            <ul>
                <li><Link to="/login">Login</Link></li>
            </ul>
        </div>
    )
}

export default Header
