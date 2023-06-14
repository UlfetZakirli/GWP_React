import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
    const navigate = [
        { path: '/', name: 'Movies List' },
        { path: '/addMovie', name: 'Add Movie' }
    ]
    
    return (
        <div className='header'>
           <h2>React Router DOM</h2>
            <nav>
                {
                    navigate.map((nav) => (
                        <NavLink className="title" key={nav.name} to={nav.path}>{nav.name}</NavLink>
                    ))
                }
            </nav>
        </div>
    )
}

export default Header