import React, { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

interface IJobsContext {
    openModalJob: boolean,
    openModalJobsList: boolean,
    setOpenModalJob: React.Dispatch<React.SetStateAction<boolean>>;
    setOpenModalJobsList: React.Dispatch<React.SetStateAction<boolean>>;
    scrollToSection: (sectionId: string) => void;
}

interface IJobsProvider {
    children: React.ReactNode;
}

export const JobsContext = createContext({} as IJobsContext);

export const JobsProvider = ({ children }: IJobsProvider) => {
    const [openModalJob, setOpenModalJob] = useState(false);
    const [openModalJobsList, setOpenModalJobsList] = useState(false);
    const navigate = useNavigate();

    const scrollToSection = (sectionId) => {
        navigate('/', { replace: true });

        setTimeout(() => {
            const section = document.getElementById(sectionId);
            if (section) {
                window.scrollTo({
                    top: section.offsetTop,
                    behavior: "smooth"
                });
            }
        }, 100);
    };

    return (
        <JobsContext.Provider
            value={{
                setOpenModalJob,
                openModalJob,
                setOpenModalJobsList,
                openModalJobsList,
                scrollToSection,
            }}
        >
            {children}
        </JobsContext.Provider>
    );
}