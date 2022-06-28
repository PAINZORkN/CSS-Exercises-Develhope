import React, { useEffect, useState } from 'react';

const ClickCounterTwo = () => {
    const [counter, setCounter] = useState(0)
    const Counter = () => setInterval(() => {
        setCounter(counter + 1)
    }, 1000)

    useEffect(() => {
        console.log('rendered')
        Counter();

        return () => {
            console.log('Clearing interval');
            clearInterval(Counter());
        }
    })

    return (
        <>
            <h1>Counter: {counter}</h1>
        </>
    )
}

export default ClickCounterTwo