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

    it("should evaluate and execute action with default state when there is no state given but there is a valid action - yields new character added when AddCharacter", () => {
        let expectedName = "";
        let mockAction = { type: ActionTypes.CharacterAdded, payload: { } };
        let expectedId = "1234";
        Date.getTime = jest.fn(() => expectedId);

        let result = CharacterReducer(null, mockAction);

        let expectedEndState = { [expectedId]: { name: expectedName } };
        expect(result).toEqual(expectedEndState);
    });

    describe("CharacterNameChanged handling", () => {
        it("should return the previous state if the specified character does not exist in state", () => {
            let targetCharacterId = 0;
            let mockCharacterName = "Testy McTesterson";
            let mockAction = CharacterNameChanged(targetCharacterId, mockCharacterName);
            let previousState = { 1: { name: "asdasd" }, 2: { name: "asdasd" }, [targetCharacterId]: { name: "SomeValue" } };            
            let result = CharacterReducer(previousState, mockAction);

            let expectedNewState = { ...previousState, [targetCharacterId]: { name: mockCharacterName } }
            expect(result).toEqual(expectedNewState);
        });
    });

    describe("CharacterAdded handling", () => {
        it("should add a new default character", () => {
            let theRestOfThePreviousState = {
                2: { name: "d" },
                3: { name: "c" },
                1: { name: "b" },
                5: { name: "a" }
            };
            let mockAction = { type: ActionTypes.CharacterAdded, payload: { } };
            let expectedId = "1234";
            Date.getTime = jest.fn(() => expectedId);


            let result = CharacterReducer(theRestOfThePreviousState, mockAction);

            let expectedName = "";
            let expectedEndState = { [expectedId]: { name: expectedName }, ...theRestOfThePreviousState };
            expect(result).toEqual(expectedEndState);
        });

        it("should add a character when there is not one already", () => {
            let expectedName = "";
            let mockAction = { type: ActionTypes.CharacterAdded, payload: { } };
            let expectedId = "1234";
            Date.getTime = jest.fn(() => expectedId);

            let result = CharacterReducer({}, mockAction);

            let expectedEndState = { [expectedId]: { name: expectedName } };
            expect(result).toEqual(expectedEndState);
        });

        it("should make the newly added character the currently selected one", () => {
            let theRestOfThePreviousState = {
                2: { name: "d" },
                3: { name: "c" },
                1: { name: "b" },
                5: { name: "a" }
            };
            let mockAction = { type: ActionTypes.CharacterAdded, payload: { } };
            let expectedId = "1234";
            Date.getTime = jest.fn(() => expectedId);


            let result = CharacterReducer(theRestOfThePreviousState, mockAction);

            let expectedName = "";
            let expectedSelectedCharacterId = expectedId
            expect(result).toEqual(expectedEndState);
        });
    });

    describe("SelectedCharacterChanged handling", () => {
        it("should return the previous state when there is no valid action type", () => {
            let initialState = "Splerm";
            let mockAction = {
                type: "SomeFakeActionType",
                payload: {
                    characterId: 53
                }
            };
            let result = SelectedCharacterReducer(initialState, mockAction);
    
            expect(result).toEqual(initialState);
        });
    
        it("should return begin with an empty state when there is no initial state", () => {
            let initialState = null;
            let mockAction = {
                type: ActionTypes.SelectedCharacterChanged,
                payload: {
                    characterId: 53
                }
            };
            let expectedResult = "53"
    
            let result = SelectedCharacterReducer(initialState, mockAction);
    
            expect(result).toEqual(expectedResult);
        });
    });
});