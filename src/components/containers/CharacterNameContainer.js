import { connect } from "react-redux";
import CharacterName from "../CharacterName";
import { CharacterNameChanged } from '../../actions/ActionCreators'

const mapStateToProps = (state, ownProps) => {
    console.log(state);
    return {
        name: state.characters[ownProps.characterId].name || "",
        characterId: ownProps.characterId
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onValueChange: (characterId, newName) => { dispatch(CharacterNameChanged(characterId, newName)); }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(CharacterName);