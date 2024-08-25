import { styled } from "styled-components";

export const HeaderTemplateStyle = styled.header`
  position: absolute;
  top: 0px;
  left: 0px;
  min-width: 100%;
  padding: 1.5em;
  z-index: 999;

  &.open {
    z-index: 998;
    box-shadow: 1px 2px 6px 0px rgba(1, 1, 1, 0.04);
  }

  display: flex;
  justify-content: space-between;
  align-items: center;

  .logo {
    filter: invert();
    height: auto;
    width: 124px;
  }

  ul {
    display: none;    
  }

  .utils-menu {
    display: flex;
    align-items: center;
    gap: 16px;
  }

  .language-switcher {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .BurguerMenuTrigger {
      filter: invert();
      display: block;
      index: 1000;
    }

  @media (min-width: 1024px) {
    .BurguerMenuTrigger {
      display: none;
    }

    ul {
      display: flex;
      justify-content: center;
      gap: 3rem;

      li {
        box-sizing: content-box;
        display: flex;
        align-items: center;
        padding: 2px;
        
        button {
          background-color: transparent;
          border: none;
          color: var(--gray-bg);
          font-weight: var(--text-weight-Light);
          text-decoration: none;
          font-size: 16px;
          letter-spacing: 1px;

          &:hover {
            color: orange;
          }
        }
      }
    }

    .logo {
      filter: invert();
      height: auto;
      width: auto;
    }
  }
`;
