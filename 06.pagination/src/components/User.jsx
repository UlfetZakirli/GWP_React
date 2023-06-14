import React from 'react'

const User = ({ user }) => {
    return (
        <div className='user'>
            <h5>{user.id}</h5>
            <h4>{user.name}</h4>
            <p>{user.email}</p>
        </div>
    )
}

export default User