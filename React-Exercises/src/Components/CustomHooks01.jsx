import { useCounter } from "./useCounter"



export function HookCounter({ initialValue = 0 }) {


    const { counter, onIncrement, onDecrement, onReset } = useCounter(initialValue)
    return (
        <div>
            <h2>Counter : {counter}</h2>
            <button onClick={onIncrement}>Increment</button>
            <button onClick={onDecrement}>Decrement</button>
            <button onClick={onReset}>Reset</button>

        </div>

    )
}

/*
Create a custom hook useCounter that keeps track of the state of a counter,
 and returns the current value of the counter 
 as well as three functions to increment, decrement and reset the counter.
*/