import { styled } from "styled-components";

export const MenuItemStyle = styled.li`
  padding: 20px;
  border-top: 1px solid var(--gray-border);
  color: var(--black-12);
  font-weight: 500;

  &:hover {
    font-weight: 600;
    background-color: var(--orange);
    color: var(--gray-bg);
  }

  button {
    font-size: inherit;
    font-family:inherit;
    color: inherit;
    padding: none;
    margin: none;
    text-style: none;
    background: none;
    border:none;
  }
`;
