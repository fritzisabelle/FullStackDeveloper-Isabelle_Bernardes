import { styled } from "styled-components";

export const HeaderTemplateStyle = styled.header`
  position: absolute;
  top: 0px;
  left: 0px;
  min-width: 100%;
  padding: 1.5em;
  z-index: 999;

  &.open {
    z-index: 1;
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

  @media (min-width: 1024px) {
    .BurguerMenuTrigger {
      display: none;
    }

    ul {
      display: grid;
      grid-template-columns: 1fr 1fr 1.5fr 1fr;
      text-align: center;
      justify-items: center;
      width: 51%;

      li {
        a {
          color: var(--gray-bg);
          font-weight: 500;
          text-decoration: none;
          font-size: 16px;
          letter-spacing: 1px;

          &:hover {
            color: orange;
            font-weight: 500;
          }
        }
        display: flex;
        align-items: center;
        padding: 2px;
      }
    }

    .logo {
      filter: invert();
      height: auto;
      width: auto;
    }
  }
`;
