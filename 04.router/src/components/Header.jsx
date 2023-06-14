import React from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'

const Header = () => {
    const naviagte = useNavigate()

    return (
        <div style={{ background: '#000', color: '#fff', height: '200px', marginBottom: '100px' }}>
            Header
            <div className="buttons">
                <button onClick={() => naviagte('/')}>Home</button>
                <button onClick={() => naviagte('/about')}>About</button>
                <button onClick={() => naviagte('/contact')}>Contact</button>
                <button onClick={() => naviagte('/blog')}>Blog</button>
                <button onClick={() => naviagte(2)}>Go next</button>
                <button onClick={() => naviagte(-2)}>Go prev</button>
            </div>

            <nav style={{ display: 'flex', justifyContent: 'space-around' }}>
                <NavLink to={'/'}>Home</NavLink>
                <NavLink to='/about'>About</NavLink>
                <NavLink to={'/contact'}>Contact</NavLink>
                <NavLink to='/blog'>Blog</NavLink>
            </nav>
        </div >

    )
}

export default Header