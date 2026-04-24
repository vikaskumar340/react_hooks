import { useReducer } from "react"
import CounterReducer from "./CounterReducer";
import Formreducer from "./Formreducer";
export default function ReducerExample() {
    const toggleReducer = (state, action) => {
       return !state;
    }
    const [checked, toggle] = useReducer(toggleReducer, false);
    return (
        <>
        <div className="container mt-4">
            <input type="checkbox" 
            checked={checked}
            onChange={toggle}
            id="checkbox"
            />
            <label htmlFor="checkbox" className="ml-3">{checked ?  ' Checked' : ' Not checked'}</label>
        </div>
        
        <CounterReducer/>
        <hr />
        <Formreducer/>
        </>
    )
}
