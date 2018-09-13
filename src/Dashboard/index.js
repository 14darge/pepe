import React from "react";
import Header from "../Header";
import Playing from "../Playing";
import Artist from "../Artist";
import Songs from "../SongsInfo";
import Search from "../Search";
//import "react-perfect-scrollbar/dist/css/styles.css";
//import PerfectScrollbar from "react-perfect-scrollbar";
import "./dashboard.css";
import songsList from "../songsList.json";

class Dashboard extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      search: "",
      filteredSongs: songsList
    };

    this.handleChange = this.handleChange.bind(this);
    this.filterSongs = this.filterSongs.bind(this);
  }

  handleChange = event => {
    this.setState({
      search: event.target.value
    });
    this.filterSongs()
  };

  filterSongs() {
    const ok = songsList.filter(rolas =>
      rolas.song.toLowerCase().includes(this.state.search.toLowerCase())
    );
    this.setState({
      filteredSongs: ok
    });
  } 

  render() {
    return (
      <div id="main">
        <div>
          <Header />
        </div>
        <div className="container-fluid">
          <div className="row" id="main-row">
            <Search
              changeHandler={this.handleChange}
              searchTerm={this.state.search}
            />
            <Artist />
            <Songs displaySongs={this.state.filteredSongs} />
          </div>
        </div>
        <Playing />
      </div>
    );
  }
}

export default Dashboard;
