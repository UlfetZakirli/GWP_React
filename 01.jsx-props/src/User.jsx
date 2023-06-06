
const User = (props) => {
    const { getUsersById } = props

    return (
        // <button onClick={getUsers}>Show users</button>
        <button onClick={() => getUsersById()}>Show users</button>
    )
}

export default User