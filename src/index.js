import ReactDOM from "react-dom";
import React from 'react';
import * as serviceWorker from './serviceWorker';
import App from "./App";
import { createStore } from "redux";
import reducer from "./reducers/rootReducer";
import { Provider } from "react-redux";


let store = createStore();

ReactDOM.render(
    <Provider store={reducer}>
        <App />
    </Provider>,
    document.querySelector("#root")
);

serviceWorker.unregister();