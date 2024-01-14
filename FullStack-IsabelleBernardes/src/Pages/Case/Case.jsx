import React from "react"
import { useTranslation } from "react-i18next";
import { Template } from "./style";
import { Link, useParams } from 'react-router-dom';
import { JobList } from "../../utils/jobsList";
import arrowRight from "../../assets/imgs/arrowRight.svg"
import githubIcon from "../../assets/imgs/github-icon.svg"
import behanceIcon from "../../assets/imgs/behance-icon.svg"
import onlineIcon from "../../assets/imgs/online-icon.svg"
import { SlideButton } from "../../style/Buttons/SlideButton/slideButton.component";

export const Case = () => {
  const { t } = useTranslation();
  const { id } = useParams();
  const project = JobList.find(job => job.id === parseInt(id, 10));

  return (
    <Template>
      <div className="content_container">
        <div className="gallery-Container">
          <div className="cover">
            <img src={project.cover} alt="project cover" />
          </div>
          <div className="galleryList-Container">
            <div className="galleryItem">
              <img src="" alt="" />
            </div>
            <div className="galleryItem">
              <img src="" alt="" />
            </div>
            <div className="galleryItem">
              <img src="" alt="" />
            </div>
          </div>
        </div>
        <div className="DetailSection-Container">
          <div className="DetailTitle-container">
            <p>{t("jobContext")}</p>
            <h3>{project.name}</h3>
          </div>
          <div className="JobContextDetails">
            <div className="JobContextDetails-detailBox">
              <p className="subtitle_detailSection">{t("problem")}</p>
              <div className="detailDivisor"></div>
              <p className="text_detailSection">{t("problemDetail")}</p>
            </div>
            <div className="JobContextDetails-detailBox">
              <p className="subtitle_detailSection">{t("context")}</p>
              <div className="detailDivisor"></div>
              <p className="text_detailSection">{t("contextDetail")}</p>
            </div>
            <div className="JobContextDetails-detailBox">
              <p className="subtitle_detailSection">{t("projectObjective")}</p>
              <div className="detailDivisor"></div>
              <p className="text_detailSection">{t("projectObjectiveDetail")}</p>
            </div>
            <div className="separator"></div>
          </div>
        </div>
        <div className="DetailSection-Container">
          <div className="DetailTitle-container">
            <p>{t("strategy")}</p>
            <h3>{t("strategyTitle")}</h3>
          </div>
          <p className="subtitle_detailSection strategyText">{t("strategyDetail")}</p>
          <div className="separator"></div>
        </div>
        <div className="DetailSection-Container">
          <div className="DetailTitle-container">
            <p>{t("mistakesSubtitle")}</p>
            <h3>{t("mistakesTitle")}</h3>
          </div>
          <p className="subtitle_detailSection strategyText">{t("mistakeText")}</p>
          <div className="separator"></div>
        </div>

        <div className="footerContainer">
          <div className="readArticle--container">
            <p>{t("readArticle")}</p>
            <Link to="/recentWork">
              <SlideButton buttonStyle='Icon&Text'>
                {t("readArticleText")}
                <img src={arrowRight} alt="arrow icon" />
              </SlideButton>
            </Link>
          </div>
          <div className="buttonsContainer">
            <SlideButton buttonStyle='Icon&Text'>
              <img src={githubIcon} alt="github icon" />
              {t("githubButton")}
            </SlideButton>
            <SlideButton buttonStyle='Icon&Text'>
              <img src={behanceIcon} alt="behance icon" />
              {t("behanceButton")}
            </SlideButton>
            <SlideButton buttonStyle='CaseButton'>
              <img src={onlineIcon} alt="online icon" />
              {t("onlineButton")}
            </SlideButton>
          </div>
        </div>
      </div>
    </Template>
  );
};