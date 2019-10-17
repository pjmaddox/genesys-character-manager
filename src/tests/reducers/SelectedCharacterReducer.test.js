import ActionTypes from "../../actions/ActionTypes";
import SelectedCharacterReducer from "../../reducers/SelectedCharacterReducer";

describe("SelectedCharacterReducer", () => {
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