import React, { Component } from 'react';
import '../stylesheets/Main.css';
import Profile from './Profile';

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      "0" : {
        pic: "",
        name: "Sebastian Jaramillo",
        position: "CTO",
        company: "Valve",
        email: "Sebast.Jar@gmail.com"
      },
      "1" : {
        pic: "",
        name: "Tim Blake",
        position: "CTO",
        company: "PornHub",
        email: "TimBlake17x@gmail.com"
      }
    };
  }

  mapProfiles() {
    const Profiles = [];
    Object.values(this.state).map(function(data, i) {
      Profiles.push(<Profile profile={data} key={i}/>);
    });
    return (
      <div className="profiles">
        {Profiles}
      </div>
    )
  }

  render() {
    return (
      <div className="Main">
        <h1>Resilient Resource App</h1>
        <div className="form">
          <input type="text" name="name-entry" placeholder="Company Name" />
          <button>Search</button>
        </div>
        {this.mapProfiles()}
      </div>
    );
  }
}

export default Main;