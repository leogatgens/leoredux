import { combineReducers } from "redux";
import {Uireducer,countryreducer} from "./countriesreducers";

const rootReducer = combineReducers({
  countryreducer,
  Uireducer
});

export default rootReducer;


