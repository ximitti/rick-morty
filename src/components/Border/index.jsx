import { Component } from "react";
import "./style.css";

class Border extends Component {
  render() {
    return <div className="border">{this.props.children}</div>;
  }
}

export default Border;
