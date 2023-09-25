import { createSlice } from "@reduxjs/toolkit";
import { INIT_SETTINGS_STATE } from "../../../consts";
import { ISettingsReducer } from "../../../interfaces";

const SettingsReducer = createSlice({
  name: "settings",
  initialState: INIT_SETTINGS_STATE,
  reducers: {
    setLang(state: ISettingsReducer, action) {
      state.lang = action.payload;
    },
  },
});
export const { setLang } = SettingsReducer.actions;

export default SettingsReducer.reducer;
