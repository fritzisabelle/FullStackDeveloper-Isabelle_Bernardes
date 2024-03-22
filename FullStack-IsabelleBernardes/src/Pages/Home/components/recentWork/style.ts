import styled from "styled-components";
import { motion } from "framer-motion";

export const RecentWorkStyle = styled.section`
position: relative;
z-index: 7;
color: var(--black-3);
padding: 6em 0px;


.jobCards-container {
  display: flex;
  gap: 16px;
  max-width: 100%;
  padding: 0px 2em;    
  }

.button-container{
    width: 100%;
    display: flex;
    justify-content: center;
    padding-top: 4em;


    .button-seeMore{
      display: flex;
      align-items: center;
      gap: 6em;
      padding: .5em 1em;

      color: var(--black-3);
      background-color: transparent;
      border: 1px solid var(--black-3);
      border-radius: 50px;
    }
    
    .button-seeMore:hover{
      background-color: var(--orange);
      font-weight: 700;
    }
  }

  @media (max-width: 720px) {
    padding: 3em 0px;

    .jobCards-container {
  padding: 0px 20px;    
  }
  }

`

export const Title = styled(motion.h3)`
  font-size: var(--title-h3);
  white-space: nowrap;
  transition: all 2s cubic-bezier(0.165, 0.84, 0.44, 1);

  span {
    color: transparent;
    -webkit-text-stroke-width: .3px;
    -webkit-text-stroke-color: var(--black-1);
  }

  @media (max-width: 720px) {
    font-size: var(--title-h4);
  }
`

export const Subtitle = styled(motion.h2)`
  font-size: var(--title-h2);
  white-space: nowrap;
  transition: all 2s cubic-bezier(0.165, 0.84, 0.44, 1);

  color: transparent;
    -webkit-text-stroke-width: .3px;
    -webkit-text-stroke-color: var(--black-1);

    @media (max-width: 720px) {
    font-size: var(--title-h3);
  }
`