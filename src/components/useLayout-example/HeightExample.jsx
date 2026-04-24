import React, {useLayoutEffect, useState, useRef} from 'react'

function HeightExample() {
    const boxRef = useRef();
    const [boxHeight, setBoxHeight] = useState(0);

    useLayoutEffect(() => {
        setBoxHeight(boxRef.current.clientHeight);
    })

    return (
        <div className='container mt-4'>
            <div ref={boxRef} style={{width:"200px", padding:"20px", background:"#eee"}}>
                Hello world! measurable this box size  
            </div>
            <p>Box Heght : {boxHeight}</p>

        </div>
    )
}

export default HeightExample
