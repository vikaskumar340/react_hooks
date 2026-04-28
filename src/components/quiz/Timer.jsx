import React from 'react'

function Timer({time}) {
    return (
        <div className='contaner mt-4'>
            <div className='alert alert-info text-center fw-bold'>Time left {time}s</div>
        </div>
    )
}

export default Timer
