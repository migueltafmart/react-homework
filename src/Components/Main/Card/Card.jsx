import React, { Component } from "react";

class Card extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       
    }
  }
  
  render() {
    return <article>
      <h2>{this.props.user.name}</h2>
      <p>age: {this.props.user.age}</p>
      <p>email: {this.props.user.email}</p>
      <img src={this.props.user.url} alt={this.props.user.name}/>
      </article>;
  }
}

export default Card;
