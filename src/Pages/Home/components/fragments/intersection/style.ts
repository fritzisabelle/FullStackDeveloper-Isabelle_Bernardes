import styled from "styled-components";

export const IntersectionContainer = styled.div`
  width: 100%;
  justify-content: center;
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
        width: 3em;
        opacity: 35%;
      }

  .arrow {
    animation: arrowBlink 1.3s infinite alternate;
    opacity: 0;
    transform: translateY(0);
  }

  .arrow1 {
    animation-name: arrowBlink;
    animation-delay: 0s;
  }

  .arrow2 {
    animation-name: arrowBlink;
    animation-delay: .5s;
  }

  .arrow3 {
    animation-name: arrowBlink;
    animation-delay: 1s;
  }

  @keyframes arrowBlink {
    0% {
      opacity: 1;
      transform: translateY(0);
    }
    100% {
      opacity: 0;
      transform: translateY(4.6512px);
    }
  }
`