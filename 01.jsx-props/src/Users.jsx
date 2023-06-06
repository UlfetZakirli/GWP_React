import React from 'react'
import User from './User'
import axios from 'axios'

const BASE_URL = 'https://jsonplaceholder.typicode.com/users'

const Users = () => {
    async function getUsersById() {
        const res = await axios(`${BASE_URL}`)
        const data = await res.data
        console.log(data.map((item) => item.id));
    }
    return (
        <>
            <h1>Users List.</h1>
            <User getUsersById={getUsersById} />
        </>
    )
}

export default Users


