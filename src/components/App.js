import React, { Component } from "react";
import "./App.css";
import Word from "./Word";

class App extends Component {
  state = {
    words: [],
    isLoaded: false,
  };

  fetchData = () => {
    fetch("data/words.json")
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          words: data.words,
          isLoaded: true,
        });
      });
  };

  componentDidMount() {
    setTimeout(this.fetchData, 3000);
  }

  render() {
    const words = this.state.words.map((word) => (
      <Word key={word.id} english={word.en} polish={word.pl} />
    ));

    return this.state.isLoaded ? <ul>{words}</ul> : <p>Wczytuję dane...</p>;
  }
}

export default App;
