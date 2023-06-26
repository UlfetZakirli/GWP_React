import axios from 'axios'
import { useEffect, useState } from 'react'
import { createContext } from 'react'
const BASE_URL = 'http://localhost:8080/users'


export const UserContext = createContext()

const UserProvider = ({ children }) => {
    const [users, setUsers] = useState([])

    const handleGetAllUsers = async () => {
        const res = await axios.get(BASE_URL)
        const data = res.data
        setUsers(data)
    }

    const handleDelete = async (userId) => {
        await axios.delete(`${BASE_URL}/${userId}`)
        const filteredUsers = users.filter((user) => user.id !== userId)
        setUsers(filteredUsers)
    }

    useEffect(() => {
        handleGetAllUsers()
    }, [])


    const providerValue = {
        users,
        setUsers,
        handleDelete
    }

    return (
        <UserContext.Provider value={providerValue}>
            {children}
        </UserContext.Provider>
    )
}

export default UserProvider