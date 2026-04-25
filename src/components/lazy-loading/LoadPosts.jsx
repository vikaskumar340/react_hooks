import { useState, useEffect } from "react"

function LoadPosts() {
    const [posts, setPost] = useState([]);
    useEffect(() => {
        const fetchPosts = async () => {
            await fetch('https://jsonplaceholder.typicode.com/posts')
            .then(res => res.json())
            .then(data => setPost(data));
        }
        fetchPosts();
    },[]);
    return (
        <div>
            <h1>Posts</h1>
            <ul>
                {posts.map(({id, title, body }) => (
                    <li key={id}>
                        <h3>{title}</h3>
                        <p>{body}</p>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default LoadPosts
