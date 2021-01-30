import { Component } from "react";
import "./style.css";

class Character extends Component {
  render() {
    const { name, species, image } = this.props.char;
    return (
      <div className="card">
        <div>
          <img className="image" src={image} alt={name} />
        </div>
        <div className="name">{name}</div>
        <div className="specie">{species}</div>
      </div>
    );
  }
}

export default Character;
