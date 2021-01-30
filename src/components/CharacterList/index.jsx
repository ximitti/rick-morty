import { Component } from "react";
import Character from "../Character";

class CharacterList extends Component {
  render() {
    console.log(this.props);
    const { list } = this.props;
    console.log(list);
    return (
      <div>
        {list.map((char) => (
          <Character key={char.id} name={char.name} />
        ))}
      </div>
    );
  }
}

export default CharacterList;
