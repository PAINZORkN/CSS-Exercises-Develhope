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


/*
Create an InteractiveWelcome component that renders an input tag and the Welcome component. 
Pass the current content of the input tag to the name prop of the Welcome component. 
The input tag should be a controlled component.
*/