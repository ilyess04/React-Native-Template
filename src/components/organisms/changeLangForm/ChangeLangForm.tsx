import { useState } from "react";
import { useLanguages, useTranslation } from "../../../hooks";
import { Button } from "../../atoms";
import { ELang } from "../../../common/enums";
import { IChangeLangForm } from "../../../common/interfaces";
import { enFlagImgSrc, frFlagImgSrc } from "../../../assets";
import { SelectLanguageItem } from "../../molecules";

const ChangeLangForm = ({ onSubmit }: IChangeLangForm): JSX.Element => {
  const { storedLang, changeLang } = useLanguages();
  const [selectedLang, setSelectedLang] = useState<ELang>(storedLang);
  const { tr } = useTranslation();

  return (
    <>
      {[
        { label: tr("english"), value: ELang.en, src: enFlagImgSrc },
        { label: tr("french"), value: ELang.fr, src: frFlagImgSrc },
      ].map(({ label, value, src }, index) => (
        <SelectLanguageItem
          key={index}
          isSelected={value === selectedLang}
          source={src}
          title={label}
          onPress={() => setSelectedLang(value)}
        />
      ))}
      <Button
        style={{ marginTop: 15 }}
        title={tr("submit")}
        onPress={() => {
          changeLang(selectedLang);
          onSubmit();
        }}
      />
    </>
  );
};
export default ChangeLangForm;
