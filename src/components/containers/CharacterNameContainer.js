import { connect } from "react-redux";
import CharacterName from "../CharacterName";
import ActionCreators from '../../actions/ActionCreators'

const mapStateToProps = (state, ownProps) => {
    return {
        name: state[ownProps.characterId].name,
        characterId: ownProps.characterId
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onValueChange: (characterId, newName) => { dispatch(ActionCreators.CharacterNameChanged(characterId, newName)); }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(CharacterName);