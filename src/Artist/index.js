import React from "react";
import changos from "../images/changos.jpg";
import "./artist.css";

class Artist extends React.PureComponent {
  render() {
    return (
        <div className="col-2 artistColumn">
          <img
            src={changos}
            width="180vh"
            height="180vh"
            alt=""
            className="artistImage"
          />
          <h2 className="artistName">Arctic Monkeys</h2>
          <h3 className="albumName">Humbug</h3>
          <h3 className="songsNumber">10 songs</h3>
          <button className="playButton">PLAY NOW</button>
          <button className="followButton">FOLLOW</button>
        </div>
    );
  }
}

export default Artist;
