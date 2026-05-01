import { Component } from "react";
class ErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state = {hasError:false, error:null, errorInfo:null}
    }

    static getDerivedStateFromError(error) {
        return {hasError:true, error:error};
    }

    // logging 
    componentDidCatch(error, errorInfo) {
        console.log(`Error catch in Component -  ${error} : ${errorInfo}`);
    }

    render() {
        if(this.state.hasError) {
            return (
                <div className="bg-danger text-center p2 shadow mt-2 text-white">
                    <h2>Opps! Something went wrong</h2>
                    <p>{this.props.fallback || 'Default msg here...' }</p>
                    <p>{this.state.error.message}</p>
                </div>
            )
        }

        return this.props.children;
    }
}

export default ErrorBoundary;