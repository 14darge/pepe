import * as React from "react";
import "./search.css";
import logo from "../images/spotify-logo.png";
import face from "../images/yao-ming.png";

class Search extends React.PureComponent {
  render() {
    return (
      <div className="col-2 column">
        <img src={logo} height="60px" className="logo" />
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
        <div className="row">
        <div className="col-3">
        <img src={face} height="66px" className="userImage"/>
        </div>
        <div className="col-8">
        <h2 className="user">Yao Ming</h2>
        </div>
        </div>
      </div>
    );
  }
}

export default Search;
