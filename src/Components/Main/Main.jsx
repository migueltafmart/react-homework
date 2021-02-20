import "./Main.scss"
import React, { Component } from "react";
import Form from "./Form/Form";
import Card from "./Card/Card";
class Main extends Component {

  constructor(props) {
    super(props)
    this.state = {
      user: {
        name: "Amparo",
        age: "76",
        email: "aladelpueblo@gmail.com",
        url: "https://escudodigital.com/wp-content/uploads/2020/05/abuela-condenada-fotos-menores-696x522.jpg",
      },
    }
  }

  getUser = (child) => {
    this.props.getUser(child);
  }

  getUserName = (child) => {
    this.props.getUserName(child);
  }
  onUserInput = (e) => {
    this.setState(e)
  }
  render() {
    return <main className="Main">
      <Form 
        getUser={this.getUser} 
        getCard={this.onUserInput} 
        getUserName={this.getUserName}/>
      <Card 
        user={this.state.user}/>
    </main>;
  }
}

export default Main;
