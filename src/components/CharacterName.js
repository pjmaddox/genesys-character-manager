import React from 'react';
import PropTypes from 'prop-types';
import { Input } from "@material-ui/core";

const CharacterName = (props) => {
    return (
        <React.Fragment>
            <Input id="characterNameInput" placeholder={"Character Name"} type={"text"} onChange={(event) => {props.onValueChange(props.characterId, event.target.value)}} value={props.name} />
        </React.Fragment>
    );
};

export default CharacterName;

CharacterName.propTypes = {
    characterId: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    onValueChange: PropTypes.func.isRequired
};