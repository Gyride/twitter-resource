import React, { Component } from 'react';
import '../stylesheets/Main.css';
import Api from './Api';

class Main extends Component {

  render() {
    return (
      <div className="Main">
        <h1>App</h1>
        <input type="text" name="name-entry" placeholder="Company name" />
        <button>Search</button>
        <Api />
      </div>
    );
  }
}

export default Main;
