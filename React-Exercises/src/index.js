import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
// import { Provider } from 'react-redux';
import { store } from './Components/Redux02'
import { decrement, increment, reset } from './Components/Redux01';
import { addUser } from './Components/Redux03';


const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <Provider>
//     <App />
//   </Provider>
// );


store.subscribe(() => {
    console.log(store.getState())
})

store.dispatch(increment(5))
store.dispatch(decrement(3))
store.dispatch(decrement(6))
store.dispatch(reset())

store.dispatch(addUser({
    id: 1, name: 'Jimmy', age: 37
}))



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
