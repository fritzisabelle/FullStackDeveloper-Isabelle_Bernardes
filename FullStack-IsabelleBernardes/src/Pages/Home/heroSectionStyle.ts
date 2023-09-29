import { styled } from "styled-components";

export const HeroSectionTemplate = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  min-width: 100vw;

  padding: 0px 130px;
  overflow-x: hidden;

  background-color: var(--black-13);

  .spotlight {
    border-radius: 50%;
    background: radial-gradient(#363636, transparent);
    filter: blur(80px);
    height: 400px;
    width: 400px;
    z-index: 1;
  }

  .sptl-1 {
    position: absolute;
    top: -10vh;
    animation: left 20s infinite;
  }

  .sptl-2 {
    position: absolute;
    bottom: -20vh;
    animation: right 20s infinite;
  }

  .bgHero {
    width: 100vw;
    top: 0;
    left: 0;
    z-index: 2;
    position: absolute;
  }

  h1 {
    z-index: 3;
    text-align: center;
    color: var(--black-3);
    font-size: 8em;
    line-height: 0.8;
    letter-spacing: 0.02em;
  }

  .itens-bottom {
    z-index: 5;
    width: 100%;
    padding: 0px 2em;
    position: absolute;
    bottom: 20px;
    display: flex;
    align-items: end;
    justify-content: space-between;

    p {
      color: var(--black-3);
    }

    div {
      display: flex;
      gap: 2em;
    }

    .work-button-container {
      display: flex;
      align-items: center;
      flex-direction: column;
      gap: 1em;

      .intersection-container {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 0;

        img {
          width: 3em;
        }
      }
    }
  }

  @keyframes left {
    0%,
    100% {
      left: 1200px;
    }
    70% {
      left: -200px;
    }
  }

  @keyframes right {
    0%,
    100% {
      right: 1200px;
    }
    70% {
      right: -200px;
    }
  }
`;
