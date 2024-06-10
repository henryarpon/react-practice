import { useState } from "react";


function Counter() { 
    const [ step, setStep ] = useState(1);
    const [ count, setCount ] = useState(0);

    function stepDecrement() {
        setStep( step => step - 1);
    }

    function stepIncrement() {
        setStep( step => step + 1);
    }

    function decrement() {
        setCount( count => count - step);
    }

    function increment() {
        setCount( count => count + step);
    }

    const date = new Date("June 10 2024");
    date.setDate(date.getDate() + count);

    return (
        <>  
            <div className="container">
                <button onClick={stepDecrement}>-</button>
                <span>Step: {step}</span>
                <button onClick={stepIncrement}>+</button>
            </div>

            <div className="container">
                <button onClick={decrement}>-</button>
                <span>Count: {count}</span>
                <button onClick={increment}>+</button>
            </div>

            {/* { count === 0 ? <p>Today is {date.toDateString()}</p> : <p>{count} day/s from today is {date.toDateString()}</p>} */}

            {/* <p>
                <span>{ count === 0 ? <p>Today is </p> : count > 0 ? <p> {count} day/s from today is </p> : <p>{ Math.abs(count) } day/s ago is </p>}</span><span>{date.toDateString()}</span>
            </p>  */}
            <p>
    <span>{count === 0 ? 'Today is' : count > 0 ? `${count} day/s from today is` : `${Math.abs(count)} day/s ago is`}</span>
    <span>{date.toDateString()}</span>
</p>

        </>
      
    )
}

export default Counter;