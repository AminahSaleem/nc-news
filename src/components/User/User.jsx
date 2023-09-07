import {useState, useEffect} from 'react'
import { getUsers } from '../../utils/api'

const User = () => {
    const [users, setUsers]= useState([])
    const [loading, setLoading]= useState(false)
    const [error, setError] = useState(false)

    useEffect(() => {
        setLoading(true)
        setError(false)

        getUsers()
        .then((data) => {
            setUsers(data)
            setLoading(false)
        })
        .catch((error)=> {
            setError(tue)
        })
    },[])

    if (loading) return <p>Loading users...</p>
    if (error) return <p>Unable to load users</p>

return (
    <div>
        <h2>User List</h2>
        <ul>
            {users.map((user) => {
                return <li key={user.id}>
                    <p>Name: {user.name}</p>
                    <p>Username: {user.username}</p>
                    <img id="user-img" src={user.avatar_url} />
                </li>
            })}
        </ul>
    </div>
)

}

export default User