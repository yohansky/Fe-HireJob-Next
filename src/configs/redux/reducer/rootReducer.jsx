import { combineReducers } from "redux";
import pekerjaReducer from "./pekerjaReducer";
import workerReducer from "./pekerjaReducer";

const rootReducer = combineReducers({
  //   pekerja: pekerjaReducer,
  worker: workerReducer,
});

export default rootReducer;
