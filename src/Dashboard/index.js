import React from "react";
import Search from "../Search";
import Playing from "../Playing";
import Artist from "../Artist";

class Dashboard extends React.PureComponent {
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <Search />
          <Artist />
        </div>
        <div className="row">
        <Playing />
        </div>
      </div>
    );
  }
}

export default Dashboard;
