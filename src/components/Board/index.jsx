import { Component } from "react";
import "./style.css";

class Board extends Component {
  render() {
    return <div className="board">{this.props.children}</div>;
  }
}

export default Board;
