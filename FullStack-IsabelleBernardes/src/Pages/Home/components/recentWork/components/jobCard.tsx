import React, { useContext, useEffect } from 'react';
import arrowRight from "../../../../../assets/imgs/arrowRight.svg"
import { JobCardTemplate } from './jobCard.style';
import { Button } from '../../../../../style/Buttons/SlideButton/button.style';
import { useTranslation } from 'react-i18next';
import { JobsContext } from '../../../../../providers/JobsContext';
import { Link } from 'react-router-dom';

export interface IJobsProps {
    name: string,
    category: "UX/UI Design" | "Front End" | "Back End" | "Full Stack" | string;
    type: string,
    cover: string,
    id: number
}

export const JobCardContainer = (job: IJobsProps) => {
    const { t } = useTranslation()
    const { openModalJob, setOpenModalJob } = useContext(JobsContext)

    return (
        <JobCardTemplate jobCategory={job.category}>
            <img src={job.cover} alt="" className="jobCard_cover" />
            <h4 className="jobCard_ProjectCategory_Tag">{job.category}</h4>
            <div className="jobCard_details">
                <div className="jobCard_details_info">
                    <h5 className="jobCard_details_info_JobTitle">Motolink</h5>
                    <p className="jobCard_details_info_JobType">{t("projectTypeAppWeb")}</p>
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