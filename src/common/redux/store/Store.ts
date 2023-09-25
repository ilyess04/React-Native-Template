import { combineReducers, configureStore } from "@reduxjs/toolkit";
import ReduxLogger from "redux-logger";
import { AuthReducer, SettingsReducer } from "../reducers";

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
