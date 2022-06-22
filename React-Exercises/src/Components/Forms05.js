import React from "react";

class UncontrolledLogin extends React.Component {
  handleFormSubmit = (e) => {
    e.preventDefault();

    const username = e.target.elements.username.value;
    const password = e.target.elements.password.value;
    const remember = e.target.elements.remember.value;

    console.log({
      username,
      password,
      remember,
    });
  };

  render() {
    return (
      <>
        <form onSubmit={this.handleFormSubmit}>
          <h3>Uncontrolled Form</h3>
          <input name="username" />
          <input name="password" type="password" />
          <input name="remember" type="checkbox" />

          <button type="submit">Login</button>
        </form>
      </>
    );
  }
}

export default UncontrolledLogin;
