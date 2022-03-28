import React, { Component } from "react";

class Message extends Component {
    constructor()
    {
        super()
        this.state={
            message :"welcome visitor"
        }
    }
  render() {
      const buttonHandler=()=>
      {
        this.setState(
            {message:"thanks for subscribing"}
        )
      }
    return (
      <div>
        <h1>{this.state.message}</h1>
        <button onClick={buttonHandler}>SUBSCRIBE</button>
      </div>
    );
  }
}
export default Message;
