import ActionTypes from "./actionTypes";

export function CharacterNameChanged (characterId, newName) {
    return {
        type: ActionTypes.CharacterNameChanged,
        payload: {
            targetCharacterId: characterId,
            newCharacterName: newName
        }
    };
};