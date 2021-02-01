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

  componentDidUpdate(prevProps, prevState) {
    console.log(prevProps);
    console.log(prevState);
  }

  handleFetch = (url) => {
    fetch(url)
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
    const { prev, next } = this.state.info;
    return (
      <div className="App">
        <h1>Personagens Rick and Morty</h1>
        <div>
          {
            <button
              disabled={prev ? false : true}
              onClick={() => this.handleFetch(prev)}
            >
              prev
            </button>
          }
          {
            <button
              disabled={next ? false : true}
              onClick={() => this.handleFetch(next)}
            >
              next
            </button>
          }
        </div>
        <Board>
          <CharacterList list={this.state.characterList} />
        </Board>
      </div>
    );
  }
}

export default App;
