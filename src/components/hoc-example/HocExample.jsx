import React from 'react'
import Greeting from './Greeting'
import GreetingWithstyle from './GreetingWithstyle'
import PostWithData from './PostWithData'
import Dashboard from './Dashboard'
import withAuth from './withAuth'

const ProtectedDashboard = withAuth(Dashboard);
function HocExample() {
    return (
        <div className='container mt-4'>
            <Greeting name="Vikas Kumar"/>
            <GreetingWithstyle name="Chirag Sharma"/>

            {/* <PostWithData /> */}
            <ProtectedDashboard />

        </div>
    )
}

export default HocExample
