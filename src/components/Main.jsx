import React, { Component } from 'react';
import '../stylesheets/Main.css';
import Profile from './Profile';

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      "0" : {
        pic: "https://vignette.wikia.nocookie.net/jjba/images/6/64/Tumblr_n8ydiaGTpq1twax17o7_1280.jpg/revision/latest?cb=20161226065348",
        name: "Jonathan \'Jojo\' Joestar",
        position: "Co-founder",
        company: "Speedwagon Foundation",
        email: "jooooooojo@gmail.com"
      },
      "1" : {
        pic: "https://megatengaku.files.wordpress.com/2013/03/1up-in-character-02-hero.jpg",
        name: "Tim Blake",
        position: "CTO",
        company: "Bethesda",
        email: "TimBlake17x@gmail.com"
      },
      "2" : {
        pic: "https://cdn.wikimg.net/strategywiki/images/9/92/SVCC_Terry.png",
        name: "Sebastian Jaramillo",
        position: "CTO",
        company: "Valve",
        email: "Sebast.Jar@gmail.com"
      },
      "3" : {
        pic: "http://pre00.deviantart.net/16d2/th/pre/f/2015/271/7/a/mitsuru_by_koyorin-d9b6tih.jpg",
        name: "Best Girl",
        position: "CEO",
        company: "SEES",
        email: "M.kirijo@kirijocorp.jp"
      },
      "4" : {
        pic: "http://www.fightersgeneration.com/np2/char2/char/geese-ngbust.jpg",
        name: "John Doe",
        position: "CEO",
        company: "Howard Connections",
        email: "Nyehx@gmail.com"
      },
      "5" : {
        pic: "http://vignette2.wikia.nocookie.net/dragonball/images/a/a5/Vegeta_saiyan_saga_by_alexiscabo1-d9ap0c0.png/revision/latest?cb=20160225075657",
        name: "Bob Norton",
        position: "VP of Human Resources",
        company: "Bungie",
        email: "huifex@gmail.com"
      },
      "6" : {
        pic: "https://d1u5p3l4wpay3k.cloudfront.net/godofwar_gamepedia_en/5/52/Kratos.png",
        name: "God of BOI",
        position: "VP of Human Resources",
        company: "Ragnarok",
        email: "godofBOI@nordic.com"
      },
      "7" : {
        pic: "http://vignette1.wikia.nocookie.net/madworld/images/f/f9/Mw-jack-cayman1.gif/revision/latest?cb=20090402040913",
        name: "Jayman",
        position: "CTO",
        company: "Digital Extremes",
        email: "madxworldxreigns@de.org"
      },
      "8" : {
        pic: "https://i.pinimg.com/736x/81/85/b1/8185b133eacf2b2f01a5d64a5d41f87a--soul-reaver--kain.jpg",
        name: "Selena Gomez",
        position: "VP of Human Resources",
        company: "Disney Channel",
        email: "timz@gmail.com"
      },
      "9" : {
        pic: "https://static2.comicvine.com/uploads/scale_small/1/12780/291130-20505-kenshiro.jpg",
        name: "Kamiya Miyamoto",
        position: "CTO",
        company: "Nintendo",
        email: "nani?!@gmail.com"
      }
    };
  }

  mapProfiles() {
    const Profiles = [];
    Object.values(this.state).map(function(data, i) {
      Profiles.push(<Profile profile={data} key={i}/>);
      return null;
    });
    return (
      <div className="ProfileContainer">
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
        <div class="wrapper">
        {this.mapProfiles()}
        </div>
      </div>
    );
  }
}

export default Main;
