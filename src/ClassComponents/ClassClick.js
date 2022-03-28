import React, { Component } from "react";

class ClassClick extends Component {

    buttonHandler=()=>
    {
        console.log("button is clicked");
    }
  render() {
    return (
      <div>
        <button onClick={this.buttonHandler}>click me</button>
      </div>
    );
  }
}
export default ClassClick;
