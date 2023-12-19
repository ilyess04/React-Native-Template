import { useSelector } from "react-redux";
import { IKeys, IRootState } from "../../common/interfaces";
import { ELang } from "../../common/enums";
import { en, fr } from "../../i18n";

const useLanguages = () => {
  const storedLang: ELang = useSelector(
    (state: IRootState) => state.settings.lang
  );

  const getLangData = (): IKeys => {
    switch (storedLang) {
      case ELang.en: {
        return en;
      }
      case ELang.fr: {
        return fr;
      }
    }
  };

  return { storedLang, getLangData };
};
export default useLanguages;
