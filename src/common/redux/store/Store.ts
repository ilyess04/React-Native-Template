import AsyncStorage from "@react-native-async-storage/async-storage";
import ReduxLogger from "redux-logger";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import {
  persistReducer,
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "reduxjs-toolkit-persist";
import { AuthReducer, SettingsReducer } from "../reducers";


const persistConfig = {
  key: "root",
  storage: AsyncStorage,
  blackList: ["auth", "settings"],
};

const persistedReducer = persistReducer(
  persistConfig,
  combineReducers({
    auth: AuthReducer,
    settings: SettingsReducer,
  })
);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(ReduxLogger),
});

const persistor = persistStore(store);

export { store, persistor };
