import React, { useState } from "react"

export function ClickCounter() {

    const [count, setCount] = useState(0)

    function handleClick() {
        setCount(count + 1)
    }

    return (
        <div>
            <h1> Current count:{count} </h1>
            <button onClick={handleClick}>Increment</button>

        </div>
    )
}