import React from "react";
import "./songs.css";
import "react-perfect-scrollbar/dist/css/styles.css";
import PerfectScrollbar from "react-perfect-scrollbar";

class Songs extends React.PureComponent {
  renderSongs() {
    return this.props.displaySongs.map(info => (
      <div className="col-8" key={info.track}>
        <div className="row">
          <div className="col-1 columnInfo">
            <p className="title">{info.track}</p>
          </div>
          <div className="col-10 columnInfo">
            <p className="title">{info.song}</p>
            <div className="row">
              <p className="songInfo">{info.artist}</p>
            </div>
          </div>
          <div className="col-1 columnInfo">
            <p className="title">{info.duration}</p>
          </div>
        </div>
        <hr />
      </div>
    ));
  }

  render() {
    return <div>{this.renderSongs()}</div>;
  }
}

export default Songs;
