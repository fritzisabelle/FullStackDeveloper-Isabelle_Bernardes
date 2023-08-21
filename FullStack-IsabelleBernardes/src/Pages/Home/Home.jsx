import { useTranslation } from "react-i18next";
import { FirstSectionTemplate } from "./homeStyle";

export const HomeTemplate = () => {
  const { t } = useTranslation();

  return (
    <FirstSectionTemplate>
      <div className="topInfo_project_button">
        <div className="topInfo_project_tags">
          <div className="topInfo_project_description">
            <div className="topInformation_project">
              <small>{t("projectTypeAppWeb")}</small>
              <h1>Motolink</h1>
            </div>
            <p>{t("motolinkDescription")}</p>
          </div>
          <div className="project-tag-container">
            <span>React</span>
            <span>Typescript</span>
            <span>Axios</span>
            <span>Styled-Components</span>
            <span>JSONServer</span>
          </div>
        </div>
        <button>{t("detailButton")}</button>
      </div>
    </FirstSectionTemplate>
  );
};
