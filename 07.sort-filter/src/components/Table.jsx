import React from 'react'

const Table = ({ user }) => {
    return (
        <tr>
            <td>{user.id}</td>
            <td>{user.first_name} {user.last_name}</td>
            <td>{user.email}</td>
            <td>{user.gender}</td>
        </tr>
    )
}

export default Table