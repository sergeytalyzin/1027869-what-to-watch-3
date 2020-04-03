import {combineReducers} from "redux";
import {reducer as appStatus} from "./app-status/app-status.js";
import {reducer as data} from "./data/data.js";
import NameSpace from "./name-space.js";

export default combineReducers({
  [NameSpace.APP_STATUS]: appStatus,
  [NameSpace.DATA]: data,
});
