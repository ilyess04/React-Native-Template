import { useSelector } from "react-redux";
import { fr, en } from "../../i18n";
import { IRootState } from "../../common/interfaces";
import { ELang } from "../../common/enums";
const useTranslation = () => {
  const storedLang = useSelector((state: IRootState) => state.settings).lang;
  let lang = en;
  if (storedLang == ELang.fr) {
    lang = fr;
  }
  return { lang, storedLang };
};
export default useTranslation;
