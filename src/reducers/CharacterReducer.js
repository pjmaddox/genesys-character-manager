import ActionTypes from "../actions/ActionTypes";
import { produce } from "immer";

const CharacterReducer = (previousState = {}, action) => {
    let pState = previousState? previousState : {};

    switch(action.type)
    {
        case ActionTypes.CharacterNameChanged:
            let { targetCharacterId, newCharacterName } = action.payload;

            if (!pState[targetCharacterId]) {
                return pState;
            }
            else {
                return produce(pState, draftState => {
                    draftState[targetCharacterId].name = newCharacterName;
                });
            }
        default:
            return pState;
    }
};

export default CharacterReducer;