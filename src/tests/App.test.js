import React from "react";
import { shallow } from "enzyme";
import { Container } from "@material-ui/core";
import App from "../App";
import CharacterNameContainer from "../components/containers/CharacterNameContainer";

describe("App Rendering", () => {

    let wrappedApp;

    beforeEach(() => {
        wrappedApp = shallow(<App />);
    });

    it("should render a container", () => {
        let nodes = wrappedApp.find(Container);
        expect(nodes.length).toEqual(1);
    });

    it("should display a CharacterName component", () => {
        let nodes = wrappedApp.find(CharacterNameContainer);
        expect(nodes.length).toEqual(1);
    });
});