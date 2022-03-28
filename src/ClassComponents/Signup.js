import React, { Component } from "react";

const Dialog = (props) => {
  return (
    <>
      <FancyBorder color="blue">
        <h1 className="Dialog-title">{props.title}</h1>
        <p className="Dialog-message">{props.message}</p>
        {props.children}
      </FancyBorder>
    </>
  );
};

function FancyBorder(props) {
  return (
    <div className={"FancyBorder FancyBorder-" + props.color}>
      {props.children}
    </div>
  );
}

class Signup extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSignup = this.handleSignup.bind(this);
    this.state = { login: "" };
  }
  render() {
     // console.log('hi ',31)
    return (
      <div>
        <Dialog
          title="its example of composition"
          message="how should we refer to you?"
        >
          <input value={this.state.login} onChange={this.handleChange}></input>
          <button onClick={this.handleSignup}>Sign me up!</button>
        </Dialog>
      </div>
    );
  }

  handleChange = (event) => {
    this.setState({ login: event.target.value });
    event.preventDefault();

  };
  handleSignup = () => {
    alert(`welcome aboard,${this.state.login}!`);
  };
}

export default Signup;
