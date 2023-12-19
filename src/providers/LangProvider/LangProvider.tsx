import React from "react";
import { useLanguages } from "../../hooks";
import { LangContext } from "../../common/contexts";

export default function LangProvider(props: {
  children: React.ReactNode;
}): JSX.Element {
  const { getLangData } = useLanguages();
  const type = getLangData();
  return (
    <LangContext.Provider value={type}>{props.children}</LangContext.Provider>
  );
}