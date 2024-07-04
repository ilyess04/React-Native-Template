import { ELang } from "../enums";
import { IAuthReducer, ILoginState, ISettingsReducer } from "../interfaces";

const INIT_AUTH_REDUCER_STATE: IAuthReducer = {
  accessToken: undefined,
  refreshToken: undefined,
  user: undefined,
};
const INIT_SETTINGS_STATE: ISettingsReducer = {
  lang: ELang.en,
};
const INIT_LOGIN_STATE: ILoginState = {
  email: "",
  password: "",
};
export { INIT_AUTH_REDUCER_STATE, INIT_LOGIN_STATE, INIT_SETTINGS_STATE };
