import React from "react";

class Login2 extends React.Component {
  state = {
    username: "",
    password: "",
    remember: false,
  };

  handleValue = (e) => {
    const value = e.target.value;
    const name = e.target.name;

    this.setState({
      [name]: value,
      username: value,
    });
  };

  handleCheckboxChange = (e) => {
    const name = e.target.name;
    const checked = e.target.checked;

    this.setState({
      [name]: checked,
    });
  };

  onLogin = (e) => {
    e.preventDefault();
    console.log(this.state);
  };

  render() {
    return (
      <>
        <h1> My Form</h1>
        <input
          name="username"
          type="text"
          value={this.state.username}
          onChange={this.handleValue}
        />
        <input
          name="password"
          type="password"
          value={this.state.password}
          onChange={this.handleValue}
        />
        <input
          name="remember"
          type="checkbox"
          checked={this.state.remember}
          onChange={this.handleCheckboxChange}
        />

        <button
          name="button"
          type="button"
          onClick={this.onLogin}
          disabled={
            this.state.username === "" || this.state.password === ""
              ? true
              : false
          }
        >
          Click me!
        </button>
      </>
    );
  }
}

export default Login2;
