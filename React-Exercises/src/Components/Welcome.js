import React from "react";

class Welcome extends React.Component {
  state = {
    track: this.props.pippo,
  };

  render() {
    return (
      <>
        <p>Ciao {this.state.track}</p>
        <button onClick={() => console.log(this.state.track)}>Click me</button>
      </>
    );
  }
}

export default Welcome;
