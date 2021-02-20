import React, { Component } from "react";
import {userContext} from "../../context/userContext";

class Header extends Component {
  constructor(props) {
    super(props)
  
    this.state = {}
  }
  
  render() {
    return <header>
      <div className="wrapper">
        <h1>Log In</h1>
        <userContext.Consumer>
          { context => <p>{context.userName}</p>}
        </userContext.Consumer>
      </div>
          </header>;
  }
}

export default Header;
