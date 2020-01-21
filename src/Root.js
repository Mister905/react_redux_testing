import React from "react";
import { Provider } from "react-redux";
import reducers from "./reducers";
import { createStore, applyMiddleware, compose } from "redux";
import redux_thunk from "redux-thunk";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default ({ children, initial_state }) => {
  return (
    <Provider
      store={createStore(
        reducers,
        initial_state,
        composeEnhancers(applyMiddleware(redux_thunk))
      )}
    >
      {children}
    </Provider>
  );
};
