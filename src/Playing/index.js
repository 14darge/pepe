import React from "react";
import "./playing.css";
import "../images/fontello-fc8eb9a7/css/fontello.css";

class Playing extends React.PureComponent {
  render() {
    return (
      <div className="col-12">
        <div className="row justify-content-center">
          <i className="icon-rewind-outline my-icon" />
          <i className="icon-stop my-icon" />
          <i className="icon-play-outline my-icon" />
          <i className="icon-pause-outline my-icon" />
          <i className="icon-fast-fw-outline my-icon" />
        </div>
        <div className="row justify-content-center">
          <div className="progress">
            <div
              className="progress-bar"
              role="progressbar"
              aria-valuenow="70"
              aria-valuemin="0"
              aria-valuemax="100"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Playing;
