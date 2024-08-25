import { useContext, useCallback } from "react";
import { LangContext } from "../../common/contexts";

const useTranslation = () => {
  const lang = useContext(LangContext);

  const translate = useCallback(
    (value: string) => {
      return lang[value] ? lang[value] : value;
    },
    [lang]
  );

  return { lang, tr: translate };
};
export default useTranslation;
