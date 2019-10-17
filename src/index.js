import ReactDOM from "react-dom";
import React from 'react';
import * as serviceWorker from './serviceWorker';
import App from "./App";
import { createStore } from "redux";
import reducer from "./reducers/rootReducer";
import { Provider } from "react-redux";


let store = createStore(reducer);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.querySelector("#root")
);

serviceWorker.unregister();