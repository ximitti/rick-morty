import { Component } from "react";
import "./App.css";
import Board from "./components/Board";
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
        <Board>
          <CharacterList list={this.state.characterList} />
        </Board>
      </div>
    );
  }
}

export default App;
