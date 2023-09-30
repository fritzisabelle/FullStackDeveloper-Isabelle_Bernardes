import React from 'react';
import arrowRight from "../../../../../assets/imgs/arrowRight.svg"

export interface IJobsProps {
    name: string,
    category: string,
    type: string,
    cover: string

}

export const JobCardContainer = (job: IJobsProps) => {
    return (
        <div className="jobCard">
            <img src={job.cover} alt="" className="jobCard_cover" />
            <h4 className="jobCard_ProjectCategory_Tag">{job.category}</h4>
            <div className="jobCard_details">
                <div className="jobCard_details_info">
                    <h5 className="jobCard_details_info_JobTitle">Motolink</h5>
                    <p className="jobCard_details_info_JobType">Web Application</p>
                </div>
                <button className="jobCard_details_button">
                    <img src={arrowRight} alt="" />
                </button>
            </div>
        </div>
    )
}