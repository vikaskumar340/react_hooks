
import { useState, useCallback, useEffect } from "react"
import Child from "./Child";
function Parent() {
    const [count, setCount] = useState(0);
    const handleClick = useCallback(() => {
        console.log('Parent btn clicked');
        // setCount((prev) => prev + 1 );
    },[count]);

     

    return (
        <div className="container mt-4">
            <p>Count : {count}</p>
            <button className="btn btn-sm btn-success ml-2" onClick={() => setCount((prev) => prev + 1)}>Increment</button>
            <Child click={handleClick}/>
        </div>
    )
}

export default Parent;
