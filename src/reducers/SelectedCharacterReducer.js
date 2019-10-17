import ActionTypes from "../actions/ActionTypes";

export const SelectedCharacterReducer = (previousState = "", action) => {
    
    switch(action.type)
    {
        case ActionTypes.SelectedCharacterChanged:
            break;
        default:
            return previousState;
    }
};