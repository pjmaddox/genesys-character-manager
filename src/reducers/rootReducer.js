import { combineReducers } from 'redux';
import CharacterReducer from "./CharacterReducer";

export default combineReducers({
    characters: CharacterReducer
});