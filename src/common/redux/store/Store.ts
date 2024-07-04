import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { AuthReducer, SettingsReducer } from "../reducers";
import ReduxLogger from "redux-logger";

const reducers = combineReducers({
  auth: AuthReducer,
  settings: SettingsReducer,
});

const store = configureStore({
  reducer: reducers,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(ReduxLogger),
});

export { store };
