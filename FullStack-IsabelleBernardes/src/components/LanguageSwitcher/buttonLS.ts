import { styled } from "styled-components";

export const ButtonLanguageSwitcher = styled.button`
  padding: 6px;
  background-color: transparent;
  border: none;
  cursor: pointer;

  &.selected {
    font-weight: 900;
  }

  &:hover {
    color: var(--orange);
    font-weight: 900;
  }
`;
