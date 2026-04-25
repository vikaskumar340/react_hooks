function withAuth(WrappedComponent) {
    return function Protected(props) {
        const isLoggedIn = false;
        if(!isLoggedIn) return <h5>Please login to continue...</h5> 

        return <WrappedComponent {...props} />
    }
}

export default withAuth;