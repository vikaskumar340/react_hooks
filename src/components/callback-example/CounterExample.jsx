
import { useState, useCallback } from "react"
function CounterExample() {
    const [count, setCount] = useState(0);
    const increment = useCallback(() => {
        setCount((prev) => prev + 1 );
    },[]);

    return (
        <div className="container">
            <p>Count : {count}</p>
            <button className="btn btn-sm btn-success" onClick={increment}>Increment</button>

        </div>
    )
}

export default CounterExample
