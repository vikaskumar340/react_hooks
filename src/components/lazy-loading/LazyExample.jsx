import {useState} from 'react'
// import LoadPosts from './LoadPosts';
// const LoadPosts = lazy(() => import("./LoadPosts"));

function LazyExample() {
    const [showPost, setShowPost] = useState(false);
    return (
        <div className='container'>
            <button onClick={() => setShowPost(true)}>Show Posts</button>

            {showPost && (
                <LoadPosts />
            )}

        </div>
    )
}

export default LazyExample
