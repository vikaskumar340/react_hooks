import {useState, useMemo} from 'react'
import React from 'react';

function Parent() {
    const [count, setCount] =  useState(0);
    const user = useMemo(() => ({name:'Vikas Kumar', mob:1231231231}), []);
    console.log('Perent rendered');
    return (
        <div className='container mt-4'>
            <p>Parent count {count}</p>
            <button className='btn btn-success btn-sm' onClick={() => setCount(count + 1) } >Increase</button>
            <Child user={user}/>

        </div>
    )
}

// will re render with parent component 
/* 
function Child({user}) {
    console.log("child render");
    return (
        <>
        <div>
            User NAme : {user.name}
        </div>
        </>   
    )
}
*/

// prevent unnecessory re render 
const Child = React.memo(({user}) => {
    console.log("child render");
    return ( <p>Username : {user.name}</p>)
})

export default Parent
