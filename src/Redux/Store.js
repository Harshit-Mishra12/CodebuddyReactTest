import {
    applyMiddleware,
    combineReducers,
    compose,
    legacy_createStore,
  } from "redux";
  import { reducer as AuthReducer } from "./AuthReducer/Reducer";
  import { reducer as AppReducer } from "./AppReducer/Reducer";


  import thunk from "redux-thunk";

  const composeEnhancers = window._REDUX_DEVTOOLS_EXTENTION_COMPOSE_ || compose;

  const rootReducer = combineReducers({ AuthReducer,AppReducer});

  export const store = legacy_createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(thunk))
  );