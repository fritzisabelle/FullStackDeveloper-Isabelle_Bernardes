import styled from "styled-components";

export const AboutMeCardStyle = styled.div`
width: 20em;
height: 17em;
background-color: transparent;
border-radius: 1.25em;
border: 1px solid var(--black-3);
padding: 1.25em 1.5em;

.softSkill-card_header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding-bottom: 1em;

    .softSkill-card_title{
        color: var(--black-3);
        font-size: var(--text-3);
        font-weight: var(--text-weight-Bold);
    }

    .softSkill-card_number{
        color: var(--black-8);
        font-size: var(--text-1);
        font-weight: var(--text-weight-Light);
    }  
}

.aboutMeText{
    font-size: 1em;
    font-weight: 400;
    color: var(--black-4);
    font-style: normal;
}

.skillTag{
    display: inline-block;
    max-width: fit-content;
    margin-right: .25em;
    margin-bottom: .25em;
    padding: .5em 1em;
    border: 1px solid var(--black-2);
    border-radius: 2em;
    color: var(--black-2);
    font-size: .9em;
}

@media (max-width: 550px){
    min-width: 85vw;
}
`