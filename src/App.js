import React, { Component } from 'react';
import classes from './App.css';
// import Radium, { StyleRoot } from 'radium';
import Person from './Person/Person'

class App extends Component {
  state = {
    persons: [
      { id: 'wewe3', name: 'Phone', age: 24 },
      { id: 'wewew', name: 'test', age: 25 }
    ],
    showPersons: false
  }
  switchNameHandler = (newName) => {
    this.setState({
      persons: [
        { name: newName, age: 24 },
        { name: 'testclick', age: 25 }
      ]
    })
  }

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id
    });
    const person = {
      ...this.state.persons[personIndex]
    };
    person.name = event.target.value;
    const persons = [...this.state.persons]
    persons[personIndex] = person;
    this.setState({ persons: persons })
  }

  deletePersonHandler = (personIndex) => {
    // const persons = this.state.persons;
    const persons = [...this.state.persons]
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow })
  }

  render() {
    const styles = {
      backgroundColor: 'green',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: "pointer",
      ':hover': {
        backgroundColor: 'lightgreen',
        color: 'black'
      }
    };
    let persons = null;
    let btnClass = '';
    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person click={() => this.deletePersonHandler(index)}
              name={person.name}
              age={person.age}
              key={person.id}
              changed={(event) => this.nameChangedHandler(event, person.id)} />
          })}
          {/* <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
          <Person name={this.state.persons[1].name} age={this.state.persons[1].age} click={this.switchNameHandler.bind(this, 'Phonekham2')} changed={this.nameChangedHandler}>Hobbies: coding</Person> */}
        </div>
      );
      styles.backgroundColor = 'red';
      btnClass = classes.Red;
      // styles[':hover'] = {
      //   backgroundColor: 'salmon',
      //   color: 'black'
      // }
    }
    const assignedclasses = [];
    if (this.state.persons.length <= 2) {
      assignedclasses.push('red')
    }
    if (this.state.persons.length <= 1) {
      assignedclasses.push('bold')
    }
    return (

      <div className="App">
        <h1 className={assignedclasses.join(' ')}>Hi</h1>
        <button className={btnClass} style={styles} onClick={this.togglePersonsHandler}>Switch the Name</button>
        {persons}
      </div>

    );
  }
}

export default App;
