import styled from "styled-components";
import { motion } from 'framer-motion'

export const ContactSectionStyle = styled.section`
overflow-x: hidden;
display: flex;
flex-direction: column;
align-items: center;

.scrollContainer{
    display: flex;
    align-items: center;
    overflow: hidden;
    gap: 24px;
    white-space: nowrap;

    h2 {
      display: inline-block;
      font-size: var(--title-h2);
      padding-bottom: 4rem;
      color: var(--black-3);
    }

    animation: scrollText 30s linear infinite;
}

.scrollContainer:hover{
  animation-play-state: paused;
}

@keyframes scrollText {
  0% {
    transform: translateX(0%);
  }
  100% {
    transform: translateX(-50%);
  }
}

.contactButtons-container{
    display: flex;
    text-align: center;
    align-items: center;
    justify-content: center;
    gap: 1em;
    width: fit-content;
    padding-bottom: 4rem;

    div {
        min-width: 350px;

        h3 {
        letter-spacing: 1px;
        color: var(--black-3);
        font-size: 1.4rem;
        text-transform: uppercase;
        padding-bottom: 1em;
        }

        button {
            width: 100%;
            color: var(--black-3);
            padding: .5rem 1.5rem;
            background: none;
            border: 1px solid var(--black-3);
            border-radius: 1rem;
        }

        a {
          color: inherit;
        }
    }
}

@media (max-width: 460px){
  .scrollContainer{
    h2 {
      font-size: var(--title-h3);
    }

    animation: scrollText 30s linear infinite;
  }

  .contactButtons-container{
    padding: 0 16px;
    display: flex;
    flex-direction: column;

    div {
      margin-bottom: 16px;

      h3 {
      margin-bottom: -8px;
      }
    }
  }
}
`