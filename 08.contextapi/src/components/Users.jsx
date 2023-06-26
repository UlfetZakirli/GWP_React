import React, { useContext } from 'react'
import User from './User'
import { UserContext } from './../context/UserContext';

const Users = () => {
    const { users } = useContext(UserContext)

    return (
        <div className='users mt-5'>
            {
                users.map((user) => {
                    return <User key={user.id} user={user} />
                })
            }
        </div>
    )
}

export default Users