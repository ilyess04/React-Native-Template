import React from "react";
import { IKeys } from "../../interfaces";
import { en } from "../../../i18n";
import { ELang } from "../../enums";

interface ILangContext {
  data: IKeys;
  storedLang: ELang;
  getLangData: () => IKeys;
  changeLang: (lang: ELang) => void;
}

const LangContext = React.createContext<ILangContext>({
  data: en,
  storedLang: ELang.en,
  getLangData: () => en,
  changeLang: () => {},
});
export default LangContext;
