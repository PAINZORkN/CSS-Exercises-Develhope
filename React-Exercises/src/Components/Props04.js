import React, { Component } from 'react'

class WelcomeStrong extends Component {
  render() {
    return (
      <>
        <p>Welcome, <strong>{this.props.name}!</strong> </p>
      </>
    )
  }
}

export default WelcomeStrong