import React from "react";
//import { MyButton, MyP } from "./glamorous/styles.js";
import { StyleSheet, css } from "aphrodite";
import theme from "./theme.js";


class Tontin extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      mensaje: "Tontin"
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(prevState => {
      return {
        mensaje: prevState.mensaje === "Tontin" ? "Pendejin" : "Tontin"
      };
    });
  }

  render() {
    return (
      <div>
        <button className={css(theming().pink)} onClick={this.handleClick}>
          Apachurrame we
        </button>
        <p className={css(theming().orange)}>{this.state.mensaje}</p>
      </div>
    );
  }

}

/*function mapStateToProps(state) {
  return {
    themes: state.themes
  };
}

export default connect(mapStateToProps)(Tontin);
*/
//export default Tontin;


//Pendejo reciba los import que están mal hechos