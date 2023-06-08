import React from 'react'
import { Link, NavLink, useNavigate, useParams } from 'react-router-dom'

const Header = () => {
    const navigate = useNavigate()


    return (
        <div style={{ background: 'green', height: '70px', marginBottom: '100px' }}>

            <div className="buttons">
                <button onClick={() => navigate('/')}>Home</button>
                <button onClick={() => navigate('/about')}>About</button>
                <button onClick={() => navigate('/contact')}>Contact</button>
                <button onClick={() => navigate(-1)}>Go prev</button>
                <button onClick={() => navigate(1)}>Go next</button>

            </div>

            <nav style={{ display: 'flex', justifyContent: 'space-around' }}>
                <Link to={'/'}>Home</Link>
                <Link to='/about'>About</Link>
                <Link to='/contact'>Contact</Link>
            </nav>
        </div >

    )
}

export default Header