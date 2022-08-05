import { combineReducers } from "redux";
import {TourReducer} from "./TourReducer";
import { InfoReducer } from "./InfoReducer";

export const rootReducer = combineReducers({
    TourReducer,
    InfoReducer
});