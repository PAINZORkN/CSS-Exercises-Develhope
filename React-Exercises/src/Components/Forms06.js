import React, { createRef } from "react";

class UncontrolledLogin2 extends React.Component {
  _formRef = createRef();

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

  handleFocus = () => {
    this._formRef.current.focus();
  };

  render() {
    return (
      <>
        <form onSubmit={this.handleFormSubmit}>
          <h3>Uncontrolled Form FocusMode</h3>
          <input name="username" ref={this._formRef} autoFocus />
          <input name="password" type="password" />
          <input name="remember" type="checkbox" />

          <button type="submit">Login</button>
        </form>
      </>
    );
  }
}

export default UncontrolledLogin2;
