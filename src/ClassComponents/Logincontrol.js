
import React from "react";
import Login from "./Login";
import Logout from "./Logout";
import Greeting from "./Greeting";

class Logincontrol extends React.Component {
  constructor(props) {
    super(props);
    this.handleLogin=this.handleLogin.bind(this);
    this.handleLogout=this.handleLogout.bind(this);
    this.state={isLoggedIn:true};
 }
  

  handleLogin() {
    this.setState({ isLoggedIn: true });
  }
  handleLogout() {
    this.setState({ isLoggedIn: false });
  }
  render() {
    let button;
    const isLoggedIn = this.state.isLoggedIn;

    if (isLoggedIn) {
      button = <Login onclick={this.handleLogin} />;
    } else {
      button = <Logout onclick={this.handleLogout} />;
    }
    return (
      <>
        <Greeting isLoggedIn={isLoggedIn} />
        {button}
      </>
    );
  }
}
export default Logincontrol;
