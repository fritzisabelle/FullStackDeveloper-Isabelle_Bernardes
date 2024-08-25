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
  const { t, i18n } = useTranslation();
  const { id } = useParams();
  const project = JobList.find(job => job.id === parseInt(id, 10));
  const gallery = project.galleryImgs.slice(1,4);

  const currentLanguage = i18n.language;

  return (
    <Template>
      <div className="content_container">
        <div className="gallery-Container">
          <div className="cover">
            <img src={project.galleryImgs[0]} alt="project cover" />
          </div>
          <div className="galleryList-Container">
            {gallery.map((itemGallery, index) => {
              index+=1;
              return (
              <div className="galleryItem" key={index}>
                <img src={itemGallery} alt="" />
              </div>
              )
            })}
          </div>
        </div>
        <div className="DetailSection-Container">
          <div className="DetailTitle-container">
            <p>{t("JobsPage.body.jobContext")}</p>
            <h3>{project.name}</h3>
          </div>
          <div className="JobContextDetails">
            <div className="JobContextDetails-detailBox">
              <p className="subtitle_detailSection">{t("JobsPage.body.problem")}</p>
              <div className="detailDivisor"></div>
              {currentLanguage === 'en' ? (
                <p className="text_detailSection">{project.context.enProblem}</p>
                ):(
                <p className="text_detailSection">{project.context.enProblem}</p>
                )}
            </div>
            <div className="JobContextDetails-detailBox">
              <p className="subtitle_detailSection">{t("JobsPage.body.context")}</p>
              <div className="detailDivisor"></div>
              {currentLanguage === 'en' ? (
                <p className="text_detailSection">{project.context.enContext}</p>
                ):(
                <p className="text_detailSection">{project.context.ptContext}</p>
                )}
            </div>
            <div className="JobContextDetails-detailBox">
              <p className="subtitle_detailSection">{t("JobsPage.body.projectObjective")}</p>
              <div className="detailDivisor"></div>
              
              {currentLanguage === 'en' ? (
                <p className="text_detailSection">{project.context.enObjective}</p>
                ):(
                <p className="text_detailSection">{project.context.ptObjective}</p>
                )}
            </div>
            <div className="separator"></div>
          </div>
        </div>
        <div className="DetailSection-Container">
          <div className="DetailTitle-container">
            <p>{t("JobsPage.body.strategy")}</p>
            <h3>{t("JobsPage.body.strategyTitle")}</h3>
          </div>
          {currentLanguage === 'en' ? (
            <p className="subtitle_detailSection strategyText">{project.enStrategyDetail}</p>
            ):(
              <p className="subtitle_detailSection strategyText">{project.ptStrategyDetail}</p>
          )}
          
          <div className="separator"></div>
        </div>
        <div className="DetailSection-Container">
          <div className="DetailTitle-container">
            <p>{t("JobsPage.body.mistakesSubtitle")}</p>
            <h3>{t("JobsPage.body.mistakesTitle")}</h3>
          </div>
          {currentLanguage === 'en' ? (
              <p className="subtitle_detailSection strategyText">{project.mistakes.mistake_1.enMistakeDetail}</p>
            ):(
              <p className="subtitle_detailSection strategyText">{project.mistakes.mistake_1.ptMistakeDetail}</p>
          )}
          
          <div className="separator"></div>
        </div>

        <div className="footerContainer">
          <div className="readArticle--container">
            <p>{t("JobsPage.footer.readArticleText")}</p>
            <Link to="/recentWork">
              <SlideButton buttonStyle='Icon&Text'>
                {t("JobsPage.footer.articleButtonText")}
                <img src={arrowRight} alt="arrow icon" />
              </SlideButton>
            </Link>
          </div>
          <div className="buttonsContainer">
            <SlideButton buttonStyle='Icon&Text'>
              <img src={githubIcon} alt="github icon" />
              {t("JobsPage.footer.githubButton")}
            </SlideButton>
            <SlideButton buttonStyle='Icon&Text'>
              <img src={behanceIcon} alt="behance icon" />
              {t("JobsPage.footer.behanceButton")}
            </SlideButton>
            <SlideButton buttonStyle='CaseButton'>
              <img src={onlineIcon} alt="online icon" />
              {t("JobsPage.footer.onlineButton")}
            </SlideButton>
          </div>
        </div>
      </div>
    </Template>
  );
};