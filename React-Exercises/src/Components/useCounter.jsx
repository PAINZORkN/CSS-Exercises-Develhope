import { useState } from "react"

export function UseCounter(initialValue = 0) {

    const [counter, setCounter] = useState(initialValue)

    function handleIncrement() {
        setCounter(counter + 1)
    }

    function handleDecrement() {
        setCounter(counter - 1)
    }

    function handleReset() {
        setCounter((initialValue))
    }

    return (

        {
            counter: counter,
            onIncrement: handleIncrement,
            onDecrement: handleDecrement,
            onReset: handleReset

        }
    )
}