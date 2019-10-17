import CharacterApi from "../api/CharacterApi";
import ActionTypes from "./ActionTypes";

export const CharacterNameChanged = (characterId, newName) => {
    //PersistCharacterNameChange(characterId, newName);   ????

    return {
        type: ActionTypes.CharacterNameChanged,
        payload: {
            targetCharacterId: characterId,
            newCharacterName: newName
        }
    };
};

export const CharacterAdded = () => {
    return {
        type: ActionTypes.CharacterAdded,
        payload: {  }
    };
}

// export const  PersistCurrentCharacter = async (characterId, characterData) => {
//     return (dispatch) => {
//         //Do some crap
//         CharacterApi.put(`/characters/:${characterId}/name`, newName);
//     };
// }