import { createStore, applyMiddleware, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { createEpicMiddleware, combineEpics } from "redux-observable";

import exampleReducer from "./features/example/reducer";
import tokenReducer from "./features/token/reducer";
import postReducer from "./features/post/reducer";

import * as exampleEpics from "./features/example/epics";

import { RootActionTypes, RootState } from "../typings/MyRedux";

const rootReducer = combineReducers({
  example: exampleReducer,
  post: postReducer,
  token: tokenReducer
});

const rootEpic = combineEpics(...Object.values(exampleEpics));

const makeStore = (initialState: RootState | undefined) => {
  const epicMiddleware = createEpicMiddleware<
    RootActionTypes,
    RootActionTypes,
    RootState,
    any
  >();

  const store = createStore(
    rootReducer,
    initialState,
    composeWithDevTools(applyMiddleware(epicMiddleware))
  );

  epicMiddleware.run(rootEpic);

  return store;
};

export default makeStore;
