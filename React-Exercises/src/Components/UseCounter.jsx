
import { useState, useCallback } from "react"

export function UseCounter(initialValue = 0) {


    const [counter, setCounter] = useState(initialValue)

    const handleIncrement = useCallback(() => {
        setCounter((prevState) => prevState + 1)
    }, [])

    const handleDecrement = useCallback(() => {
        setCounter((prevState) => prevState - 1)
    }, [])

    const handleReset = useCallback(() => {
        setCounter(initialValue)
    }, [initialValue])

    return {
        counter,
        onIncrement: handleIncrement,
        onDecrement: handleDecrement,
        onReset: handleReset
    }


}