import { useEffect, useState } from "react";
export default function useFetch(url) {
    const [data, setData]       = useState(null);
    const [error, setError]     = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchData() {
            try{
                const getData = await fetch(url);
                const resData = await getData.json();
                setData(resData);
            }catch(err){
                setError(err);
            }finally {
                setLoading(false);
            }
        }
        fetchData();
    },[url]);

    return {data, error, loading};
}