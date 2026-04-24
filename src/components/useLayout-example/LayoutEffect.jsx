import {useEffect, useLayoutEffect} from 'react'

function LayoutEffect() {
    useEffect(() => {
        console.log("useEffect trigged");
    },[]);

    useLayoutEffect(() => {
        console.log("useLayoutEffect trigged");
    }, []);
    return (
        <div>
            <p>Example of UseLayoutEffect hook</p>


        </div>
    )
}

export default LayoutEffect