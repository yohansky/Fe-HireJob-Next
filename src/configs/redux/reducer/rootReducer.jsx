import { combineReducers } from "redux";
import pekerjaReducer from "./pekerjaReducer";

const rootReducer = combineReducers({
  pekerja: pekerjaReducer,
});

export default rootReducer;
