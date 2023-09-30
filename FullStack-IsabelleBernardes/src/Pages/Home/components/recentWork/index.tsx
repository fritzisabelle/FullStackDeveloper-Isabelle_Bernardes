import React from 'react';
import { useTranslation } from 'react-i18next';
import { JobList } from '../../../../utils/jobsList';
import arrowRight from "../../../../assets/imgs/arrowRight.svg"
import { JobCardContainer } from './components/jobCard';
import { RecentWorkStyle } from './style';

export const RecentWorkSection = () => {
    const { t } = useTranslation();

    return (
        <RecentWorkStyle>
            <h3>RECENT WORK <span>RECENT WORK</span> RECENT WORK <span>RECENT WORK</span> RECENT WORK <span>RECENT WORK</span> </h3>
            <h2>DESIGN & DEVELOPMENT</h2>
            <div className="jobCards-container">
                {JobList ? (
                    JobList.map((job) => {
                        return <JobCardContainer key={job.id} {...job} />;
                    })
                ) :
                    (<h2>No jobs yet!</h2>)}
            </div>
            <div className="button-container">
                <button className="button-seeMore">
                    Ver mais projetos
                    <img src={arrowRight} alt="arrow icon" />
                </button>
            </div>
        </RecentWorkStyle>
    )
}