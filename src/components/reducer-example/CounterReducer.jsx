import { useReducer } from "react";
function CounterReducer() {
    function countReducer(state,action) {
        switch(action.type) {
            case "inrement" : 
                return {count: state.count + 1}
                break;
            case "decrement" :
                return {count: (state.count > 0 ) ? state.count - 1 : 0}
                break;
            case "reset" :
                  return {count: 0 }
            default :
                return state
        };
    }
    const [state, countDispatch] = useReducer(countReducer, {count: 0});

    console.log('vikas');
    return (
        <div className="container mt-4">
            <h5>Counter example with useReducer hook</h5>
            <b>Count {state.count}</b> <br />
            <button className="btn btn-success" onClick={() => countDispatch({type: "inrement"})}>+</button> &nbsp;
            <button className="btn btn-success" onClick={() => countDispatch({type: "decrement"})}>-</button> &nbsp;
            <button className="btn btn-info" onClick={() => countDispatch({type: "reset"})}>Reset</button> &nbsp;

        </div>
    )
}

export default CounterReducer;