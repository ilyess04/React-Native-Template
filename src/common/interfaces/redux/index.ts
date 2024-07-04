import { ELang } from "../../enums";
import { store } from "../../redux";

interface IAuthReducer {
  accessToken?: string;
  refreshToken?: string;
  userId?: string | number;
}
interface ISettingsReducer {
  lang: ELang;
}
export type { IAuthReducer, ISettingsReducer };
export type IRootState = ReturnType<typeof store.getState>;
