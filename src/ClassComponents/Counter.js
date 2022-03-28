import React, { Component } from "react";

class Counter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }
  buttonHandler = () => {
    // this.setState(
    //   {
    //     count: this.state.count + 1,
    //   },
    //   () => {
    //     console.log("callback value", this.state.count);
    //   }
    // );
    // console.log(this.state.count);
    this.setState(prevState =>({
      count:prevState.count+1
    }))
    console.log(this.state.count)
  };
  incrementFive =()=> {
    this.buttonHandler();
    this.buttonHandler();
    this.buttonHandler();
    this.buttonHandler();
    this.buttonHandler();
  }

  render() {
    return (
      <div>
        count value -{this.state.count}
        <button onClick={this.incrementFive}>Increment</button>
      </div>
    );
  }
}
export default Counter;
