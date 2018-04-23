import React, { Component } from 'react';
import '../stylesheets/Portrait.css';

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="Profile">
        <img src={this.props.profile.pic} alt="ProfilePicture"/>
        <span>{this.props.profile.name}</span>
        <span>{this.props.profile.position} of {this.props.profile.company}</span>
        <span>{this.props.profile.email}</span>
      </div>
    );
  }
}

export default Profile;