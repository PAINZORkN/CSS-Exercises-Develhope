import React from "react";

class Login3 extends React.Component {
  state = {
    username: "",
    password: "",
    remember: false,
  };

  handleValue = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    const password = e.target.password

    this.setState({
      [name]: value,
      [password]: value,
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

  handleReset = () => {
    this.setState({
      username: "",
      password: "",
      remember: false,
    });
  };

  render() {
    return (
      <>
        <h1> My Form04</h1>
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
          type="submit"
          onClick={this.onLogin}
          disabled={
            this.state.username === "" || this.state.password === "" ? true : false
          }
        >
          Click me!
        </button>

        <div>
          <button name="button-reset" type="button" onClick={this.handleReset}>
            RESET
          </button>
        </div>
      </>
    );
  }
}

export default Login3;
