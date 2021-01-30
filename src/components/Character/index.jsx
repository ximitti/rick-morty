import { Component } from "react";

class Character extends Component {
  render() {
    return <div className="border">{this.props.name}</div>;
  }
}

export default Character;
