import React from "react";
import { LangContext } from "../../common/contexts";
import { setLang } from "../../common/redux";
import { ELang } from "../../common/enums";
import { en, fr } from "../../i18n";
import { IKeys, IRootState } from "../../common/interfaces";
import { useDispatch, useSelector } from "react-redux";

export default function LangProvider(props: {
  children: React.ReactNode;
}): JSX.Element {
  const dispatch = useDispatch();
  const storedLang: ELang = useSelector(
    (state: IRootState) => state.settings.lang
  );

  const handleGetLangData = (): IKeys => {
    switch (storedLang) {
      case ELang.en: {
        return en;
      }
      case ELang.fr: {
        return fr;
      }
    }
  };

  const handleChangeLang = (lang: ELang) => {
    if (storedLang !== lang) {
      dispatch(setLang(lang));
    }
  };

  return (
    <LangContext.Provider
      value={{
        storedLang,
        data: handleGetLangData(),
        changeLang: handleChangeLang,
        getLangData: handleGetLangData,
      }}
    >
      {props.children}
    </LangContext.Provider>
  );
}
