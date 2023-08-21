import { styled } from "styled-components";

export const DropDrowTemplate = styled.ul`
  position: absolute;
  top: 73px;
  left: 0;
  width: 100%;
  background-color: #fafafa;
  box-shadow: 1px 2px 4px 1px rgba(1, 1, 1, 0.05);

  .active {
    display: flex;
    flex-direction: column;
    transform: translateY(0);
    transition: 2s ease;
  }

  .inactive {
    display: none;
  }

  @media (min-width: 1024px) {
    display: none;
  }
`;
