import { useState } from "react";


function Counter() { 

    const [ count, setCount ] = useState(0);
    const [ stepValue, setStepValue ] = useState(1);
    const [ reset, setReset ] = useState(false);

    function decrement() {
        setCount( count => count - stepValue);
        setReset(true);
    }

    function increment() {
        setCount( count => count + stepValue);
        setReset(true);
    }

    function handleStepChange(e) {
        setStepValue(Number(e.target.value));
        setReset(true);
    }

    function handleReset() {
        setStepValue(1);
        setCount(0);
        setReset(false);
    }
    

    const date = new Date("June 10 2024");
    date.setDate(date.getDate() + count);

    return (
        <>  
            <div>
                <label htmlFor="volume">Volume:</label>
                <input type="range" id="volume" name="volume" min="0" max="100" value={stepValue} onChange={handleStepChange}></input>
                <span id="valueDisplay">{stepValue}</span>
            </div>

            <div className="container">
                <button onClick={decrement}>-</button>
                <span>Count: {count}</span>
                <button onClick={increment}>+</button>
            </div>

            <p>
                <span>
                    {count === 0 ? 'Today is' : count > 0 ? `${count} day/s from today is` : `${Math.abs(count)} day/s ago is`}
                </span>
                <span>{date.toDateString()}</span>
            </p>

            {!reset || <button onClick={handleReset}>Reset</button>}
        </>
      
    )
}

export default Counter;