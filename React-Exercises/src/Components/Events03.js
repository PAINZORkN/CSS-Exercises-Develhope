import React from "react";

class ClickTracker extends React.Component {
  state = {
    track: 0,
  };

  ClickTracker = (e) => {
    this.setState({
      track: e.target.value,
    });
  };

  render() {
    return (
      <div>
        <h1>This is the last button clicked : {this.state.track} </h1>
        <button onClick={this.ClickTracker} value={1}>
          Button 1
        </button>
        <button onClick={this.ClickTracker} value={2}>
          Button 2
        </button>
        <button onClick={this.ClickTracker} value={3}>
          Button 3
        </button>
      </div>
    );
  }
}

export default ClickTracker;
