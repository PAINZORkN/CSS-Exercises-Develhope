import React, { Component } from 'react'

class Welcome extends Component {
  render() {
    return (
      <>
        <p>Welcome, {this.props.name} </p>
      </>
    )
  }
}

export default Welcome

/*
Modify the Welcome component so that it receives a second prop called age and renders it below the 'welcome' message, within a p tag after the message "Your age is ".
*/