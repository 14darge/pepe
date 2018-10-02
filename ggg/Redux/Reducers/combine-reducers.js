import { combineReducers } from "redux";
import themes from "./theme-reducer.js";

const rootReducer = combineReducers({
  themes: themes
});

export default rootReducer;
