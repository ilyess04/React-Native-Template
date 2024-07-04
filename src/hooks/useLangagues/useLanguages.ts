import { useDispatch, useSelector } from "react-redux";
import { IKeys, IRootState } from "../../common/interfaces";
import { ELang } from "../../common/enums";
import { en, fr } from "../../i18n";
import { setLang } from "../../common/redux";

const useLanguages = () => {
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

  return {
    storedLang,
    getLangData: handleGetLangData,
    changeLang: handleChangeLang,
  };
};
export default useLanguages;
