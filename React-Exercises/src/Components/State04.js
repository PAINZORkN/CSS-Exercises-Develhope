import React from "react";


class CounterDisplay extends React.Component {
  state = {
    count: this.props.initialValue ?? 0,
  };

  constructor(props) {
    super(props);
    setInterval(() => {
      this.setState((state) => {
        return {
          count: state.count + 1,
        };
      });
    }, 1000);
  }

  render() {
    return (
      <>
        <h1> Count: {this.state.count}</h1>
      </>
    );
  }
}

export default CounterDisplay;
