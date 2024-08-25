import React, { useContext } from "react"
import { useTranslation } from "react-i18next";
import { JobsContext } from "../../providers/JobsContext";
import { JobList } from "../../utils/jobsList"
import { Template } from "./style";
import { stacks } from "../../../src/utils/jobsList"
import { Footer } from "../../components/Footer";
import { Slide } from "react-toastify";
import { SlideButton } from "../../style/Buttons/SlideButton/slideButton.component";
import { Link } from 'react-router-dom';

export const RecentWork = () => {
    const { t, i18n } = useTranslation();
    const { openModalJobsList, openModalJob } = useContext(JobsContext);

    const currentLanguage = i18n.language;

    return (
        <Template>
            <div className="content_container">
                <div className="jobsListContainer">
                    <h1>{t("JobsPage.header.jobsTitle")}</h1>
                    <div className="filterContainer">
                        <p>{t("JobsPage.header.filter")}:</p>
                        <div className="filterOptions">
                            {stacks ? (
                                stacks.map(stack => {
                                    return <span key={stack}>{stack}</span>
                                })

                            ) : null}

                        </div>
                    </div>
                    <div className="jobsMosaicContainer">
                        {JobList ? (
                            JobList.map((job) => {
                                return (
                                    <div className="jobCard JobCardTemplate" key={job.id} style={{ backgroundImage: `url(${job.cover})` }}>
                                        <div className="JobCardHoverInfo">
                                            <div className="projectInfoContainer">
                                                <h3>{job.name}</h3>
                                                {currentLanguage ==='en' ? (
                                                    <p>{job.description?.enDescription}</p>
                                                ):(
                                                    <p>{job.description?.ptDescription}</p>
                                                )}
                                                
                                            </div>
                                            <Link to={`/case/${job.id}`}>
                                                <SlideButton buttonStyle="CaseButton">{t("home.hero.detailButton")}</SlideButton>
                                            </Link>
                                        </div>
                                    </div>
                                )
                            })
                        ) : null}
                    </div>
                </div>
            </div>
            <Footer />
        </Template>
    )
}