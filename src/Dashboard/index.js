import React from "react";
import Search from "../Search";
import Playing from "../Playing";
import Artist from "../Artist";
import Songs from "../SongsInfo";

class Dashboard extends React.PureComponent {
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <Search />
          <Artist />
          <Songs />
        </div>
        <div className="row">
        <Playing />
        </div>
      </div>
    );
  }
}

export default Dashboard;
