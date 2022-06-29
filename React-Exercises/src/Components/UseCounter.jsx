
import { useState, useCallback } from "react"

export function UseCounter(initialValue = 0) {


    const [counter, setCounter] = useState(initialValue)

    const handleIncrement = useCallback(function handleIncrement() {
        setCounter(counter + 1)
    }, [])

    const handleDecrement = useCallback(function handleDecrement() {
        setCounter(counter - 1)
    }, [])

    const handleReset = useCallback(function handleReset() {
        setCounter((initialValue))
    }, [initialValue])

    return (

        {
            counter: counter,
            onIncrement: handleIncrement,
            onDecrement: handleDecrement,
            onReset: handleReset

        }

    )
}