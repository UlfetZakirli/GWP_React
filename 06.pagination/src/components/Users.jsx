import React from 'react'
import { PAGINATE_PAGE } from '../utils/constant'
import User from './User'

const Users = ({ users, page }) => {
    const startPage = (page - 1) * PAGINATE_PAGE
    const selectedPages = users.slice(startPage, startPage + PAGINATE_PAGE)

    return (
        <div className='users'>
            {selectedPages.map((user) => {
                return (
                    <User user={user} key={user.id} />
                )
            })
            }
        </div>
    )
}

export default Users