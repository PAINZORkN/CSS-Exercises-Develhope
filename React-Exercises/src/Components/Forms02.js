import React from "react";

class Login extends React.Component {
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

  render() {
    return (
      <>
        <h1> My Form02</h1>
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
      </>
    );
  }
}

export default Login;
