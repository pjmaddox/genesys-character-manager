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
        case ActionTypes.CharacterAdded:
            //let newCharacter = GetDefaultNewCharacter();
            let { id, ...newCharacter } = GetDefaultNewCharacter();
            return produce(pState, draftState => {
                draftState[id] = newCharacter;
            });
        default:
            return pState;
    }
};

function GetNewCharacterId() {
    //let global.Date.now();
    return Date.getTime();
}

function GetDefaultNewCharacter() {
    return {
        id: GetNewCharacterId(),
        name: ""
    };
}

export default CharacterReducer;