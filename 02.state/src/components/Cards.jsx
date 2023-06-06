
import Card from './Card';
const Cards = ({ users }) => {
    console.log(users);
    return (
        <div className='cards'>
            {
                users.map((user) => (
                    <Card key={user.id} user={user} />
                )
                )
            }
        </div>
    )
}

export default Cards