import React, { Component } from "react";

export class WelcomeRendering05 extends Component {
  render() {
    return (
      <>
        {/* {this.props.age > 18 && <p>Your age is {this.props.age}</p>}
        {this.props.age < 18 && <p>You are very young!</p>} */}

        {this.props.age > 18 ? (
          <p>Your age is {this.props.age}</p>
        ) : (
          <p>You are very young!</p>
        )}
      </>

    );
  }
}

export default WelcomeRendering05 
