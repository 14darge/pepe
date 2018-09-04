import React from "react";
import "./search.css";
import User from "../images/yao-ming.png";
import Artist from "../Artist";

class Search extends React.PureComponent {
  render() {
    return (
      <div className="col-2">
        <ul className="putada">
          <li id="search">Search</li>
          <hr />
          <li id="browse">Browse</li>
          <li id="your">Your Music</li>
          <hr />
          <li id="recent">RECENTLY PLAYED</li>
          <li id="discover">Discover Weekly</li>
          <li id="playlist">PLAYLIST</li>
          <li>Install App</li>
        </ul>
        <hr />
        <div className="row">
          <div className="col">
            <img src={User} id="picture" />
          </div>
          <div className="col">
            <p id="user-name">Yao Ming</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Search;
