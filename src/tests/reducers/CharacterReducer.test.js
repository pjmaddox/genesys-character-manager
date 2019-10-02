import CharacterReducer from "../../reducers/CharacterReducer";
import { CharacterNameChanged } from "../../actions/ActionCreators";
import ActionTypes from "../../actions/ActionTypes";

describe("Character Reducer", () => {
    it("should return the previous state object if there is no valid action type", () => {
        let mockAction = { type: "Garbage" };
        let expectedPreviousState = { dummy: "" };
        let result = CharacterReducer(expectedPreviousState, mockAction);
        expect(result).toEqual(expectedPreviousState);
    });

    it("should assume an empty object as previousState when none is provided and there is no valid action", () => {
        let mockAction = { type: "Garbage" };
        let result = CharacterReducer(null, mockAction);
        let emptyObject = {};
        expect(result).toEqual(emptyObject);
    });

    //Need to change the action for this when there is another action that does not rely on an existing target character
    it("should evaluate and execute action with default state when there is no state given but there is a valid action", () => {
        let targetCharacterId = 0;
        let expectedName = "Samwise the Brave";
        let mockAction = { type: ActionTypes.CharacterNameChanged, payload: { targetCharacterId: targetCharacterId, newCharacterName: expectedName } };
        let result = CharacterReducer(null, mockAction);
        let expectedEndState = { targetCharacterId: { name: expectedName } };
        expect(result).toEqual(expectedEndState);
    });

    describe("CharacterNameChanged handling", () => {
        it("should return the previous state if the specified character does not exist in state", () => {
            let targetCharacterId = 0;
            let mockCharacterName = "Testy McTesterson";
            //let mockAction = { type: ActionTypes.CharacterNameChanged, payload: { targetCharacterId: targetCharacterId, name: "" } };
            let mockAction = CharacterNameChanged(targetCharacterId, mockCharacterName);
            let previousState = { 1: { name: "asdasd" }, 2: { name: "asdasd" }, [targetCharacterId]: { name: "SomeValue" } };            
            let result = CharacterReducer(previousState, mockAction);

            let expectedNewState = { ...previousState, [targetCharacterId]: { name: mockCharacterName } }
            expect(result).toEqual(expectedNewState);
        });
    });


});