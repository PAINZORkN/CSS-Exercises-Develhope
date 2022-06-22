import React from "react";
import Welcome from "./Welcome";
class InteractiveWelcome extends React.Component {
  state = {
    input: "",
  };

  handleInputValue = (e) => {
    this.setState({
      input: e.target.value,
    });
  };

  render() {
    return (
      <>
        <input value={this.state.value} onChange={this.handleInputValue} />

        <Welcome pippo={this.state.input} />
      </>
    );
  }
}

export default InteractiveWelcome;
//
