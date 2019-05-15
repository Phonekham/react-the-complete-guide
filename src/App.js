import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  state = {
    persons: [
      { name: 'Phone', age: 24 },
      { name: 'test', age: 25 }
    ]
  }
  switchNameHandler = (newName) => {
    this.setState({
      persons: [
        { name: newName, age: 24 },
        { name: 'testclick', age: 25 }
      ]
    })
  }
  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        { name: "newName", age: 24 },
        { name: event.target.value, age: 25 }
      ]
    })
  }
  render() {
    const styles = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: "pointer"
    };
    return (
      <div className="App">
        <h1>Hi</h1>
        <button style={styles} onClick={() => this.switchNameHandler("phonkham")}>Switch the Name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age} click={this.switchNameHandler.bind(this, 'Phonekham2')} changed={this.nameChangedHandler}>Hobbies: coding</Person>
      </div>
    );
  }
}

export default App;
