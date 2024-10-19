import React from 'react';
import { useTranslation } from 'react-i18next';
import { JobList } from '../../../../utils/jobsList';
import arrowRight from "../../../../assets/imgs/arrowRight.svg"
import { JobCardContainer } from './components/jobCard';
import { RecentWorkStyle, Subtitle, Title } from './style';
import { useScroll, useTransform } from "framer-motion"
import { Button } from '../../../../style/Buttons/SlideButton/button.style';
import { Link } from 'react-router-dom';

export const RecentWorkSection = () => {
    const { t } = useTranslation();
    const { scrollYProgress } = useScroll();
    const x = useTransform(scrollYProgress, [0, 1], [0, -800]);
    const x2 = useTransform(scrollYProgress, [0, 1], [-100, 800]);
    const JobsToRender = JobList.slice(0, 4)

    return (
        <RecentWorkStyle id="recentWorkSection">
            <Title style={{ x }} className='recentWork-subtitle'>{t("home.JobSection.title")} <span>{t("home.JobSection.title")}</span> {t("home.JobSection.title")} <span>{t("home.JobSection.title")}</span> {t("home.JobSection.title")} <span>{t("home.JobSection.title")}</span> </Title>
            <Subtitle style={{ x: x2 }}>{t("home.JobSection.subtitle")}</Subtitle>
            <div className="jobCards-container">
                {JobsToRender ? (
                    JobsToRender.map((job) => {
                        return (
                            <JobCardContainer key={job.id} {...job} />
                        )
                    })
                ) :
                    (<h2>No jobs yet!</h2>)}
            </div>
            <div className="button-container">
                <Link to="/recentWork">
                    <Button buttonStyle='Icon&Text'>
                        {t("home.JobSection.seeMore")}
                        <img src={arrowRight} alt="arrow icon" />
                    </Button>
                </Link>
            </div>
        </RecentWorkStyle>
    )
}