import { combineReducers } from "redux";
import initial from "./initial";
import Marvel from './Marvel'
import MarvelDetails from './MarvelDetails'
// Import redux here

export default combineReducers({
  initial,
  Marvel,
  MarvelDetails,
  // Insert redux here
});
