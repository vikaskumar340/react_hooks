import { useState } from "react"
import useFetch from "../../hooks/useFetch"
function UsersList() {
    const [url, setUrl] = useState('https://jsonplaceholder.typicode.com/users');
    const {data, error, loading} = useFetch('https://jsonplaceholder.typicode.com/users');
    
    if(loading) return <div>Loading...</div>
    if(error) return <div>Error occured! </div>

    return (
        <>
        <ul>
        {data.map(user => (
                <li key={user.id}>{user.name} {error}</li>
        ))}
        </ul>
        </>
    )
}

export default UsersList
