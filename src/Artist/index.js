import React from "react";
import tessa from "../images/tessa.jpg";
import "./artist.css";

class Artist extends React.PureComponent {
  render() {
    return (
      <div className="col-2 artistColumn">
        <img
          src={tessa}
          width="170px"
          height="170px"
          alt=""
          className="artistImage"
        />
        <h2 className="artistName">Tessa Violet</h2>
        <h3 className="albumName">Crush Single</h3>
        <h3 className="songsNumber">1 song</h3>
        <button className="playButton">PLAY NOW</button>
      </div>
    );
  }
}

export default Artist;
