import React from "react";
import "./playing.css";
import "../images/fontello-fc8eb9a7/css/fontello.css";
import changos from "../images/changos.jpg";
import Vertical from "../Slider";
import Volumen from "../Slider";

class Playing extends React.PureComponent {
  render() {
    return (
      <div className="col-12 fixed-bottom">
        <div className="row">
          <div className="row">
            <div className="col-1">
              <img src={changos} width="83vh" height="83vh" id="mini-img" />
            </div>
          </div>
          <div className="row justify-content-start">
            <div className="col-1">
              <p className="mini-song">Cornerstone</p>
              <p className="mini-arts">Arctic Monkeys</p>
            </div>
          </div>
          <div className="col-9 player">
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
          <div className="col-1 vol">
            <Volumen />
          </div>
        </div>
      </div>
    );
  }
}

export default Playing;
