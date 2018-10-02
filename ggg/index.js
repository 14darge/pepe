import React from "react";
import ReactDOM from "react-dom";
import Tontin from "./Componentes/Tontin";
import { Provider } from "react-redux";
import { createStore } from "redux";
import reducers from "./Redux/Reducers/combine-reducers";
import registerServiceWorker from "./registerServiceWorker";

ReactDOM.render(
  <Provider store={createStore(reducers)}>
    <Tontin />
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
