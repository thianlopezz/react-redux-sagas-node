import { combineReducers } from "redux";
import hello from "./helloWorldReducer";

export default combineReducers({
  state: hello
});
