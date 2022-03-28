import React, { Component } from "react";

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      address: "",
    };
  }
  handleUsername = (event) => {
    this.setState({ username: event.target.value }) ;
  };

  handleAddress=(event)=>
  {
      this.setState({address:event.target.value});  };

handleForm=(event)=>
{
    alert(`${this.state.username}..${this.state.address}`)
    event.preventDefault();
}
  render() {
    return (
      <div>
        <form onSubmit={this.handleForm}>
          <div>
            <label>username</label>
            <input
              type={"text"}
              value={this.state.username}
              onChange={this.handleUsername}
            ></input>
          </div>

          <div>
            <label>Address</label>
            <textarea
              value={this.state.address}
              onChange={this.handleAddress}
            ></textarea>
          </div>

          <button>submit</button>
        </form>
      </div>
    );
  }
}
export default Form;
