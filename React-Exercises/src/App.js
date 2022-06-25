
import React from 'react';
import './App.css';
import { TodoList } from './Components/RenderProps01';

export class App extends React.Component {

  render() {
    return (

      <TodoList>
        render={(state) => {

          const [items] = state

          return (
            <div>
              The current input is : {items}
            </div>
          )
        }}

      </TodoList>


    )
  }
}

export default App;
