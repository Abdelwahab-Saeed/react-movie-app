import {  combineReducers } from "redux";
import handleFavourites from "./Favourites";
import MoviesReducer from "./MoviesReducer";


export default combineReducers({
    favourites: handleFavourites,
    MyList: MoviesReducer
})