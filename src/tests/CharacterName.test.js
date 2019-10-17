import React from "react";
import { shallow } from "enzyme";
import CharacterName from "../components/CharacterName";
import { Input } from "@material-ui/core";


describe("CharacterName render", () => {
    let wrappedCharacterName;
    let mockName = "SomeName";
    let mockCharacterId = "0";
    let mockValueChangeFunction;

    beforeEach(() => {
        mockValueChangeFunction = jest.fn();
        wrappedCharacterName = shallow(<CharacterName characterId={mockCharacterId} onValueChange={mockValueChangeFunction} name={mockName} />);
    });

    it("should render an Input", () => {
        let nodes = wrappedCharacterName.find(Input);
        expect(nodes.length).toEqual(1);
    });

    describe("the rendered input", () => {
        it("should have the type 'text'", () => {
            let expectedInputType = "text";
            let node = wrappedCharacterName.find(Input);
            expect(node.props().type).toEqual(expectedInputType);
        });

        it("should have the value of the mockName variable", () => {
            let expectedName = mockName;
            let node = wrappedCharacterName.find(Input);
            expect(node.props().value).toEqual(expectedName);
        });

        it("should call onChange prop function on change", () => {
            let someText = "";
            let mockEvent = { target: { value: someText } };
            let node = wrappedCharacterName.find(Input);
            node.simulate("change", mockEvent);
            wrappedCharacterName.update();
            expect(mockValueChangeFunction).toBeCalled();
        });

        it("should have the placeholder 'Character Name'", () => {
            let expectedPlaceholderValue = "Character Name";
            let node = wrappedCharacterName.find(Input);
            expect(node.props().placeholder).toEqual(expectedPlaceholderValue);
        });
    });
});