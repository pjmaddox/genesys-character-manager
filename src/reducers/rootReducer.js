import { combineReducers } from 'redux';
import { reducer as formReducer } from "redux-form";
import CharacterReducer from "./CharacterReducer";

export default combineReducers({
    characters: CharacterReducer,
    form: formReducer
});