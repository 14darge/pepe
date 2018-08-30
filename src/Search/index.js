import * as React from "react";
import "./search.css";
import logo from "../images/spotify-logo.png";

class Search extends React.PureComponent {
  render() {
    return (
      <div className="col-2 column">
        <img src={logo} height="45px" className="logo" />
        <hr />
        <h2 className="search">Search</h2>
        <hr />
        <h2 className="browse">Browse</h2>
        <h2 className="your">Your Music</h2>
        <hr />
        <h2 className="recently">RECENTLY PLAYED</h2>
        <h2 className="discover">Discover Weekly</h2>
        <h2 className="playlist">PLAYLIST</h2>
        <h2 className="install">Install App</h2>
        <hr />
        <h2 className="user">User name</h2>
      </div>
    );
  }
}

export default Search;
