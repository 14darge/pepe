import React from "react";
import "./songs.css";
import "react-perfect-scrollbar/dist/css/styles.css";
import PerfectScrollbar from "react-perfect-scrollbar";

class Songs extends React.PureComponent {
  render() {
    return (
      <PerfectScrollbar className="anchini">
      <div className="col-8">
        <div className="row">
          <div className="col-1 columnInfo">
            <p className="title">1.</p>
          </div>
          <div className="col-10 columnInfo">
            <p className="title">My Propeller</p>
            <div className="row">
              <p className="songInfo">Arctic Monkeys</p>
            </div>
          </div>
          <div className="col-1 columnInfo">
            <p className="title">3:27</p>
          </div>
        </div>
        <hr />
        <div className="row">
          <div className="col-1 columnInfo">
            <p className="title">2.</p>
          </div>
          <div className="col-10 columnInfo">
            <p className="title">Crying Lightning</p>
            <div className="row">
              <p className="songInfo">Arctic Monkeys</p>
            </div>
          </div>
          <div className="col-1 columnInfo">
            <p className="title">3:43</p>
          </div>
        </div>
        <hr />
        <div className="row">
          <div className="col-1 columnInfo">
            <p className="title">3.</p>
          </div>
          <div className="col-10 columnInfo">
            <p className="title">Dangerous Animals</p>
            <div className="row">
              <p className="songInfo">Arctic Monkeys</p>
            </div>
          </div>
          <div className="col-1 columnInfo">
            <p className="title">3:30</p>
          </div>
        </div>
        <hr />
        <div className="row">
          <div className="col-1 columnInfo">
            <p className="title">4.</p>
          </div>
          <div className="col-10 columnInfo">
            <p className="title">Secret Door</p>
            <div className="row">
              <p className="songInfo">Arctic Monkeys</p>
            </div>
          </div>
          <div className="col-1 columnInfo">
            <p className="title">3:43</p>
          </div>
        </div>
        <hr />
        <div className="row">
          <div className="col-1 columnInfo">
            <p className="title">5.</p>
          </div>
          <div className="col-10 columnInfo">
            <p className="title">Potion Approaching</p>
            <div className="row">
              <p className="songInfo">Arctic Monkeys</p>
            </div>
          </div>
          <div className="col-1 columnInfo">
            <p className="title">2:32</p>
          </div>
        </div>
        <hr />
        <div className="row">
          <div className="col-1 columnInfo">
            <p className="title">6.</p>
          </div>
          <div className="col-10 columnInfo">
            <p className="title">Fire and the Thud</p>
            <div className="row">
              <p className="songInfo">Arctic Monkeys</p>
            </div>
          </div>
          <div className="col-1 columnInfo">
            <p className="title">3:57</p>
          </div>
        </div>
        <hr />
        <div className="row">
          <div className="col-1 columnInfo">
            <p className="title">7.</p>
          </div>
          <div className="col-10 columnInfo">
            <p className="title">Cornerstone</p>
            <div className="row">
              <p className="songInfo">Arctic Monkeys</p>
            </div>
          </div>
          <div className="col-1 columnInfo">
            <p className="title">3:17</p>
          </div>
        </div>
        <hr />
        <div className="row">
          <div className="col-1 columnInfo">
            <p className="title">8.</p>
          </div>
          <div className="col-10 columnInfo">
            <p className="title">Dance Little Liar</p>
            <div className="row">
              <p className="songInfo">Arctic Monkeys</p>
            </div>
          </div>
          <div className="col-1 columnInfo">
            <p className="title">4:43</p>
          </div>
        </div>
        <hr />
        <div className="row">
          <div className="col-1 columnInfo">
            <p className="title">9.</p>
          </div>
          <div className="col-10 columnInfo">
            <p className="title">Pretty Visitors</p>
            <div className="row">
              <p className="songInfo">Arctic Monkeys</p>
            </div>
          </div>
          <div className="col-1 columnInfo">
            <p className="title">3:40</p>
          </div>
        </div>
        <hr />
        <div className="row">
          <div className="col-1 columnInfo">
            <p className="title">10.</p>
          </div>
          <div className="col-10 columnInfo">
            <p className="title">The Jeweller's Hands</p>
            <div className="row">
              <p className="songInfo">Arctic Monkeys</p>
            </div>
          </div>
          <div className="col-1 columnInfo">
            <p className="title">5:44</p>
          </div>
        </div>
        <hr />
      </div>
      </PerfectScrollbar>
    );
  }
}

export default Songs;
