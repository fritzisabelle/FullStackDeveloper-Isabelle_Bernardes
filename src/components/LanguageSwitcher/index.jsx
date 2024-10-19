import { useTranslation } from "react-i18next";
import { ButtonLanguageSwitcher } from "./buttonLS";

const languageOptions = [
  {
    name: "Português",
    value: "ptBR",
    buttonText: "PT",
  },
  {
    name: "Inglês",
    value: "en",
    buttonText: "EN",
  },
];

export const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const currentLanguage = i18n.language;

  return (
    <div className="language-switcher">
      {languageOptions.map((languageOption) => (
        <ButtonLanguageSwitcher
          key={languageOption.value}
          className={`${
            languageOption.value === currentLanguage ? "selected" : null
          }`}
          onClick={() => {
            i18n.changeLanguage(languageOption.value);
          }}
        >
          {languageOption.buttonText}
        </ButtonLanguageSwitcher>
      ))}
    </div>
  );
};
