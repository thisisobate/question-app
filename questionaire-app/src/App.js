import React, { Component } from "react";
import "./App.css";
import AddQuestion from "./components/AddQuestion";
import Navbar from "./components/Navbar";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <AddQuestion />
      </div>
    );
  }
}

export default App;
