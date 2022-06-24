import React, { Component } from 'react'

class WelcomeRendering04 extends Component {
 
  render() {
    console.log(this.props.name)
    return (
        <>
      
        {this.props.age > 18 && this.props.age < 65 && <p>Welcome, {this.props.name} {this.props.age}! </p>}
      </>
    )
  }
}

export default WelcomeRendering04