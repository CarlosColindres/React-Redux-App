import React from "react";
import ReactDOM from "react-dom";
import "./scss/main.scss";
import App from "./App";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import { reducer } from "./store/reducers";
import { BrowserRouter as Router} from 'react-router-dom'

const store = createStore(reducer, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
    <Router>
    <App />
    </Router>
  </Provider>,
  document.getElementById("root")
);
