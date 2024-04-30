import { useState } from 'react';
import './Counter.css'
import CounterButton from './CounterButton';

export default function Counter() {

    const [count, setCount] = useState(0)

    function incrementParentCounter(by) {
        setCount(count + by)
    }

    function decrementParentCounter(by) {
        setCount(count - by)
    }

    function resetCounter() {
        setCount(0)
    }

    return (
        <>
            <span className="totalCount">{count}</span>
            <CounterButton by={1} incrementMethod={incrementParentCounter} decrementMethod={decrementParentCounter}/>
            <CounterButton by={2} incrementMethod={incrementParentCounter} decrementMethod={decrementParentCounter}/>
            <CounterButton by={5} incrementMethod={incrementParentCounter} decrementMethod={decrementParentCounter}/>
            <button className="resetButton"
                    onClick={resetCounter}>Reset</button>
        </>

    )
}