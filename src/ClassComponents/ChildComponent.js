import { Component } from "react/cjs/react.production.min";

class ChildComponents extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }
  render() {
    return (
      <>
        <button onClick={this.props.greetHandler}>Greet Component</button>
      </>
    );
  }
}
export default ChildComponents;
