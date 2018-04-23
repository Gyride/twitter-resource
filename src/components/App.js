import React, { Component } from 'react';
import '../stylesheets/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>App</h1>
        <input type="text" name="name-entry" placeholder="Company name" />
        <button>Search</button>
      </div>
    );
  }
}

export default App;
