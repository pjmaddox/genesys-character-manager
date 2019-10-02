import React from 'react';
import { Container } from '@material-ui/core';
import CharacterName from "./components/CharacterName";
import CharacterNameContainer from "./components/containers/CharacterNameContainer";

const App = () => {
    return (
        <Container maxWidth={'lg'}>
            <div>
                <CharacterNameContainer characterId={0} name="Test" />
            </div>
        </Container>
    );
};

export default App;