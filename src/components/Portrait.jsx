import React, { Component } from 'react';
import '../stylesheets/Portrait.css';

class Portrait extends Component {
  render() {
    return (
      <div className="Portrait">
        <img src={profile.pic} className="App-logo" alt="logo" />
        <span>{profile.name}, {profile.position} of {profile.company}</span>
        <span>{profile.twitterHandle}</span>
         <span>{profile.email}</span>
      </div>
    );
  }
}
  
export default Portrait;