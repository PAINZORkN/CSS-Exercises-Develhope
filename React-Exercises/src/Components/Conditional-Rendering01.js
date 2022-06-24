import React, { Component } from 'react'

class WelcomeRendering01 extends Component {
 
  render() {
    console.log(this.props.name)
    return (
        <>
      
        {this.props.age > 18 && <p>Welcome, {this.props.name} {this.props.age}! </p>}
      </>
    )
  }
}

export default WelcomeRendering01