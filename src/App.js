import { Component } from "react";
import "./App.css";
import Board from "./components/Board";
import CharacterList from "./components/CharacterList";
import Button from "./components/Button";

class App extends Component {
  state = {
    info: { next: "", prev: "" },
    characterList: [],
    changePage: { prev: false, next: false },
  };
  API = "https://rickandmortyapi.com/api/character/";

  componentDidMount = () => {
    this.handleFetch(this.API);
  };

  componentDidUpdate(prevProps, prevState) {
    const { prev, next } = this.state.changePage;
    if (prev) {
      this.handleFetch(this.state.info.prev);
    }

    if (next) {
      this.handleFetch(this.state.info.next);
    }
  }

  handleFetch = (url) => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          info: { next: data.info.next, prev: data.info.prev },
          characterList: data.results,
          changePage: { prev: false, next: false },
        });
      })
      .catch((error) => console.log(error));
  };

  handlePrev = () => {
    const { changePage } = this.state;
    const { prev } = changePage;
    this.setState({ changePage: { ...changePage, prev: !prev } });
  };

  handleNext = () => {
    const { changePage } = this.state;
    const { next } = changePage;
    this.setState({ changePage: { ...changePage, next: !next } });
  };

  render() {
    const { prev, next } = this.state.info;
    return (
      <div className="App">
        <h1>Personagens Rick and Morty</h1>
        <div>
          <Button disabled={prev} func={this.handlePrev} text={"prev"} />
          <Button disabled={next} func={this.handleNext} text={"next"} />
        </div>
        <Board>
          <CharacterList list={this.state.characterList} />
        </Board>
      </div>
    );
  }
}

export default App;
