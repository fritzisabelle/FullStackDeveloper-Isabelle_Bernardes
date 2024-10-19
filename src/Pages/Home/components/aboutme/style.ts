import styled from "styled-components";
import { motion } from 'framer-motion'

export const AboutMeSectionContainer = styled.section`
overflow-x: hidden;

.textDetail {
    font-size: var(--title-h1);
    font-weight: var(--text-weight-Bold);
    color: var(--black-1);
}

.textTop{
    position: relative;
    z-index: 2;
    margin-bottom: -80px;
}

.textBottom{
    position: relative;
    z-index: 4;
    text-align: right;
    margin-top: -80px;
}

.profilePicture-container{
    max-width: 100%;
}

.profilePicture {
    width: 33.3%;
    height: auto;
}

.side-picture {
    opacity: 15%;
    z-index: 0;
}

.middle-picture{
    position: relative;
    z-index: 3;
}

.softSkills-cards-container{
    width: 100%;
    display: flex;
    gap: 1em;

    justify-content: center;
}

@media (max-width:760px){
    .textDetail {
        font-size: 4em;
        overflow-x: hidden;
    }
    .textTop{
        margin-bottom: -60px;
    }

    .side-picture {
        display: none;
    }

    .middle-picture{
        width: 60%;
        left: 20%;
    }

    .profilePicture-container{
        padding: 24px 0px;
    }

    .textBottom{
        margin-top: -60px;
        word-wrap: break-word;
    }

    .profilePicture__container {
        margin-bottom: 32px;
    }

    .softSkills-cards-container{
        overflow-y: scroll;
        justify-content: left;
        padding: 0px 20px 16px;
    }
}

`

export const DetailTitle = styled(motion.p)`
    transition: all 2s cubic-bezier(0.165, 0.84, 0.44, 1);
`