import React, {useState} from 'react';
export default function Counter(){

    const [count, setCount] = useState(0)
    const incrementCount = () => {
        setCount(c=>c+1)
    }
    const resetCount = () => {
        setCount(c=>c=0)
    }
    const decrementCount = () => {
        setCount(c=>c-1)
    }
    return(
        <>
        <div className="container">
            <p className="counter-container">
                Counter: <br/>
                {count}
            </p>
            &nbsp;
                <button className="button-container-increment" onClick={incrementCount}>Increment</button>
                <button className="button-container-reset" onClick={resetCount}>Reset</button>
                <button className="button-container-decrement" onClick={decrementCount}>Decrement</button>
        </div>
        </>
    )
}