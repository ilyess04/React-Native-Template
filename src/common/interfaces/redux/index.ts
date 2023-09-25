import { ELang } from "../../enums";
import { store } from "../../redux";
import { IUserModel } from "../models";

interface IAuthReducer {
  accessToken?: string;
  refreshToken?: string;
  user?: IUserModel;
}
interface ISettingsReducer {
  lang: ELang;
}
export type { IAuthReducer, ISettingsReducer };
export type IRootState = ReturnType<typeof store.getState>;
