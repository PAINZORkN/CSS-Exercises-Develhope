import React from "react";
import FiltredList from "./Component/FilteredList";


const list = [
    { name: 'Jhon', age: 27, id: 1 },
    { name: 'Paul', age: 66, id: 2 },
    { name: 'Peter', age: 13, id: 3 },
]
function App() {
    return (
        <>
            <FiltredList list={list}/>
        </>
    )
}

export default App