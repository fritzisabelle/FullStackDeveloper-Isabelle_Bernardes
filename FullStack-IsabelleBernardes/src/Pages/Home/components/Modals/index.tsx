import React, { useContext } from "react"
import { ModalContainer } from "./modal"
import { useTranslation } from "react-i18next"
import { stacks } from "../../../../utils/jobsList"
import { JobsContext } from "../../../../providers/JobsContext"
import arrowRight from '../../../../assets/arrowRight.svg'
import { JobList } from "../../../../utils/jobsList"

export const Modal = () => {
    const { openModalJobsList, setOpenModalJobsList, setOpenModalJob } = useContext(JobsContext);
    const { t } = useTranslation()

    function closeModal() {
        setOpenModalJobsList(false)
        setOpenModalJob(false)
    }

    return (
        <ModalContainer>
            <div className="content_container">
                <div className="buttonsTop">

                    <button className="modalButton closeButton" onClick={() => closeModal()}>
                        <p className="closeModalIcon">X</p>
                        <p>{t("JobsPage.header.close")}</p>
                    </button>
                    {openModalJobsList ? (<button className="modalButton nextButton" onClick={() => setOpenModalJobsList(false)}>
                        <p>{t("JobsPage.header.next")}</p>
                        <img src={arrowRight} alt="arrow right icon" />
                    </button>) : null}

                </div>
                <div className="jobsListContainer">
                    <h1>Choose by stack, category or project type...</h1>
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
                                    <div className="jobCard" style={{ backgroundImage: `url(${job.cover})` }}>
                                        <p>{job.name}</p>
                                    </div>
                                )
                            })
                        ) : null}
                    </div>
                </div>
            </div>
        </ModalContainer>
    )
}