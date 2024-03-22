import styled from 'styled-components'

export const HeroContainerStyle = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  max-width: 100vw;
  padding: 0px 130px;
  background-color: var(--black-13);

  .spotlight-container{
    position: absolute;
    z-index: 1;
    width: 100vw;
    min-height: 100vh;
    overflow-x: hidden;
    overflow-y: auto;
  }

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

.crazyText {
    z-index: 3;
    max-height: 46vh;
    padding-top: 4px;
    overflow-y: hidden;
    width: 100vw;
    word-wrap: break-word;

    h1 {
      font-family: forma-djr-banner, monospace;
      height: 100%;
      text-align: center;
      color: var(--black-3);
      font-size: 12vw;
      line-height: 0.85;
      letter-spacing: 0.02em;
    }
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
      font-weight: var(--text-weight-Light);
    }

    .itens-bottom_item {
      display: flex;
      gap: 2em;
    }

    .work-button-container {
        display: flex;
        align-items: center;
        flex-direction: column;
        gap: 1em;
        
        button {
          color: var(--black-1);
          background-color: var(--black-13);
          border: none;
          font-weight: var(--text-weight-Bold);
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

  @media (max-width: 490px){
    padding: 0px 24px;

    .bgHero {
      top: 30%;
    }
    .crazyText {   

    h1 {
      font-family: forma-djr-banner, monospace;
      height: 100%;
      text-align: center;
      color: var(--black-3);
      font-size: 14vw;
      line-height: 0.85;
      letter-spacing: 0.02em;
        }
    } 

    .sptl-1 {
      animation: left 8s infinite;
    }

    .sptl-2 {
      animation: right 8s infinite;
    }

    .itens-bottom {
      .itens-bottom_item {
        display: none;
      }

      .work-button-container {
          width: 100%;
          
          button {
            font-size: var(--text-2);
            font-weight: var(--text-weight-Bold);
            }
          }
    }

    @keyframes left {
      0%,
      100% {
        left:400px;
      }
      70% {
        left: -200px;
      }
    }

    @keyframes right {
      0%,
      100% {
        right: 400px;
      }
      70% {
        right: -200px;
      }
    }
  }
`