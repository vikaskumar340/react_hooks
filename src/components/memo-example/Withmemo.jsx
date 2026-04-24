import {useState, useMemo} from 'react'

function Withmemo() {
    const [count, setCount] = useState(0);
    const [text, setText] = useState("");

    function highCalculation(num) {
        let total = 0;
        for(let i=0; i < 1000000000; i++) {
            total += i;
        }
        return total + num;
    }

    const totalcalResult = useMemo(() => highCalculation(count), [count]);

    return (
        <div className='container mt-4'>
            <h4>Calculation result : {totalcalResult}</h4>
            <h5>Count {count}</h5>

            <button className='btn btn-success btn-sm' onClick={() => setCount(count + 1) } >Increase</button>
            <input type="text" value={text} onChange={(e) => setText(e.target.value)} />

        </div>
    )
}

export default Withmemo
