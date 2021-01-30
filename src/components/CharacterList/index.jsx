import { Component } from "react";
import Border from "../Border";
import Character from "../Character";

class CharacterList extends Component {
  render() {
    console.log(this.props);
    const { list } = this.props;
    console.log(list);
    return (
      <>
        {list.map((char) => (
          <Border>
            <Character key={char.id} char={char} />
          </Border>
        ))}
      </>
    );
  }
}

export default CharacterList;
