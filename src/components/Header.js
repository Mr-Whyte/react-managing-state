import React, {Component} from "react";
import Converter from './CurrencyConverter';
import Cards from './Win';
import "../App.css";

const styling = {
  fontFamily: "sans-serif",
  textAlign: "center",
  marginTop: "150px",
};

class Dropdown extends Component {
  constructor(props) {
    super(props);
    this.state = {selection: 0};
  }

  
  
 dropSelect = e => {
    this.setState({selection: e.target.value});
  };

  render() {
    const List = ["select","Currency converter", "Win!"];
    const options = ['',<Converter />, <Cards />];
    return (
      <div>
        <select onChange={this.dropSelect}>
          {List.map((x, i) => (
            <option value={i} key={i}>
              {x}
            </option>
          ))}
        </select>
        {options[this.state.selection]}
      </div>
    );
  }
}

const Header = () => (
  <div style={styling}>
    <Dropdown />
  </div>
);

export default Header;


