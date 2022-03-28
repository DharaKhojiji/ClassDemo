import React, { Component } from "react";
import ChildComponents from "./ChildComponent";
import ChildComponentF from "./ChildComponentF";

class ParentComponent extends Component {
  constructor(props) {
    super(props);
    this.greetparent=this.greetparent.bind(this);

    this.state = {
      ParentName: "ram",
    };
  }
 
 
  greetparent(childName) {
    alert(`Hello ${this.state.ParentName} from ${childName}`);
  }
  render() {
    return (
      <div>
        {/* <ChildComponents greetHandler={this.greetparent}></ChildComponents> */}
        <ChildComponentF greetHandler={this.greetparent}></ChildComponentF>
      </div>
    );
  }
}
export default ParentComponent;
