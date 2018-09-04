import * as React from "react";
import "./header.css";
import logo from "../images/spotify-logo.png";
import face from "../images/yao-ming.png";

class Header extends React.PureComponent {
  render() {
    return (
        <div className="container-fluid fixed-top">
          <div className="row" id="top">
            <div className="col-2">
              <img src={logo} height="50vh" id="logo"/>
            </div>
            <div className="col-10">
              <h3 id="topMessage">DISCOVER NEW MUSIC</h3>
            </div>
          </div>
        </div>
    );
  }
}

export default Header;
