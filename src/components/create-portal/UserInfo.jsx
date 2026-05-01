import React from 'react'

function UserInfo({userdata}) {
    return (
        <div className='mx-50 shadow mt-3 p-2'>
            <h2>Name: {userdata.name}</h2>
            <h2>Email {userdata.email}</h2>

        </div>
    )
}

export default UserInfo
