import React, { Component } from "react";

class Forms extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: " ",
      comments: " ",
      topics: " ",
    };
  }
  handleUserInput = (event) => {
    this.setState({
      username: event.target.value,
    });
  };

  handleComments = (event) => {
    this.setState({
      comments: event.target.value,
    });
  };
  handleTopics = (event) => {
    this.setState({
      topics: event.target.value,
    });
  };
  render() {
    return (
      <form>
        <div>
          <label>Username</label>
          <input
            type="text"
            value={this.state.username}
            onChange={this.handleUserInput}
          />
        </div>

        <div>
          <label>comments</label>
          <textarea
            value={this.state.comments}
            onChange={this.handleComments}
          ></textarea>
        </div>

        <div>
          <label>Topics</label>
          <select value={this.state.topics} onChange={this.handleTopics}>
            <option value="react">React</option>
            <option value="Angular">Angular</option>
            <option value="vue">vue</option>
          </select>
        </div>
      </form>
    );
  }
}
export default Forms;
