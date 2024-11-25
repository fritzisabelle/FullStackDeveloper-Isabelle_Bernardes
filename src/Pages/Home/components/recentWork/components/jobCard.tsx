import React from 'react';
import arrowRight from "../../../../../assets/imgs/arrowRight.svg"
import { JobCardTemplate } from './jobCard.style';
import { Button } from '../../../../../style/Buttons/SlideButton/button.style';
import { useTranslation } from 'react-i18next';
import { JobsContext } from '../../../../../providers/JobsContext';
import { Link } from 'react-router-dom';

export interface IJobsProps {
    name: string,
    category: "UX/UI Design" | "Front End" | "Back End" | "Full Stack" | string;
    type: string | {
        enType: string;
        ptType: string;
    },
    galleryImgs?: string[];
    cover: string;
    id: number;
    description?: {
        ptDescription: string;
        enDescription: string;
    },
    context?: {
        ptProblem: string;
        ptContext: string;
        ptObjective: string;
        enProblem: string;
        enContext: string;
        enObjective: string;
    },
    enStrategyDetail: string;
    ptStrategyDetail: string;
    mistakes?: {
        mistake_1?: string | {
            ptMistakeDetail: string;
            enMistakeDetail: string;
        };
        mistake_2?: string | {
            ptMistakeDetail: string;
            enMistakeDetail: string;
        };
    };
    behanceLink: string;
    repositoryLink: string;
    onlineLink: string;
    linkedinArticle: string;

}

export const JobCardContainer = (job: IJobsProps) => {
    const { t,i18n } = useTranslation()
    const currentLanguage = i18n.language;
    const jobCover = job.cover;

    return (
        <JobCardTemplate jobCategory={job.category}>
            <img src={jobCover} alt="" className="jobCard_cover" />
            <h4 className="jobCard_ProjectCategory_Tag">{job.category}</h4>
            <div className="jobCard_details">
                <div className="jobCard_details_info">
                    <h5 className="jobCard_details_info_JobTitle">{job.name}</h5>
                    {typeof job.type === 'object' && job.type !== null ? (
                        currentLanguage === 'en' ? (
                            <p className="jobCard_details_info_JobType">{job.type.enType}</p>
                        ) : (
                            <p className="jobCard_details_info_JobType">{job.type.ptType}</p>
                        )
                    ) : (
                        <p className="jobCard_details_info_JobType">{job.type}</p>
                    )}
                </div>
                <Link to={`/case/${job.id}`}>
                    <Button buttonStyle='Icon'>
                        <img src={arrowRight} alt="" />
                    </Button>
                </Link>
            </div>
        </JobCardTemplate>
    )
}