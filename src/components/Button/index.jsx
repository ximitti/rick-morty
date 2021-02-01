import { Component } from "react";
import "./style.css";

class Button extends Component {
  render() {
    const { disabled, func, text } = this.props;
    return (
      <button
        className="button"
        disabled={disabled ? false : true}
        onClick={func}
      >
        {text}
      </button>
    );
  }
}

export default Button;
