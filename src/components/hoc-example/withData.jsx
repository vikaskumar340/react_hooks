import { useState, useEffect } from "react"
function withData(WrappedComponent, url) {
    return function EhancedComponent() {
        const [data, setData] = useState([]);
        useEffect(() => {
            fetch(url)
            .then(res => res.json())
            .then(data => setData(data));
        },[]);

        return <WrappedComponent posts={data} />
    }
}

export default withData;