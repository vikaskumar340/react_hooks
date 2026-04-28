import React from 'react'
import { createPortal } from 'react-dom'
import PortalTest from './PortalTest'
import { useState, useEffect } from 'react'
import MyModal from './MyModal'

function CreatePortalExample() {
    const [isOpen, setIsOpen]  = useState(false);
       return (
        <div className='container mt-4' >
            <h1>Create Portal</h1>
            {createPortal(<h3 style={{padding:"10px", border:"2px solid black"}} className='container'> Create Portal example  </h3>, document.body)}

            <PortalTest />
            <button onClick={() => setIsOpen(true)}>Show Modal</button>

            <MyModal isOpen={isOpen} onClose={() => setIsOpen(false)}>
                <h3>Hello from modal</h3>
                <p>This is dummy txt</p>
            </MyModal>

        </div>
    )
}

export default CreatePortalExample
