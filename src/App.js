import { Component } from "react";
import "./App.css";
import Board from "./components/Board";
import CharacterList from "./components/CharacterList";

class App extends Component {
  state = {
    info: { next: "", prev: "" },
    characterList: [],
  };

  componentDidMount = () => {
    fetch("https://rickandmortyapi.com/api/character/")
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          info: { next: data.info.next, prev: data.info.prev },
          characterList: data.results,
        });
      })
      .catch((error) => console.log(error));
  };

  nextPage = () => {
    fetch(this.state.info.next)
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          info: { next: data.info.next, prev: data.info.prev },
          characterList: data.results,
        });
      })
      .catch((error) => console.log(error));
  };

  prevPage = () => {
    fetch(this.state.info.prev)
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          info: { next: data.info.next, prev: data.info.prev },
          characterList: data.results,
        });
      })
      .catch((error) => console.log(error));
  };

  render() {
    return (
      <div className="App">
        <div>
          {this.state.info.prev && (
            <button onClick={this.prevPage}>prev</button>
          )}
          {this.state.info.next && (
            <button onClick={this.nextPage}>next</button>
          )}
        </div>
        <Board>
          <CharacterList list={this.state.characterList} />
        </Board>
      </div>
    );
  }
}

export default App;
