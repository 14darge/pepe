import React from "react";
import lana from "../images/lana.png";
import "./artist.css";

class Artist extends React.PureComponent {
  render() {
    return (
      <div className="col-2 artistColumn">
        <img
          src={lana}
          width="170px"
          height="170px"
          alt=""
          className="artistImage"
        />
        <h2 className="artistName">Lana del Rey</h2>
        <h3 className="albumName">Summer Bummer</h3>
        <h3 className="songsNumber">1 song</h3>
        <button className="playButton">PLAY NOW</button>
        <button className="followButton">FOLLOW</button>
      </div>
    );
  }
}

export default Artist;
