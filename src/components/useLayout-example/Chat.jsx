import React, {useRef, useLayoutEffect} from 'react'

function Chat() {
    const chatRef = useRef(null);
    useLayoutEffect(() => {
        chatRef.current.scrollTop = chatRef.current.scrollHeight;
    },[]);
    return (
        <div ref={chatRef} style={{height:"150px", border:"1px solid #ccc",overflowY:"scroll", padding:"5px"}}>
            <p>Hello msg 1</p>
            <p>Hello msg 2</p>
            <p>Jello msg 3</p>
            <p>Hello msg 4</p>
            <p>Hello msg 5</p>
            <p>Jello msg 6</p>

        </div>
    )
}

export default Chat
