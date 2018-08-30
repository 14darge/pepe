import React from "react";
import "./songs.css";

class Songs extends React.PureComponent {
  render() {
    return (
      <div className="col-8 songsColumn">
        <div className="row">
          <div className="col-1 columnInfo">
            <p className="title">1.</p>
          </div>
          <div className="col-10 columnInfo">
            <p className="title">Summer Bummer</p>
            <div className="row">
              <p className="songInfo">Lana del Rey ft. Asap Rocky, Playboi Carti</p>
            </div>
          </div>
          <div className="col-1 columnInfo">
            <p className="title">4:31</p>
          </div>
        </div>
        <hr />
      </div>
    );
  }
}

export default Songs;
