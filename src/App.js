import { Component } from "react";
import "./App.css";
import CharacterList from "./components/CharacterList";

class App extends Component {
  state = {
    characterList: [],
  };

  componentDidMount = () => {
    fetch("https://rickandmortyapi.com/api/character/")
      .then((response) => response.json())
      .then((data) => this.setState({ characterList: data.results }))
      .catch((error) => console.log(error));
  };

  render() {
    return (
      <div className="App">
        <CharacterList list={this.state.characterList} />
      </div>
    );
  }
}

export default App;
