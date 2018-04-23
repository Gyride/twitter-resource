import React, { Component } from 'react';
import '../stylesheets/Portrait.css';

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="Portrait">
        <img src={this.props.profile.pic}/>
        <span>{this.props.profile.name}, {this.props.profile.position} of {this.props.profile.company}</span>
        <span>{this.props.profile.email}</span>
      </div>
    );
  }
}

export default Profile;