import React, { Component } from "react";
import "./App.css";
import { CardList } from "./components/Card-list/Card-list.component";
import { SearchBox } from "./components/search-box/search-box.component";
class App extends Component {
  constructor() {
    super(); //call constructor method`s in the class of component and has access to state object
    this.state = {
      monsters: [],
      searchField: "",
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((d) => d.json())
      .then((m) => this.setState({ monsters: m }))
      .catch(() => null);
  }
  //each time that render code of javascript use curlybrackets.
  // handleChange(e) {
  //   this.setState({ searchField: e.target.value });
  // }
  handleChange = (e) => {
    this.setState({ searchField: e.target.value });
  };
  render() {
    const { monsters, searchField } = this.state;
    const filteredMonster = monsters.filter((monster) =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );

    return (
      <div className="App">
        <h1>ROBOT ROLODEX</h1>
        <SearchBox
          placeholder={"search monster"}
          handleChange={this.handleChange}
        />
        <CardList monsters={filteredMonster} />
      </div>
    );
  }
}

export default App;
