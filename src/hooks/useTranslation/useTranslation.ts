import { useContext, useCallback } from "react";
import { LangContext } from "../../common/contexts";

const useTranslation = () => {
  const { data } = useContext(LangContext);

  const translate = useCallback(
    (value: string) => {
      return data[value] ? data[value] : value;
    },
    [data]
  );

  return { lang: data, tr: translate };
};
export default useTranslation;
