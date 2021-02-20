import { Component } from "react";
import "./App.css";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Main from "./Components/Main/Main";
import { userContext } from "./context/userContext";

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      user: {
        name: "Amparo",
        age: "24",
        email: "aladelpueblo@gmail.com",
        url: "https://escudodigital.com/wp-content/uploads/2020/05/abuela-condenada-fotos-menores-696x522.jpg",
      },
      userName:'',
    };
  }

  getUser = (childData) => {
    this.setState(childData);

  };
  getUserName = (childData =>{
    this.setState({userName: childData})
  })
  render() {
    return (
      <>
        <userContext.Provider value={this.state}>
          <Header />
        </userContext.Provider>
        <Main getUser={this.getUser} getUserName={this.getUserName}/>
        <Footer />
      </>
    );
  }
}

export default App;
