import React from 'react'

function Child({ click }) {
    console.log("child rendered");
    return (
        <div>
            <button className='btn btn-warning' onClick={click}>Child Button</button>

        </div>
    )
}

export default React.memo(Child);
// export default Child;
// React.memo prevent re-render child component when any parent state changed...
