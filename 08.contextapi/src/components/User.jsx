import { useContext } from "react"
import { UserContext } from './../context/UserContext';

const User = ({ user }) => {
    
    const { handleDelete } = useContext(UserContext)

    return (
        <div className="user">
            <h5>Name: {user.name}</h5>
            <p>Position: {user.usertype}</p>
            <button onClick={() => handleDelete(user.id)} className="btn btn-danger btn-sm">Delete</button>
        </div>
    )
}

export default User