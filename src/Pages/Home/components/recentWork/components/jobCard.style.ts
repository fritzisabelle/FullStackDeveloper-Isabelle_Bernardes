import styled, { css } from 'styled-components'

export interface IJobCardProps {
    jobCategory: "UX/UI Design" | "Front End" | "Back End" | "Full Stack" | string;
}

export const JobCardTemplate = styled.div<IJobCardProps>`
width: 100%;
transform: translateY(0%);
transform-origin: bottom;

.slideIn {
    transform: translateY(100%);
    transition: transform 300ms ease-in;
}

.jobCard_cover {
    width: 100%;
    height: 500px;
    object-fit: cover;
}

.jobCard_ProjectCategory_Tag {
    width: 100%;
    text-align: center;
    padding: 0.3em 0.15em 0.15em;
    font-weight: 500;
    text-transform: uppercase;
}

.jobCard_details {
    display: flex;
    justify-content: space-between;
    padding: 1em 0px;

    h5 {
        font-size: 1em;
    }

    p {
        font-size: 0.8em;
    }
}

.jobCard_details_button{
    display: flex;
    align-items: center;
    background: transparent;
    border: none;
    padding: .5em;
}

.jobCard_details_button:hover{
    background: var(--orange);
    padding: .5em;
}

${({ jobCategory }) => {
        switch (jobCategory) {
            case "UX/UI Design":
                return css`
                .jobCard_ProjectCategory_Tag{
                    background-color: var(--blue);
                }          
                `;
            case "Back End":
                return css`
                .jobCard_ProjectCategory_Tag{
                    background-color: var(--pink);
                }
                `;
            case "Front End":
                return css`
                .jobCard_ProjectCategory_Tag{
                    background-color: var(--orange);
                }
                `;
            case "Full Stack":
                return css`
                .jobCard_ProjectCategory_Tag{
                    background-color: var(--green);
                }
                `;
        }
    }}

@media (max-width: 720px){
    min-width: 90%;
    height: fit-content;

    .jobCard_cover {
        width: 100%;
        height: 28em;
        object-fit: cover;
    }
}
`