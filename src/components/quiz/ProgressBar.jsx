import React from 'react'

function ProgressBar({currentIndex, totalQue}) {
    const progress = ((currentIndex + 1) / totalQue) * 100;
    return (
        <div className='progress mb-3'>
            <div className='progress-bar' style={{ width: `${progress}%` }}>{Math.round(progress)}%</div>
        </div>
    )
}

export default ProgressBar
