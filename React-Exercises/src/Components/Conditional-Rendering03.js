import React, { Component } from 'react'

class WelcomeRendering03 extends Component {
 
  render() {
    console.log(this.props.name)
    return (
        <>
      
        {this.props.age > 18 && this.props.age < 65 && <p>Welcome, {this.props.name} {this.props.age}! </p>}
      </>
    )
  }
}

export default WelcomeRendering03