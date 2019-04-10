import { combineReducers } from "redux";
import helloReducer from "./helloWorldReducer";

export default combineReducers({
  helloState: helloReducer
});
