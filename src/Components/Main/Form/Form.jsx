import React, { Component } from "react";

class Form extends Component {
  constructor (props) {
    super(props)
    this.state = {}
  }
  onInput = e => {
    e.preventDefault();
    let name = document.querySelector("input[name='name']").value;
    let age = document.querySelector("input[name='age']").value;
    let email = document.querySelector("input[name='email']").value;
    let url = document.querySelector("input[name='url']").value;
    this.props.getUser({user:{"name":name, "age":age, "email": email, "url": url}});
    this.props.getCard({user:{"name":name, "age":age, "email": email, "url": url}});
    document.querySelector("input[name='name']").value = "";
    document.querySelector("input[name='age']").value = "";
    document.querySelector("input[name='email']").value = "";
    document.querySelector("input[name='url']").value = "";
  }
  render() {
    return( 
      <form onSubmit={event =>this.onInput(event)}>
        <h2>Tus datos</h2>
        <input 
          type="text" 
          name="name"id="_name" 
          placeholder="Name" 
          autoComplete="off"/><br/>
        <br/>
        <input 
          type="text" 
          name="age"id="_age" 
          placeholder="Age"
          autoComplete="off"/><br/>
        <br/>
        <input 
          onChange={()=> this.props.getUserName(document.querySelector("input[name='email']").value)} 
          type="text" name="email"id="_email" 
          placeholder="E-mail"
          autoComplete="off"/><br/>
        <br/>
        <input 
          type="text" 
          name="url" 
          id="_url" 
          placeholder="Url to image"
          autoComplete="off"/> <br/>
        <br/>
        <input 
          type="submit" 
          value="Send"/>
      </form>    
    )
    
  }
}

export default Form;
