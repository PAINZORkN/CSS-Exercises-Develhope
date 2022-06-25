import React from 'react';
import { Container } from './Components/ComponentComposition01';
import { Container2 } from './Components/ComponentComposition02';
import './index.css'


export class App extends React.Component {
  render() {
    return (
      <>
        <Container>
          <h1>Hello World!</h1>
        </Container>

        <Container2 title="My Awesome Application">

        </Container2>
      </>

    )


  }
}

export default App;
