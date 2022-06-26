
import React from 'react';
import './App.css';
import Clock from './Components/Clock';

import { LanguageContext } from './Components/Context01';
import { DisplayLanguage } from './Components/Context02';

export class App extends React.Component {

  state = {
    language: 'en',
  }

  handleLanguageChange = (e) => {
    this.setState({
      language: e.target.value
    })
  }


  render() {
    return (
      <>
        <select value={this.state.language} onChange={this.handleLanguageChange}>
          <option value="en">ENGLISH</option>
          <option value="it">ITALIANO</option>
        </select>
        <LanguageContext.Provider value={this.state.language} >
          <Clock />
          <DisplayLanguage />
        </LanguageContext.Provider>


      </>
    )
  }
}

export default App;
