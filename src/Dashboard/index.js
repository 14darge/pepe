import React from "react";
import Header from "../Header";
import Playing from "../Playing";
import Artist from "../Artist";
import Songs from "../SongsInfo";
import Search from "../Search";
//import "react-perfect-scrollbar/dist/css/styles.css";
//import PerfectScrollbar from "react-perfect-scrollbar";
import "./dashboard.css";

class Dashboard extends React.PureComponent {
  render() {
    return (
      <div id="main">
        <div>
          <Header />
        </div>
        <div className="container-fluid">
          <div className="row" id="main-row">
            <Search />
            <Artist />
            <Songs />
          </div>
        </div>
        <Playing />
      </div>
    );
  }
}

export default Dashboard;
